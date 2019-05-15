const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const md = require('marked');

const app = express();
const PORT = 3000;

app.use(bodyParser.text())

app.post('/api/parse', (req, res, next) => {
  res.locals.text = md(req.body);
  next();
});

app.listen(3000);

module.exports = app;
