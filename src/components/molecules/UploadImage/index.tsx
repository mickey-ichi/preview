// import node_modules
import React, {useRef} from "react";
import styled from "styled-components";

// import components
import {Text} from "../../atoms/Text";
import {IconImage} from "../../atoms/IconImage";
import {Colors} from "../../../styles/Colors";

type UploadImageProps = {
  onUpload: (file: File) => void
}

export const UploadImage = ({onUpload}: UploadImageProps) => {
  const inputFileRef = useRef<HTMLInputElement>(null)

  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    if (!event.target?.files) return
    const file = event.target.files[0]
    onUpload(file)
  }

  const handleClick = () => {
    if (!inputFileRef || !inputFileRef.current) return
    inputFileRef.current.click()
  }

  return <ContentWrapper onClick={handleClick}>
    <Text colorType={"white"} size={"tiny"}>upload image</Text>
    <ImageWrapper>
      <IconImage />
    </ImageWrapper>
    <InputFileHidden
      ref={inputFileRef}
      type="file"
      name="file"
      accept="image/x-png,image/jpeg"
      onChange={handleUpload}
    />
  </ContentWrapper>

}

const ContentWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: ${Colors.COLOR_FFFFFF};
  cursor: pointer;
`
const ImageWrapper = styled.span`
  width: 10px;
  padding-left: 5px;
  height: auto;
`

const InputFileHidden = styled.input`
  display: none;
`
