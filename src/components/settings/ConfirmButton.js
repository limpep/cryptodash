import React from "react";
import styled from "styled-components";
import { AppContext } from "../../App/AppProvider";

const ConfirmButtonStyled = styled.div`
  margin: 20px;
  color: green;
  cursor: pointer;
`;

function ConfirmButton() {
  return (<AppContext.Consumer>
    {({ confirmFavorites }) => 
  <ConfirmButtonStyled onClick={confirmFavorites}>Confirm</ConfirmButtonStyled>}
  </AppContext.Consumer>);
}

export default ConfirmButton;
