import React from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import atomOneDark from 'react-syntax-highlighter/dist/esm/styles/hljs/atom-one-dark';
import ReactMarkdown from "react-markdown";

type MarkdownProps = {
  source: string,
}

atomOneDark.hljs.background = "#0c1020"
atomOneDark.hljs.fontSize = 13

export const Markdown = ({source}: MarkdownProps) => {
  return <ReactMarkdown
    source={source}
    renderers={{
      code: ({language, value}) => <SyntaxHighlighter
        language={language === "js" ? "javascript" : language}
        style={atomOneDark} wrapLines={true}>
        {value || ""}
      </SyntaxHighlighter>
    }}
  />
}
