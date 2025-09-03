// app.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

// Middleware
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
const path = require("path");
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Routes
const pageRoutes = require('./routes/pages');
app.use('/', pageRoutes);

// Start server
module.exports = app; 
