// app.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

// Middleware
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

// DB connection (MongoDB local or Atlas)
// mongoose.connect('mongodb://127.0.0.1:27017/portfolioDB', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }).then(() => console.log("MongoDB Connected"))
//   .catch(err => console.log(err));

// Routes
const pageRoutes = require('./routes/pages');
app.use('/', pageRoutes);

// Start server
app.listen(9000, () => {
  console.log('Server started on http://localhost:9000');
});
