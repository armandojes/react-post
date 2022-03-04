import MarkdownIt from 'markdown-it';
import highlightjs from 'markdown-it-highlightjs';

const parseMarkdown = (markdownSource) => {
  const markdownParser = new MarkdownIt();
  markdownParser.use(highlightjs);
  const html = markdownParser.render(markdownSource);
  return html;
};

export default parseMarkdown;
