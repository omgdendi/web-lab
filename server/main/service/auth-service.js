const User = require("../models/user-model");
const bcrypt = require("bcryptjs");
const Role = require("../models/role-model");
const tokenService = require("./token-service");
const ApiError = require("../exceptions/api-error");
const UserDTO = require("../dtos/user-dto");

class AuthService {
    async registration(user) {
        const {username, password} = user;
        const condidate = await User.findOne({username})
        if (condidate) {
            throw ApiError.BadRequest("Пользователь с таким именем уже существует");
        }
        const hashPassword = bcrypt.hashSync(password, 7);
        const userRole = await Role.findOne({value: "USER"});
        const checkedUser = await User.create({username, password: hashPassword, roles: "USER"});
        const userDto = new UserDTO(checkedUser);
        const tokens = tokenService.generateTokens({id: userDto.id});
        await tokenService.saveToken(userDto.id, tokens.refreshToken);
        return {
            ...tokens,
            user: userDto
        };
    }

    async login(user) {
        const {username, password} = user;
        const condidate = await User.findOne({username})
        if (!condidate) {
            throw ApiError.BadRequest("Пользователь не найден");
        }
        const validatePassword = bcrypt.compareSync(password, condidate.password);
        if (!validatePassword) {
            throw ApiError.BadRequest("Неверный пароль");
        }
        const userDto = new UserDTO(condidate);
        const tokens = tokenService.generateTokens({id: userDto.id});
        await tokenService.saveToken(userDto.id, tokens.refreshToken);
        return {
            ...tokens,
            user: userDto
        };
    }

    async logout(refreshToken) {
        const token = await tokenService.removeToken(refreshToken);
        return token;
    }

    async refresh(refreshToken) {
        if (!refreshToken) {
            throw ApiError.UnauthorizedError();
        }
        const userData = tokenService.validateRefreshToken(refreshToken);
        const tokenFromDb = await tokenService.findToken(refreshToken);
        if (!userData || !tokenFromDb) {
            throw ApiError.UnauthorizedError();
        }
        const user = await User.findById(userData.id);
        const userDto = new UserDTO(user);
        const tokens = tokenService.generateTokens({id: user._id});
        await tokenService.saveToken(user._id, tokens.refreshToken);
        return {
            user: userDto,
            accessToken: tokens.accessToken,
            refreshToken: tokens.refreshToken
        };
    }
}

module.exports = new AuthService();