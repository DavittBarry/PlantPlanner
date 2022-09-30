require('dotenv').config();
const port=3000
const express = require('express');
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require('./routes/users');
const authRoutes = require('./routes/auth');
const { FontDownload } = require('@material-ui/icons');

//database connection
connection()

// middlewares
app.use(express.json())
app.use(cors())

//routes
app.use("/api/users", userRoutes)
app.use("/api/auth", authRoutes)

app.listen(process.env.PORT, () => console.log(`Listening on ${port}...`))