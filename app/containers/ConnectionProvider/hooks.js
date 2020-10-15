import { useContext } from 'react';
import context from './context';

// Just a thought, which may not be important, but by all the hooks sharing the same context object, it means whenever
// any key of the context object changes, all components using any of these hooks will re-render.
// Perhaps this context object won't be changing frequently so it wont matter too much, but just thought it worth mentioning.

export function useAddress() {
  const { address } = useContext(context);
  return address;
}

export function useWallet() {
  const { wallet } = useContext(context);
  return wallet;
}

export function useSelectWallet() {
  const { selectWallet } = useContext(context);
  return selectWallet;
}

export function useOnboard() {
  const { onboard } = useContext(context);
  return onboard;
}

export function useWeb3() {
  const { web3 } = useContext(context);
  return web3;
}

export function useNotify() {
  const { notify } = useContext(context);
  return notify;
}

export function useRequireConnection() {
  const { selectWallet, wallet } = useContext(context);
  if (!wallet.provider) {
    selectWallet();
  }
}
