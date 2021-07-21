import { useContext } from "react";
import AdvertiserStoreContext from "./advertiser-store.context";
import { useSelector } from "react-redux";

export default function useAdvertiserStore() {
  return useContext(AdvertiserStoreContext);
}

export function useAreaScreens() {
  return useSelector((state: any) => state.areaScreens)
}