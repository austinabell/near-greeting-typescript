import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { initContract } from "./utils";

//* This is a workaround to allow fields to be attached to the global window, which are used
//* with NEAR js API
declare global {
  interface Window {
    walletConnection: any;
    nearInitPromise: any;
    accountId: string;
    contract: any;
  }
}

window.nearInitPromise = initContract()
  .then(() => {
    ReactDOM.render(<App />, document.querySelector("#root"));
  })
  .catch(console.error);
