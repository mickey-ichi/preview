// import node_modules
import React from "react";
import styled from "styled-components";

// import others
import {Colors} from "../../../styles/Colors";

type IconListProps = {
  onClick?: () => void
}

export const IconMenu = (props: IconListProps) => {
  return <IconWrapper {...props}>
    <LineOne/>
    <LineTwo/>
    <LineThree/>
  </IconWrapper>
}

const IconWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  padding: 5px;
  cursor: pointer;
`
const LineOne = styled.div`
  width: 26px;
  height: 2px;
  border-radius: 1px;
  margin-bottom: 6px;
  background: linear-gradient(120deg, ${Colors.COLOR_FFC600},${Colors.COLOR_CB00FF});
`
const LineTwo = styled.div`
  width: 22px;
  height: 2px;
  border-radius: 1px;
  margin-bottom: 6px;
  background: linear-gradient(120deg, ${Colors.COLOR_FFC600},${Colors.COLOR_CB00FF});
`
const LineThree = styled.div`
  width: 18px;
  height: 2px;
  border-radius: 1px;
  background: linear-gradient(120deg, ${Colors.COLOR_FFC600},${Colors.COLOR_CB00FF});
`
