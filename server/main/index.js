require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const doteRouter = require('./routers/dote-router');
const authRouter = require('./routers/auth-router');
const errorMiddleware = require('./middleware/error-middleware');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 8080;
const app = express();

app.use(bodyParser.json())
app.use(cors({
    credentials: true,
    origin: process.env.CLIENT_URL
}));
app.use(cookieParser());
app.use('/login', (req, res) => {
    res.send({
        token: 'test123'
    });
});
app.use('/api', doteRouter);
app.use('/api/auth', authRouter);
app.use(errorMiddleware);

const startApp = async () => {
    try {
        await mongoose.connect(process.env.DB_URL, {useUnifiedTopology: true, useNewUrlParser: true});
        app.listen(PORT, () => {
            console.log("SERVER STARTED ON PORT " + PORT);
        })
    } catch (e) {
        console.log(e);
    }
}

startApp();
