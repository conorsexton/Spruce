const md = require('marked');
const { primes } = require('./typographyRules.js');

const smartenQuotes = (string) => {
  const dumbApostrophe = /(?<=[A-z])&#39;|'(?=\w)/gm;
  const openingSingleQuote = /(?<=^|\W)('|&#39;)/gm;
  const closingSingleQuote = /(?<!\d)('|&#39;)(?!\w)/gm;
  string = string.replace(dumbApostrophe, '’');
  string = string.replace(openingSingleQuote, '‘');
  return string.replace(closingSingleQuote, '’');
};

// const primes = (string) => {
//   const fakeDoublePrimes = /(?<=\d)(”|&#34;|(?:&#39;){2}|&quot;|"|'')/gm;
//   const fakeSinglePrimes = /(?<=\d)('|&#39;|’){1}/gm;
//   string = string.replace(fakeDoublePrimes, '″');
//   return string.replace(fakeSinglePrimes, '′');
// };
module.exports = {
  parseMarkdown: (req, res, next) => {
    res.locals.text = md(req.body);
    next();
  },
  tuneTypography: (req, res, next) => {
    // For each rule in rules, if rule.enabled, rule.replace(text)
    res.locals.text = primes.replace(res.locals.text);
    // res.locals.text = smartenQuotes(res.locals.text);
    next();
  },
};
