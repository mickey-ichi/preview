// import node_modules
import React from "react";
import styled from "styled-components";

// import components
import {Text} from "../../atoms/Text"
import {Colors} from "../../../styles/Colors";

type FontListProps = {
  list: {text: string, value: string}[],
  onChange: (value: string) => void
}

export const FontList = ({list, onChange}: FontListProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value)
  }
  return <Wrapper>
    <Text>フォント：</Text>
    <SelectList onChange={handleChange}>
      {list.map(item => <FrontListItem key={item.value} value={item.value}>
        {item.text}
      </FrontListItem>)}
    </SelectList>
  </Wrapper>
}

const Wrapper = styled.div`
`
const SelectList = styled.select`
  background: transparent;
  border: none;
  color: ${Colors.COLOR_FFFFFF};
  appearance: none;
  outline: none;
  cursor: pointer;
  margin-left: 5px;
`
const FrontListItem = styled.option`
`

