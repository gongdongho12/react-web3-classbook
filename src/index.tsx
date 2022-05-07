import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./index.less";
import App from "./App";
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";

import {
  RecoilRoot
} from "recoil";

import * as serviceWorker from "./serviceWorker";

const getLibrary = (provider) => {
  const library = new Web3Provider(provider, "any");
  return library;
}

ReactDOM.render(
  <StrictMode>
    <Web3ReactProvider getLibrary={getLibrary}>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </Web3ReactProvider>
  </StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
