//import node_modules
import React, {useState} from 'react';
import ReactMarkdown from 'react-markdown';
import styled from "styled-components";
import { rgba } from "polished";
import SyntaxHighlighter from 'react-syntax-highlighter';
import dracula from 'react-syntax-highlighter/dist/esm/styles/hljs/dracula';

//import components
import {Toggle} from "./components/molecules/Toggle";
import {Input} from "./components/atoms/Input";
import {Text} from "./components/atoms/Text";
import {InputTextArea} from "./components/atoms/InputTextArea";
import {Button} from "./components/atoms/Button";

//import others
import {Colors} from "./styles/Colors";

function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [textPreview, setTextPreview] = useState("")

  const handleTextPreview = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextPreview(e.target.value)
  }

  return (
    <Container>
      <HeaderWrapper>
        <Logo src="https://static.shimba.io/svg/logo_mixed.svg?1602122368" alt="SHIMBA" className="logo"/>
      </HeaderWrapper>
      <PreviewWrapper>
        <InputEditorWrapper>
          <Input placeholder="タイトル"/>
          <InputTextArea onChange={handleTextPreview}/>
        </InputEditorWrapper>
        <MarkdownWrapper>
          <PreviewHeaderMarkdown>
            <Text size={"small"}>Preview</Text>
            <ToggleWrapper>
              <TextToggle size={"small"}>ダークモード</TextToggle>
              <Toggle checked={darkMode} onChange={setDarkMode}/>
            </ToggleWrapper>
          </PreviewHeaderMarkdown>
          <MarkdownContentWrapper>
            <ReactMarkdown
              source={textPreview}
              renderers={{
                code: ({language, value}) => {
                  return <SyntaxHighlighter language={language} style={dracula} >
                    {value || ""}
                  </SyntaxHighlighter>
                }
              }}
            />
          </MarkdownContentWrapper>
        </MarkdownWrapper>
      </PreviewWrapper>
      <BottomWrapper>
        <Button>POST</Button>
      </BottomWrapper>
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
`

const HeaderWrapper = styled.div`
  padding: 10px 15px;
`
const Logo = styled.img`
  width: 150px;
  height: auto;
`
const PreviewWrapper = styled.div`
  display: flex;
  height: calc(100% - 94px);
`
const InputEditorWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  border-right: 2px solid #232630;
  overflow: auto;
`
const PreviewHeaderMarkdown = styled.div`
  padding: 5.5px;
  background-color: ${rgba(Colors.COLOR_000000, 0.4)};
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: auto;
`
const TextToggle = styled(Text)`
  padding-right: 10px;
`
const ToggleWrapper = styled.div`
  display: flex;
  align-items: center;
`
const MarkdownWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`
const MarkdownContentWrapper = styled.div`
  padding: 0 10px;
  color: #ffffff;
  white-space: pre-wrap;
  overflow: auto;
  height: 100%;
`
const BottomWrapper = styled.div`
  background-color: ${rgba(Colors.COLOR_000000, 0.4)};
  padding: 10px;
  text-align: right;
`

export default App;
