import { useEffect, useState } from "react";
import { AdsliveFormItemComponentProps } from "../../definitions/types/form-item-component-props.type";
import { isValidEmail } from "../../utils/email.util";
import AdsliveInput from "../input";

export type AdsliveEmailInputProps = AdsliveFormItemComponentProps & {};

export default function AdsliveEmailInput({
  className,
  style,
  disabled,
  value,
  onChange,
}: AdsliveEmailInputProps) {
  const [mounted, setMounted] = useState(false);
  const [email, setEmail] = useState(value || "");
  const [validEmail, setValidEmail] = useState(value || "");

  useEffect(() => {
    if (mounted) {
      onChange && onChange(validEmail);
    }
  }, [validEmail]);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <AdsliveInput
      className={className}
      style={style}
      disabled={disabled}
      value={email}
      onChange={(newEmail) => setEmail(newEmail)}
      validateCallback={(emailToCheck) => {
        if (isValidEmail(emailToCheck)) {
          return { isValid: true, msg: null };
        }

        setValidEmail("");
        return {
          isValid: false,
          msg: "Wrong email format. Please check your email.",
        };
      }}
      receiveValidValueCallback={(newValidEmail) =>
        setValidEmail(newValidEmail)
      }
    />
  );
}
