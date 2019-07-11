/* eslint-disable quotes */
const COMMON_ACRONYMS = {
  // List of acronyms and expanded version
  HTML: 'HyperText Markup Language',
  CSS: 'Cascading Style Sheet',
  NASA: 'National Aeronautics and Space Administration',
  USA: 'United States of America',
};
const semantics = {
  dates: {
    enabled: true,
    name: 'Dates and Times',
    description: `Wrap dates and times in a <time> tag (with a date-time) to make them machine-readable. 
    Use an <abbr> tag for a.m. and p.m. suffixes`,
    process: (html) => {
      // Matches most references to time (but not phrases like “9 in the morning”)
      const time = /\d{1,2}:\d{2}(?::\d{2})?\s?(?:[ap]\.?m\.?)?/gmi;
      let match = time.exec(html.htmlToCopy);
      while (match !== null) {
        // Remove a.m. and p.m. designations
        const datetime = match[0].replace(/\s+?p\.?m\.?/i, '');
        let processedMatch = match[0];
        if (/\s?[ap]\.?m\.?/i.test(match[0])) {
          // Add meridiem markers with proper abbrevation markup
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
        html.editorsCut = html.editorsCut.replace(
          match[0],
          `<span class="html" data-original="${match[0]}" data-rule="dates"><time datetime="${datetime}">${processedMatch}</time></span>`,
        );
        match = time.exec(match.input);
      }
      return html;
    },
  },
  acronyms: {
    enabled: true,
    name: 'Acronyms',
    description: `Use an <abbr> tag for acronyms, which helps users (and computers) gain additional context—it also makes it easy to style acronyms in small caps, for better visual flow`,
    process: (html) => {
      // @TODO: Match based off constant list, not RegEx
      const acronym = /HTML|CSS|NASA|USA/gm;
      let match = acronym.exec(html.htmlToCopy);
      while (match !== null) {
        let processedMatch = match[0];
        html.htmlToCopy = html.htmlToCopy.replace(
          match[0],
          `<abbr title="${COMMON_ACRONYMS[processedMatch]}">${processedMatch}</abbr>`,
        );
        html.editorsCut = html.editorsCut.replace(
          match[0],
          `<span class="html" data-original="${processedMatch}" data-rule="acronyms"><abbr title="${COMMON_ACRONYMS[processedMatch]}">${processedMatch}</abbr></span>`,
        );
        match = acronym.exec(match.input);
      }
      return html;
    },
  },
};

module.exports = semantics;
