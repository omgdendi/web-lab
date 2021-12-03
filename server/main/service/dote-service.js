const Dote = require("../models/dote-model");
const tokenService = require("./token-service");
const DoteDTO = require("../dtos/dote-dto");

class DoteService {
    checkResult(x, y, r) {
        let result = false;
        if ((x >= 0) && (y <= 0) && (x <= r) && (y >= -r / 2)) {
            result = true
        } else if ((x < 0) && (y <= 0) && (y >= -(x + r / 2))) {
            result = true
        } else if ((x > 0) && (y > 0) && (x ** 2 + y ** 2 <= r ** 2)) {
            result = true
        }
        return result;
    }

    async create(req) {
        const token = req.headers.authorization.split(' ')[1];
        const body = req.body;
        const x_value = Number(body.x_value);
        const y_value = Number(body.y_value);
        const r_value = Number(body.r_value);
        const result = this.checkResult(x_value, y_value, r_value);
        const userData = tokenService.validateAccessToken(token);
        const dote = await Dote.create({x_value, y_value, r_value, result, user: userData.id});
        const doteDto = new DoteDTO(dote);
        return doteDto;
    }

    async getAll(req) {
        const token = req.headers.authorization.split(' ')[1];
        const userData = tokenService.validateAccessToken(token);
        const dots = await Dote.find({user: userData.id});
        const dotsDto = dots.map(dote => new DoteDTO(dote));
        return dotsDto;
    }

    async delete(id) {
        if (!id) {
            throw new Error('Не указан ID')
        }
        const dote = await Dote.findByIdAndDelete(id);
        const doteDto = new DoteDTO(dote);
        return doteDto;
    }
}

module.exports = new DoteService();