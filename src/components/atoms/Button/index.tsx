// import node_modules
import styled, {css} from "styled-components";

// import others
import {Colors} from "../../../styles/Colors";

export const Button = styled.button<{ disabled?: boolean }>`
  background-image: linear-gradient(117deg,${Colors.COLOR_FFC600},${Colors.COLOR_CB00FF});
  border-radius: 15px;
  width: 120px;
  height: 30px;
  border: none;
  outline: none;
  color: ${Colors.COLOR_FFFFFF};
  font-weight: 600;
  cursor: pointer;
  ${({disabled = false}) => disabled && css`
    background: ${Colors.COLOR_CCCCCC};
    color: ${Colors.COLOR_999999};
    cursor: not-allowed;
    pointer-events: none;
  `}
`
