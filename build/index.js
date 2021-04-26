"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const postsRoutes = require('./routes/router');
const app = express();
app.use(bodyParser.json());
dotenv_1.default.config();
const cors = require("cors");
app.use(cors());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin: http://localhost:5000");
    next();
});
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('MongoDB connected!'))
    .catch((error) => console.log(error));
app.use("/api", postsRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running in http://localhost:${PORT}`));
//# sourceMappingURL=index.js.map