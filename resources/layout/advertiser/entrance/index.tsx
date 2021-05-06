import { useEffect } from "react";
import AdsliveLoading from "../../../components/loading";
import useAdvertiserStore from "../../../stores/advertiser-store/advertiser-store.hook";
import { redirectTo } from "../../../utils/common.util";
import styles from "./styles.module.scss";

export default function AdvertiserEntrance({ children }) {
  const { auth } = useAdvertiserStore();

  useEffect(() => {
    if (
      !auth?.isGettingToken &&
      !auth?.isAuthenticating &&
      !auth?.isAuthenticated
    ) {
      redirectTo("/advertiser/sign-in");
    }
  }, [auth?.isAuthenticated, auth?.isAuthenticating, auth?.isGettingToken]);

  if (
    auth?.isAuthenticating ||
    auth?.isGettingToken ||
    (!auth?.isAuthenticating && !auth?.isGettingToken && !auth?.isAuthenticated)
  ) {
    return (
      <div className={styles.entrance}>
        <AdsliveLoading />
      </div>
    );
  }

  return children;
}
