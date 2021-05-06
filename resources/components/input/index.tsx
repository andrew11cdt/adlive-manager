import styles from "./styles.module.scss";
import { AdsliveFormItemComponentProps } from "../../definitions/types/form-item-component-props.type";
import { useEffect, useState } from "react";
import { AdsliveCaption } from "../typography";

export type AdsliveInputProps = AdsliveFormItemComponentProps & {
  type?: string;
  autoFocus?: boolean;
  suffixComponent?: any;
  required?: boolean;
  requiredMsg?: string;
  validateCallback?: (value: string) => { isValid: boolean; msg?: string };
  receiveValidValueCallback?: (value: string) => void;
};

export default function AdsliveInput({
  type = "text",
  value,
  defaultValue,
  disabled = false,
  required = false,
  className,
  style,
  autoFocus = false,
  suffixComponent,
  onChange,
  onBlur,
  onFocus,
  validateCallback,
  receiveValidValueCallback,
}: AdsliveInputProps) {
  const [mounted, setMounted] = useState(false);
  const [focused, setFocused] = useState(autoFocus);
  const [errorMsg, setErrorMsg] = useState(null);

  const validateValue = (val: string) => {
    if (!validateCallback) {
      setErrorMsg(null);
      return;
    }

    const { isValid, msg } = validateCallback(val);

    if (isValid) {
      setErrorMsg(null);
      receiveValidValueCallback && receiveValidValueCallback(val);
    } else {
      setErrorMsg(msg);
    }
  };

  const onChangeValue = (e) => {
    onChange && onChange(e.target.value, e);
  };

  const onBlurInput = (e) => {
    setFocused(false);
    onBlur && onBlur(e.target.value, e);
    validateValue(e.target.value);
  };

  const onFocusInput = (e) => {
    onFocus && onFocus(e.target.value, e);
  };

  useEffect(() => {
    mounted && validateValue(value);
  }, [value]);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <div
        className={`${styles.inputWrapper} ${focused ? styles.focused : ""} ${
          errorMsg ? styles.error : ""
        } ${className || ""}`}
        style={style}
        onClick={() => setFocused(true)}
      >
        <input
          type={type}
          className={`${styles.input}`}
          autoFocus={autoFocus}
          value={value}
          defaultValue={defaultValue}
          disabled={disabled}
          onChange={onChangeValue}
          onBlur={onBlurInput}
          onFocus={onFocusInput}
        />
        {suffixComponent && (
          <div className={styles.suffixInput}>{suffixComponent}</div>
        )}
      </div>
      {errorMsg && (
        <AdsliveCaption className={styles.errorMsg}>{errorMsg}</AdsliveCaption>
      )}
    </>
  );
}
