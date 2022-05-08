/* eslint-disable @typescript-eslint/ban-ts-comment */
const detectCurrentProvider = () => {
  let provider;
  // @ts-ignore
  if (window.ethereum) {
    // @ts-ignore
    provider = window.ethereum;
    // @ts-ignore
  } else if (window.web3) {
    // @ts-ignore
    provider = window.web3.currentProvider;
  } else {
    console.log(
      'Non-Ethereum browser detected. You should consider trying MetaMask!'
    );
  }
  return provider;
};

export default detectCurrentProvider