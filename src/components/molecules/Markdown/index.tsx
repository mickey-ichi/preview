// import node_modules
import React from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import atomOneDark from 'react-syntax-highlighter/dist/esm/styles/hljs/atom-one-dark';
import ReactMarkdown from "react-markdown";
import styled from "styled-components";

// import others
import {Colors} from "../../../styles/Colors";

type MarkdownProps = {
  source: string,
}

atomOneDark.hljs.background = Colors.COLOR_0C1020
atomOneDark.hljs.color = Colors.COLOR_FFFFFF
atomOneDark.hljs.fontSize = 13

export const Markdown = ({source}: MarkdownProps) => {
  return <ReactMarkdown
    source={source}
    renderers={{
      image: (props) => <ImageMarkdown {...props}/>,
      code: ({language, value}) => <SyntaxHighlighter
        language={language === "js" ? "javascript" : language}
        style={atomOneDark} wrapLines={true}>
        {value || ""}
      </SyntaxHighlighter>
    }}
  />
}

const ImageMarkdown = styled.img`
  display: block;
  width: 95%;
  height: auto;
  margin: 2em auto;
`
