import { useEffect, useState } from "react";
import { AdsliveFormItemComponentProps } from "../../definitions/types/form-item-component-props.type";
import AdsliveIcon, { ADSLIVE_ICON_TYPE, ADSLIVE_ICON_VARIANT } from "../icon";
import AdsliveInput from "../input";
import styles from "./styles.module.scss";

export type AdslivePasswordInputProps = AdsliveFormItemComponentProps & {};

export default function AdslivePassworInput({
  autoFocus,
  disabled,
  value,
  className,
  style,
  onChange,
}: AdslivePasswordInputProps) {
  const [mounted, setMounted] = useState(false);
  const [pwdVisible, setPwdVisible] = useState(false);
  const [pwd, setPwd] = useState(value || "");
  const [validPwd, setValidPwd] = useState(value || "");

  const togglePwdVisible = () => {
    setPwdVisible((previous) => !previous);
  };

  useEffect(() => {
    mounted && onChange && onChange(validPwd);
  }, [validPwd]);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <AdsliveInput
      type={pwdVisible ? "text" : "password"}
      value={pwd}
      suffixComponent={
        pwdVisible ? (
          <AdsliveIcon
            className={styles.icon}
            variant={ADSLIVE_ICON_VARIANT.EYE_ON}
            type={ADSLIVE_ICON_TYPE.REGULAR}
            onClick={togglePwdVisible}
          />
        ) : (
          <AdsliveIcon
            className={styles.icon}
            variant={ADSLIVE_ICON_VARIANT.EYE_OFF}
            type={ADSLIVE_ICON_TYPE.REGULAR}
            onClick={togglePwdVisible}
          />
        )
      }
      onChange={(newPwd) => setPwd(newPwd)}
      validateCallback={(pwdToCheck) => {
        if (pwdToCheck.length < 8) {
          setValidPwd("");
          return {
            isValid: false,
            msg: "Your password must be greater or equal 8 characters.",
          };
        }

        return { isValid: true, msg: null };
      }}
      receiveValidValueCallback={(newValidPwd) => setValidPwd(newValidPwd)}
    />
  );
}
