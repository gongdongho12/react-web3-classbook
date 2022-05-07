import React, { FunctionComponent, useCallback, useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import { injected } from "./lib/connectors";
import { isNoEthereumObject } from "./lib/errors";
import { Button } from "antd";

interface IWeb3AccountProps {}

const Web3Account: FunctionComponent<IWeb3AccountProps> = (props) => {
  const { chainId, account, active, activate, deactivate } = useWeb3React();

  const handleConnect = useCallback(() => {
    if (active) {
      deactivate();
      return;
    }
    activate(injected, (error) => {
      if (isNoEthereumObject(error)) {
        window.open("https://metamask.io/download.html");
      }
    });
  }, [active, activate, deactivate]);
  
  return (
		<div>
			<div className="user">
				<p>Account: {account}</p>
				<p>ChainId: {chainId}</p>
			</div>
			<div className="connect">
				<Button type="primary" onClick={handleConnect}>
					{active ? "disconnect" : "connect"}
				</Button>
			</div>
		</div>
  );
};

export default Web3Account;
