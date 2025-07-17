// routes/pages.js
const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// Home page
router.get('/', (req, res) => {
  res.render('pages/home', { activePage: 'home' });
});

// About page
router.get('/about', (req, res) => {
  res.render('pages/about', { activePage: 'about' });
});

// Projects page
router.get('/projects', (req, res) => {
  res.render('pages/projects', { activePage: 'projects' });
});

// Contact page
router.get('/contact', (req, res) => {
  res.render('pages/contact', { activePage: 'contact' });
});
router.get('/Codealpha.ejs', (req, res) => {
  res.render('pages/Codealpha.ejs', { activePage: 'projects' });
});
router.get('/projects.ejs', (req, res) => {
  res.render('pages/projects.ejs', { activePage: 'projects' });
});
router.get('/certificates.ejs', (req, res) => {
  res.render('pages/certificates.ejs', { activePage: 'achievement' });
});
// Achievement page
router.get('/achievement', (req, res) => {
  res.render('pages/achievement', { activePage: 'achievement' });
});

module.exports = router;
