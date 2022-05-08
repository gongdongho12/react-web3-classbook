import React, { FunctionComponent, useEffect, useState } from "react";
import "antd/dist/antd.less";
import { IntlProvider } from "react-intl";
import CommonRouter from "./CommonRouter";
import { BrowserRouter as Router } from "react-router-dom";

import {
  useRecoilValue,
} from "recoil";
import langState, { messages } from "state/lang";
import { useWeb3React } from "@web3-react/core";

const App: FunctionComponent<any> = () => {
  const [blockNumber, setBlockNumber] = useState(undefined);
  const { library } = useWeb3React();

  useEffect(() => {
    if (library) {
      library.getBlockNumber().then((bn) => {
        console.log('blockNumber', bn)
        setBlockNumber(bn);
      });
      library.on("block", setBlockNumber);
      return () => {
        library.removeListener("block", setBlockNumber);
        setBlockNumber(undefined);
      };
    }
  }, [library]);

  const lang = useRecoilValue(langState);

  return (
    <IntlProvider locale={lang} messages={messages[lang]}>
      <Router>
        <CommonRouter />
      </Router>
    </IntlProvider>
  );
};

export default App;
