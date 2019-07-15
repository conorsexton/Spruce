# Spruce
Spruce is an opinionated way to generate professional, marked up text for the web. Input plain text or Markdown and get back clean HTML with finely-tuned typographic and semantic details. 
## Usage
Using Spruce is easy—here’s how:
1. Add plain text or Markdown to the main input form and hit **Run**.
2. View your spruced up text. Click any highlight to learn more about individual changes.
3. Copy the output HTML below your rendered text and use wherever.
## How it works
#### Typography
Spruce automatically fixes common typographic “errors”—approximations in text that go against best practices for punctuation and typography, including:
* Dumb/straight apostrophes and quotation marks
* Pseudo ellipses
* Hyphens and dashes
* Multiplication symbols

The ruleset Spruce follows is based on RegEx—so while there may be edge cases it can’t catch (like deeply nested quotation marks), you can easily add new rules as your style needs grow.
#### HTML semantics
For now, Spruce makes two small semantic changes to HTML
* It finds references to *time* and wraps them in a `<time>` element
* If wraps pre-defined abbreviations and acronyms in an `<abbr>` element
#### Output
Spruce outputs HTML you can copy with one click. In the preview mode, each change to your text gets highlighted—you can click on any highlights to learn more about the rule the change follows.
## Contributing
Spruce is still in early stages of development. Contributions are welcome—feel free to add issues or open a pull request.
