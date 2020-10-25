//import node_modules
import React, {useState} from 'react';
import ReactMarkdown from 'react-markdown'
import styled from "styled-components";

//import components
import {Toggle} from "./components/molecules/Toggle"
import {Input} from "./components/atoms/Input"
import {Text} from "./components/atoms/Text"
import {InputTextArea} from "./components/atoms/InputTextArea"

function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [textPreview, setTextPreview] = useState("")

  const handleTextPreview = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextPreview(e.target.value)
  }

  return (
    <Container>
      <Input placeholder="タイトル"/>
      <Toggle checked={darkMode} onChange={setDarkMode}/>
      <PreviewWrapper>
        <InputEditorWrapper>
          <InputTextArea onChange={handleTextPreview}/>
        </InputEditorWrapper>
        <MarkdownWrapper>
          <PreviewHeaderMarkdown>
            <Text>Preview</Text>
          </PreviewHeaderMarkdown>
          <ReactMarkdown>{textPreview}</ReactMarkdown>
        </MarkdownWrapper>
      </PreviewWrapper>
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
`
const PreviewWrapper = styled.div`
  display: flex;
  height: calc(100% - 100px);
`
const InputEditorWrapper = styled.div`
  width: 50%;
  display: flex;
  border-right: 2px solid #232630;
`
const PreviewHeaderMarkdown = styled.div`
`
const MarkdownWrapper = styled.div`
  width: 50%
`

export default App;
