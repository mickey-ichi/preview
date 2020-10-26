// import node_modules
import styled from "styled-components";
import {rgba} from "polished"

// import others
import {Colors} from "../../../styles/Colors"

export const Input = styled.input`
  background-color: ${rgba(Colors.COLOR_000000, 0.2)};
  color: ${Colors.COLOR_FFFFFF};
  border-radius: 5px;
  border: none;
  font-weight: 600;
  font-size: 18px;
  padding: 10px 15px;
  outline: none;
`

