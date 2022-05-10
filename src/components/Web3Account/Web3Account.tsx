import React, { FunctionComponent, useCallback, useEffect, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { injected } from "./lib/connectors";
import { isNoEthereumObject } from "./lib/errors";
import { Button } from "antd";

interface IWeb3AccountProps {}

const Web3Account: FunctionComponent<IWeb3AccountProps> = (props) => {
  const { library, chainId, account, active, activate, deactivate } = useWeb3React();
  const [balance, setBalance] =  useState<number>(0)
  const handleConnect = useCallback(() => {
    if (active) {
      deactivate();
      setBalance(0)
      return;
    }
    activate(injected, (error) => {
      if (isNoEthereumObject(error)) {
        window.open("https://metamask.io/download.html");
      }
    });
  }, [active, activate, deactivate]);

  useEffect(() => {
    console.log('library', library, 'account', account)
    library?.getBalance(account).then(({ _hex }) => {
      console.log('balance', _hex)
      setBalance(_hex / 1e18)
    })
    // console.log('balance', balance)
  }, [library, account]);
  
  return (
		<div>
			<div className="user">
				<p>Account: {account}</p>
				<p>ChainId: {chainId}</p>
        <p>Balance: {balance} ETH</p>
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
