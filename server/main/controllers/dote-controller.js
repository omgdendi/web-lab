const DoteService = require("../service/dote-service");

class DoteController {
    async create (req, res) {
        try {
            const dote = await DoteService.create(req);
            res.json(dote);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async getAll (req, res) {
        try {
            const dots = await DoteService.getAll(req);
            return res.json(dots);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async delete (req, res) {
        try {
            const dote = await DoteService.delete(req.params.id);
            return res.json(dote);
        } catch (e) {
            res.status(500).json(e);
        }
    }
}

module.exports = new DoteController();