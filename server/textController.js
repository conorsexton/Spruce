/* eslint-disable no-restricted-syntax */
const md = require('marked');
const rules = require('./typographyRules.js');
const semantics = require('./semantics.js');

module.exports = {
  parseMarkdown: (req, res, next) => {
    res.locals.text = md(req.body);
    next();
  },
  tuneTypography: (req, res, next) => {
    // @TODO: For each rule in rules, if rule.enabled, rule.replace(text)
    for (const rule in rules) {
      if (rules[rule].enabled) {
        res.locals.text = rules[rule].replace(res.locals.text);
      }
    }
    for (const rule in semantics) {
      if (semantics[rule].enabled) {
        res.locals.text = semantics[rule].process(res.locals.text);
      }
    }
    // res.locals.text = smartQuotes.replace(res.locals.text);
    // res.locals.text = apostrophes.replace(res.locals.text);
    // res.locals.text = dates.process(res.locals.text);
    next();
  },
};
