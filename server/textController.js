/* eslint-disable no-restricted-syntax */
const md = require('marked');
const rules = require('./typographyRules.js');
const semantics = require('./semantics.js');

module.exports = {
  parseMarkdown: (req, res, next) => {
    res.locals.text = md(req.body);
    next();
  },
  // Make typographic adjustments
  tuneTypography: (req, res, next) => {
    for (const rule in rules) {
      if (rules[rule].enabled) {
        res.locals.text = rules[rule].replace(res.locals.text);
      }
    }
    // Make HTML improvements
    for (const rule in semantics) {
      if (semantics[rule].enabled) {
        res.locals.text = semantics[rule].process(res.locals.text);
      }
    }
    next();
  },
};
