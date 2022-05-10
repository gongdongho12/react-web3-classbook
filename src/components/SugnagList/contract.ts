export const contractAddress = "0x5f0799317c4ef1f7347ff04721ae023540744959"
export const abi = [
  {
    constant: false,
    inputs: [
      {
        name: "x",
        type: "uint256"
      }
    ],
    name: "set",
    outputs: [],
    payable: false,
    type: "function",
    stateMutability: "nonpayable"
  },
  {
    constant: true,
    inputs: [],
    name: "get",
    outputs: [
      {
        name: "retVal",
        type: "uint256"
      }
    ],
    payable: false,
    type: "function",
    stateMutability: "view"
  }
]