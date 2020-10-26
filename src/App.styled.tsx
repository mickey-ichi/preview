// import node_modules
import styled, {css} from "styled-components";
import {rgba} from "polished";

// import components
import {Text} from "./components/atoms/Text";
import {Input} from "./components/atoms/Input";

// import others
import {Colors} from "./styles/Colors";

export const Container = styled.div`
  height: 100%;
  background: ${Colors.COLOR_1C2238};
`

export const HeaderWrapper = styled.div`
  padding: 10px 15px;
  margin-bottom: 6px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const Logo = styled.img`
  width: 150px;
  height: auto;
`
export const PreviewWrapper = styled.div`
  display: flex;
  height: calc(100% - 110px);
  padding-bottom: 10px;
`
export const InputEditorWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  overflow: auto;
  padding-left: 15px;
  border-right: 1px solid ${Colors.COLOR_232630};
`
export const PreviewHeaderMarkdown = styled.div`
  background-color: ${rgba(Colors.COLOR_000000, 0.4)};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 7.5px 10px;
  margin-top: 5px;
`
export const TextToggle = styled(Text)`
  padding-right: 10px;
`
export const ToggleWrapper = styled.div`
  display: flex;
  align-items: center;
`
export const MarkdownWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  padding-right: 15px;
`
export const MarkdownContentWrapper = styled.div<{dark: boolean, fontFamily: string}>`
  font-family: ${({fontFamily}) => fontFamily};
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
export const UploadImageWrapper = styled.div`
  background-color: ${rgba(Colors.COLOR_000000, 0.4)};
  height: 30px;
  padding: 10px;
  margin-top: 5px;
`
export const InputCustom = styled(Input)`
  height: 31px;
  margin-right: 2px;
`
export const FrontListWrapper = styled.div`
  padding: 10px;
  color: ${Colors.COLOR_FFFFFF};
  background-color: ${rgba(Colors.COLOR_000000, 0.2)};
  height: 30px;
  margin-left: 2px;
  border-radius: 5px;
`
export const BottomWrapper = styled.div`
  background-color: ${rgba(Colors.COLOR_000000, 0.4)};
  padding: 10px;
  text-align: right;
`
