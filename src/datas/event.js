import { abi } from './abi';

const ethers = require('ethers');
const provider = ethers.getDefaultProvider('kovan');
const contractAddress = '0x1d406FFCA0d61df0e659887B2F501ead6Bb96426';
const contract = new ethers.Contract(contractAddress, abi, provider);

export async function GetFactoryId() {
  const currentValue = await contract.GetFactoryId();
  console.log(currentValue);
  return currentValue;
}

// export function defaultSendAlert() {
//   alert('Send type alert창입니다.');
// }

export const events = {
  GetFactoryId: async function GetFactoryId() {
    const currentValue = await contract.GetFactoryId();
    return currentValue;
  }
};
