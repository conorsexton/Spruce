/* eslint-disable quotes */
const semantics = {
  dates: {
    enabled: true,
    description: `Wrap dates and times in a <time> tag to make them machine-readable`,
    process: (html) => {
      const time = /\d{1,2}:\d{2}(?::\d{2})?\s?(?:[ap]\.?m\.?)?/gmi;
      let match = time.exec(html.htmlToCopy);
      while (match !== null) {
        const datetime = match[0].replace(/\s+?p\.?m\.?/i, '');
        let processedMatch = match[0];
        if (/\s?[ap]\.?m\.?/i.test(match[0])) {
          let meridiem = match[0].toLowerCase().includes('a') ? 'am' : 'pm';
          meridiem = meridiem === 'am' 
            ? `<abbr class="time" title="ante meridiem">${meridiem}</abbr>`
            : `<abbr class="time" title="post meridiem">${meridiem}</abbr>`
          processedMatch = match[0].replace(/\s?[ap]\.?m\.?/i, meridiem);
        }
        html.htmlToCopy = html.htmlToCopy.replace(
          match[0],
          `<time datetime="${datetime}">${processedMatch}</time>`,
        );
        html.editorsCut = html.htmlToCopy;
        match = time.exec(match.input);
      }
      return html;
    },
  },
};

module.exports = semantics;