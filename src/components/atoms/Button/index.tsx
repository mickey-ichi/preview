import styled from "styled-components";

import {Colors} from "../../../styles/Colors";

export const Button = styled.button`
  background-image: linear-gradient(117deg,${Colors.COLOR_FFC600},${Colors.COLOR_CB00FF});
  border-radius: 15px;
  width: 120px;
  height: 30px;
  border: none;
  outline: none;
  color: ${Colors.COLOR_FFFFFF};
  font-weight: 600;
  cursor: pointer;
`
