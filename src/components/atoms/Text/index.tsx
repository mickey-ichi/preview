//import components
import styled, {css} from "styled-components";

//import others
import {Colors} from "../../../styles/Colors";

type TextProps = {
  size?: "small" | "normal" | "tiny"
  colorType?: "white" | "normal"
}

export const getTextSizes = (props: TextProps) => {
  const { size = "normal" } = props
  if(size === "small") {
    return css`
      font-size: 13px;
      line-height: 1.6;
    `
  }
  if(size === "tiny") {
    return css`
      font-size: 12px;
      line-height: 1.6;
    `
  }
  return css`
    font-size: 14px;
    line-height: 1.6;
  `
}

export const getTextColors = (props: TextProps) => {
  const { colorType = "normal" } = props
  if(colorType === "white") {
    return css`
      color: ${Colors.COLOR_FFFFFF};
    `
  }
  return css`
    color: ${Colors.COLOR_5B6488};
  `
}

export const Text = styled.span<TextProps>`
  ${getTextColors}
  ${getTextSizes}
`
