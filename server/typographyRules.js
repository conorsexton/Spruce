/* eslint-disable quotes */
const wrapReplacement = (replacement, original, rule) => `<span class="typography" data-original="${original}" data-rule="${rule}">${replacement}</span>`;
const rules = {
  smartQuotes: {
    enabled: true,
    name: 'Smart Quotes',
    description: `Use smart quotes to improve legibility and visual rhythm`,
    replace: (string) => {
      const result = typeof string === 'object' ? string : {
        htmlToCopy: string,
        editorsCut: string,
      };
      const openingDoubleQuote = /(?<!&quot;)(?<=\s|^|>)&quot;(?=\w)/gm;
      const closingDoubleQuote = /(?<!\d+'|&#39;\d+)&quot;(?=$|[.?!:\-–—\s<])/gm;
      const openingSingleQuote = /(?<=^|\W)('|&#39;)(?=.*?(&#39;)[\w<]|$)/gm;
      const closingSingleQuote = /(?<!\d)('|&#39;)(?!\w)/gm;
      result.htmlToCopy = result.htmlToCopy.replace(openingDoubleQuote, '“');
      result.editorsCut = result.editorsCut.replace(
        openingDoubleQuote,
        wrapReplacement('“', '＂', `smartQuotes`),
      );
      result.htmlToCopy = result.htmlToCopy.replace(closingDoubleQuote, '”');
      result.editorsCut = result.editorsCut.replace(
        closingDoubleQuote,
        wrapReplacement(`”`, `＂`, `smartQuotes`),
      );
      result.htmlToCopy = result.htmlToCopy.replace(openingSingleQuote, `‘`);
      result.editorsCut = result.editorsCut.replace(
        openingSingleQuote,
        wrapReplacement(`‘`, `＇`, `smartQuotes`),
      );
      result.htmlToCopy = result.htmlToCopy.replace(closingSingleQuote, `’`);
      result.editorsCut = result.editorsCut.replace(
        closingSingleQuote,
        wrapReplacement(`’`, `＇`, `smartQuotes`),
      );
      return result;
    },
  },
  primes: {
    enabled: true,
    name: 'Primes',
    description: `Use true prime and double prime glyphs (′,″) instead of apostrophes or quotes (',")`,
    replace: (string) => {
      const result = typeof string === 'object' ? string : {
        htmlToCopy: string,
        editorsCut: string,
      };
      const doublePrimes = /(?<=\d)(&#34;|(?:&#39;){2}|&quot;|"|'')/gm;
      const singlePrimes = /(?<=\d)('|&#39;){1}/gm;
      result.htmlToCopy = result.htmlToCopy.replace(doublePrimes, '″');
      result.editorsCut = result.editorsCut.replace(
        doublePrimes,
        wrapReplacement('″', '＂', 'primes'),
      );
      result.htmlToCopy = result.htmlToCopy.replace(singlePrimes, '′');
      result.editorsCut = result.editorsCut.replace(
        singlePrimes,
        wrapReplacement('′', `＇`, 'primes'),
      );
      return result;
    },
  },
  apostrophes: {
    enabled: true,
    name: 'Apostrophes',
    description: `Use proper apostrophes to improve visual rhythm and legibility`,
    replace: (string) => {
      const result = typeof string === 'object' ? string : {
        htmlToCopy: string,
        editorsCut: string,
      };
      const apostrophe = /(?<=[A-z\s])&#39;|'(?=\w)/gm;
      result.htmlToCopy = result.htmlToCopy.replace(apostrophe, '’');
      result.editorsCut = result.editorsCut.replace(
        apostrophe,
        wrapReplacement('’', '＇', 'apostrophes'),
      );
      return result;
    },
  },
  emDashes: {
    enabled: true,
    name: 'Em Dashes',
    description: `Use an em dash—which is specifically designed for parenthetical clauses—instead of two hyphens`,
    replace: (string) => {
      const result = typeof string === 'object' ? string : {
        htmlToCopy: string,
        editorsCut: string,
      };
      const doubleHyphen = /(?<=[A-z])\s?-{2}\s?(?=[A-z])/g;
      result.htmlToCopy = result.htmlToCopy.replace(doubleHyphen, ' — ');
      result.editorsCut = result.editorsCut.replace(
        doubleHyphen,
        wrapReplacement('—', '--', 'emDashes'),
      );
      return result;
    },

  },
  enDashRanges: {
    enabled: true,
    name: 'En Dash for Ranges',
    description: `Use an en dash (instead of a hyphen) for ranges`,
    replace: (string) => {
      const result = typeof string === 'object' ? string : {
        htmlToCopy: string,
        editorsCut: string,
      };
      const hyphenRange = /(?<=\d)\s?-\s?(?=\d)/g;
      result.htmlToCopy = result.htmlToCopy.replace(hyphenRange, '–');
      result.editorsCut = result.editorsCut.replace(
        hyphenRange,
        wrapReplacement('–', '-', 'enDashRanges'),
      );
      return result;
    },
  },
  multiplicationSymbols: {
    enabled: true,
    name: 'Multiplication Symbol',
    description: `Use a proper multiplication symbol for dimensions and mathematical expressions`,
    replace: (string) => {
      const result = typeof string === 'object' ? string : {
        htmlToCopy: string,
        editorsCut: string,
      };
      const fakeMultiplication = /(?<=\d\s?)x(?=\s?\d|\s)/g;
      result.htmlToCopy = result.htmlToCopy.replace(fakeMultiplication, '×');
      result.editorsCut = result.editorsCut.replace(
        fakeMultiplication,
        wrapReplacement('×', 'x', 'multiplicationSymbols'),
      );
      return result;
    },
  },
  ellipses: {
    enabled: true,
    name: 'Ellipses',
    description: `Use a proper ellipses to indicate omissions or pauses (don’t approximate with three periods)`,
    replace: (string) => {
      const result = typeof string === 'object' ? string : {
        htmlToCopy: string,
        editorsCut: string,
      };
      const fakeEllipses = /(?<=\w)\.{2,10}/g;
      result.htmlToCopy = result.htmlToCopy.replace(fakeEllipses, '…');
      result.editorsCut = result.editorsCut.replace(
        fakeEllipses,
        wrapReplacement('…', '...', 'ellipses'),
      );
      return result;
    },
  },
};


module.exports = rules;
