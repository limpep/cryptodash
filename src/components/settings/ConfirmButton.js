import React from "react";
import styled from "styled-components";
import { AppContext } from "../../App/AppProvider";
import {fontSize1, greenBoxShadow, color3} from '../../shared/Styles';

const ConfirmButtonStyled = styled.div`
  margin: 20px;
  color: ${color3};
  ${fontSize1}
  cursor: pointer;
`;

export const CenterDiv = styled.div`
  display: grid;
  justify-content: center;
`;

function ConfirmButton() {
  return (
    <AppContext.Consumer>
      {({ confirmFavorites }) => (
        <CenterDiv>
          <ConfirmButtonStyled onClick={confirmFavorites}>Confirm</ConfirmButtonStyled>
        </CenterDiv>
      )}
    </AppContext.Consumer>
  );
}

export default ConfirmButton;
