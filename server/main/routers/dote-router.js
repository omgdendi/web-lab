const Router = require("express");
const DoteController = require("../controllers/dote-controller");
const authMiddleware = require("../middleware/auth-middleware")

const doteRouter = new Router();

doteRouter.post('/dote', authMiddleware, DoteController.create);
doteRouter.get('/dots', authMiddleware, DoteController.getAll);
doteRouter.delete('/dots/:id', authMiddleware, DoteController.delete);

module.exports = doteRouter;