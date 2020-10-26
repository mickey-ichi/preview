// import node_modules
import React from "react";

//import components
import {InputTextArea} from "../../atoms/InputTextArea";

type EditorProps = {
  value: string,
  onChange: (value: string) => void
  onCursorPositionChange: (position: number) => void
}

export const Editor = ({value, onChange, onCursorPositionChange}: EditorProps) => {
  const handleTextPreview = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value)
    onCursorPositionChange(e.target.selectionStart)
  }

  const handleCursorPosition = (e: any) => {
    onCursorPositionChange(e.target.selectionEnd)
  }

  return <InputTextArea
    value={value}
    onKeyDown={handleCursorPosition}
    onKeyUp={handleCursorPosition}
    onClick={handleCursorPosition}
    onChange={handleTextPreview}
  />
}
