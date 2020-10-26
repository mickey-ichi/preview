//import node_modules
import React, {useState} from 'react';
import styled from "styled-components";
import { rgba } from "polished";

//import components
import {Toggle} from "./components/molecules/Toggle";
import {Markdown} from "./components/molecules/Markdown";
import {Editor} from "./components/molecules/Editor";
import {Input} from "./components/atoms/Input";
import {Text} from "./components/atoms/Text";
import {Button} from "./components/atoms/Button";
import {UploadImage} from "./components/molecules/UploadImage";

//import others
import {Colors} from "./styles/Colors";

function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [textPreview, setTextPreview] = useState("")
  const [cursorPosition, setCursorPosition] = useState(0);

  const handleTextPreview = (value: string) => {
    setTextPreview(value)
  }

  const handleUpload = (file: File) => {
    let textToInsert = "![uploading-image__01ENHT5FHH8PX43RWS1QJX0QWF]"
    let textBeforeCursorPosition = textPreview.substring(0, cursorPosition)
    let textAfterCursorPosition = textPreview.substring(cursorPosition, textPreview.length)
    setTextPreview(textBeforeCursorPosition + textToInsert + textAfterCursorPosition)
  }

  return (
    <Container>
      <HeaderWrapper>
        <Logo src="https://static.shimba.io/svg/logo_mixed.svg?1602122368" alt="SHIMBA" className="logo"/>
      </HeaderWrapper>
      <PreviewWrapper>
        <InputEditorWrapper>
          <Input placeholder="タイトル"/>
          <UploadImageWrapper>
            <UploadImage onUpload={handleUpload}/>
          </UploadImageWrapper>
          <Editor onCursorPositionChange={setCursorPosition} value={textPreview} onChange={handleTextPreview}/>
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
            <Markdown source={textPreview}/>
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

const UploadImageWrapper = styled.div`
  padding: 10px;
`

const BottomWrapper = styled.div`
  background-color: ${rgba(Colors.COLOR_000000, 0.4)};
  padding: 10px;
  text-align: right;
`

export default App;
