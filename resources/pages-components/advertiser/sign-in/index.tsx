import { useEffect, useMemo, useState } from "react";
import ADSLIVEButton from "../../../components/button";
import AdsliveEmailInput from "../../../components/email-input";
import AdsliveFormItem from "../../../components/form-item";
import AdsliveInput from "../../../components/input";
import AdsliveLoading, {
  ADSLIVE_LOADING_SIZE,
} from "../../../components/loading";
import AdslivePassworInput from "../../../components/password-input";
import { AdsliveCaption, AdsliveH1 } from "../../../components/typography";
import AdvertiserStoreActions from "../../../stores/advertiser-store/advertiser-store.actions";
import useAdvertiserStore from "../../../stores/advertiser-store/advertiser-store.hook";
import { redirectTo } from "../../../utils/common.util";
import styles from "./styles.module.scss";

export default function AdvertiserSignInPageContent() {
  const { auth } = useAdvertiserStore();
  const [errorMsg, setErrorMsg] = useState(null);
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [signIning, setSignIning] = useState(false);
  const checking = useMemo(() => {
    return auth?.isAuthenticating || auth?.isGettingToken;
  }, [auth]);
  const canClick = useMemo(() => {
    return !checking && email && pwd ? true : false;
  }, [email, pwd, checking]);

  const signIn = () => {
    setSignIning(true);
    AdvertiserStoreActions.signIn(email, pwd).then(({ isDone, reason }) => {
      if (isDone) {
        redirectTo("/advertiser");
        return;
      }

      setErrorMsg(reason);
      setSignIning(false);
    });
  };

  useEffect(() => {
    if (!checking && auth?.isAuthenticated) {
      redirectTo("/advertiser");
    }
  }, [checking, auth]);

  return (
    <div className={styles.advertiserSignIn}>
      <AdsliveH1 className={styles.title}>Sign In</AdsliveH1>
      <div className={styles.form}>
        <AdsliveFormItem label="Email">
          <AdsliveEmailInput
            value={email}
            onChange={(newEmail) => setEmail(newEmail)}
          />
        </AdsliveFormItem>
        <AdsliveFormItem
          label="Password"
          suffixLabel="Enter your country and phone number"
        >
          <AdslivePassworInput
            value={pwd}
            onChange={(newPwd) => setPwd(newPwd)}
          />
        </AdsliveFormItem>
        {errorMsg && (
          <AdsliveCaption className={styles.errorMsg}>
            {errorMsg}
          </AdsliveCaption>
        )}
        <ADSLIVEButton
          style={{ marginLeft: "auto" }}
          disabled={!canClick || signIning}
          onClick={signIn}
        >
          {checking || signIning ? (
            <AdsliveLoading size={ADSLIVE_LOADING_SIZE.EXTRA_SMALL} />
          ) : (
            "SIGN IN"
          )}
        </ADSLIVEButton>
      </div>
    </div>
  );
}
