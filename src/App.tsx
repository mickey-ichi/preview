//import node_modules
import React, {useState} from 'react';
import styled, {css} from "styled-components";
import { rgba } from "polished";
import { v4 as uuidv4 } from 'uuid';

//import components
import {Toggle} from "./components/molecules/Toggle";
import {Markdown} from "./components/molecules/Markdown";
import {Editor} from "./components/molecules/Editor";
import {FontList} from "./components/molecules/FontList";
import {Input} from "./components/atoms/Input";
import {Text} from "./components/atoms/Text";
import {Button} from "./components/atoms/Button";
import {UploadImage} from "./components/molecules/UploadImage";

//import services
import {uploadImage} from "./api/services"

//import others
import {Colors} from "./styles/Colors";

function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [textPreview, setTextPreview] = useState("")
  const [cursorPosition, setCursorPosition] = useState(0);
  const [fontList] = useState([
    {text: "Times New Roman", value: "time-new-roman"},
    {text: "Arial", value: "arial"}
  ]);

  const handleTextPreview = (value: string) => {
    setTextPreview(value)
  }

  const handleUpload = async (file: File) => {
    const idImage = `uploading-image__${uuidv4()}`
    const textToInsert = `![${idImage}]`
    const textBeforeCursorPosition = textPreview.substring(0, cursorPosition)
    const textAfterCursorPosition = textPreview.substring(cursorPosition, textPreview.length)
    const content = textBeforeCursorPosition + textToInsert + textAfterCursorPosition
    setTextPreview(content)
    const url = await uploadImage.upload(file)
    setTextPreview(content.replace(textToInsert, `![](${url})`))
  }

  return (
    <Container>
      <HeaderWrapper>
        <Logo src="https://static.shimba.io/svg/logo_mixed.svg?1602122368" alt="SHIMBA"/>
      </HeaderWrapper>
      <PreviewWrapper>
        <InputEditorWrapper>
          <InputCustom placeholder="タイトル"/>
          <UploadImageWrapper>
            <UploadImage onUpload={handleUpload}/>
          </UploadImageWrapper>
          <Editor onCursorPositionChange={setCursorPosition} value={textPreview} onChange={handleTextPreview}/>
        </InputEditorWrapper>
        <MarkdownWrapper>
          <FrontListWrapper>
            <FontList list={fontList} onChange={() => {}}/>
          </FrontListWrapper>
          <PreviewHeaderMarkdown>
            <Text size={"small"}>Preview</Text>
            <ToggleWrapper>
              <TextToggle size={"small"}>ダークモード</TextToggle>
              <Toggle checked={darkMode} onChange={setDarkMode}/>
            </ToggleWrapper>
          </PreviewHeaderMarkdown>
          <MarkdownContentWrapper dark={darkMode}>
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
  background: ${Colors.COLOR_1C2238};
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
  overflow: auto;
`
const PreviewHeaderMarkdown = styled.div`
  background-color: ${rgba(Colors.COLOR_000000, 0.4)};
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: auto;
  padding: 10px;
  margin-top: 5px;
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
const MarkdownContentWrapper = styled.div<{dark: boolean}>`
  padding: 0 10px;
  white-space: pre-wrap;
  overflow: auto;
  height: 100%;
  color: ${Colors.COLOR_FFFFFF};
  background-color: ${Colors.COLOR_171B2D};
  ${({dark}) => !dark && css`
    color: ${Colors.COLOR_171B2D};
    background-color: ${Colors.COLOR_FFFFFF};
  `}
`
const UploadImageWrapper = styled.div`
  background-color: ${rgba(Colors.COLOR_000000, 0.4)};
  height: 30px;
  margin-left: 10px;
  padding: 10px;
  margin-top: 5px;
`
const InputCustom = styled(Input)`
  height: 30px;
  margin-left: 10px;
  margin-right: 2px;
`
const FrontListWrapper = styled.div`
  padding: 10px 15px;
  color: ${Colors.COLOR_FFFFFF};
  background-color: ${rgba(Colors.COLOR_000000, 0.2)};
  height: 30px;
  margin-left: 2px;
  margin-right: 10px;
  border-radius: 5px;
`
const BottomWrapper = styled.div`
  background-color: ${rgba(Colors.COLOR_000000, 0.4)};
  padding: 10px;
  text-align: right;
`

export default App;
