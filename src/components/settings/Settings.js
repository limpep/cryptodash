import React from "react";
import ConfirmButton from "./ConfirmButton";
import WelcomeMessage from "./WelcomeMessage";
import Page from "../../shared/Page";
import CoinGrid from "./CoinGrid";

function Settings() {
  return (
    <Page name="settings">
      <WelcomeMessage />
      <ConfirmButton />
      <CoinGrid/>
    </Page>
  );
}

export default Settings;
