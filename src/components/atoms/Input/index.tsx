import styled from "styled-components";
import {rgba} from "polished"

import {Colors} from "../../../styles/Colors"

export const Input = styled.input`
  background-color: ${rgba(Colors.COLOR_000000, 0.2)};
  color: ${Colors.COLOR_FFFFFF};
  border: none;
  font-weight: 600;
  font-size: 18px;
  padding: 10px 15px;
  outline: none;
`

