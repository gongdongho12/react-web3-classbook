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
    library?.getBalance(account).then(res => {
      console.log('balance', res)
    })
    // console.log('balance', balance)
    // setBalance(balance / 1e18)
  }, [library, account]);
  
  return (
		<div>
			<div className="user">
				<p>Account: {account}</p>
				<p>ChainId: {chainId}</p>
        <p>Balance: {balance}</p>
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
