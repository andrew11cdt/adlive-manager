import { AdsliveCaption, AdsliveOverline } from "../typography";
import styles from "./styles.module.scss";

export type AdsliveFormItemProps = {
  label?: any;
  prefixLabel?: any;
  suffixLabel?: any;
  children?: any;
};

export default function AdsliveFormItem({
  label,
  children,
  prefixLabel,
  suffixLabel,
}: AdsliveFormItemProps) {
  return (
    <div className={styles.formItem}>
      {label && (
        <AdsliveOverline className={styles.label}>{label}</AdsliveOverline>
      )}
      {prefixLabel && (
        <AdsliveCaption className={styles.prefixLabel}>
          {prefixLabel}
        </AdsliveCaption>
      )}
      <div className={styles.content}>{children}</div>
      {suffixLabel && (
        <AdsliveCaption className={styles.suffixLabel}>
          {suffixLabel}
        </AdsliveCaption>
      )}
    </div>
  );
}
