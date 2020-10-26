// import node_modules
import React, {useState} from "react";

// import components
import {Toggle} from "./components/molecules/Toggle";
import {Markdown} from "./components/molecules/Markdown";
import {Editor} from "./components/molecules/Editor";
import {UploadImage} from "./components/molecules/UploadImage";
import {FontList} from "./components/molecules/FontList";
import {IconMenu} from "./components/molecules/IconMenu";
import {Text} from "./components/atoms/Text";
import {Button} from "./components/atoms/Button";
import {Link} from "./components/atoms/Link";

// import services
import {uploadImage} from "./api/services"

// import others
import {getIdImage} from "./utils/getIdImage";
import {
  Container,
  UploadImageWrapper,
  BottomWrapper,
  FrontListWrapper,
  HeaderWrapper,
  InputCustom,
  InputEditorWrapper,
  Logo,
  MarkdownContentWrapper,
  MarkdownWrapper,
  PreviewHeaderMarkdown,
  PreviewWrapper,
  TextToggle,
  ToggleWrapper
} from "./App.styled"

const LOGO = "https://static.shimba.io/svg/logo_mixed.svg?1602122368";

const FONT_DEFAULT = "Arial, sans-serif";

const LIST_FONTS = [
  {text: "Arial", value: "Arial, sans-serif"},
  {text: "Andale Mono", value: "Andale Mono, monospace"},
  {text: "Impact", value: "Impact, fantasy"}
]

function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [textPreview, setTextPreview] = useState("")
  const [cursorPosition, setCursorPosition] = useState(0);
  const [currentFont, setCurrentFont] = useState(FONT_DEFAULT);
  const [fontList] = useState(LIST_FONTS);

  const handleTextPreview = (value: string) => {
    setTextPreview(value)
  }

  const handleFontChange = (fontValue: string) => {
    setCurrentFont(fontValue)
  }

  const handleUpload = async (file: File) => {
    const idImage = getIdImage()
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
        <Link href={"https://shimba.io"}>
          <Logo src={LOGO} alt="SHIMBA"/>
        </Link>
        <IconMenu />
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
            <FontList list={fontList} onChange={handleFontChange}/>
          </FrontListWrapper>
          <PreviewHeaderMarkdown>
            <Text size={"small"}>Preview</Text>
            <ToggleWrapper>
              <TextToggle size={"small"}>ダークモード</TextToggle>
              <Toggle checked={darkMode} onChange={setDarkMode}/>
            </ToggleWrapper>
          </PreviewHeaderMarkdown>
          <MarkdownContentWrapper dark={darkMode} fontFamily={currentFont}>
            <Markdown source={textPreview}/>
          </MarkdownContentWrapper>
        </MarkdownWrapper>
      </PreviewWrapper>
      <BottomWrapper>
        <Button disabled={true}>POST</Button>
      </BottomWrapper>
    </Container>
  );
}

export default App;
