import { useContext } from "react";
import AdvertiserStoreContext from "./advertiser-store.context";

export default function useAdvertiserStore() {
  return useContext(AdvertiserStoreContext);
}