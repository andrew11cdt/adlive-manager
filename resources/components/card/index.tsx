import Divider from "../divider";
import AdsliveIcon, { ADSLIVE_ICON_VARIANT } from "../icon";
import styles from "./styles.module.scss";

export function CardInput({ title, value, onIputChange, ...props }) {
  return (
    <div className={styles.cardInput}>
      <label>{title}</label>
      <input
        value={value}
        type={props.type || "text"}
        onChange={onIputChange}
      />
    </div>
  );
}

export function CardDragItem({ onDrag, onDelete, children }) {
  console.log(children);

  return (
    <div className={styles.cardDragItem}>
      {children}
      <AdsliveIcon
        className={styles.icon}
        variant={ADSLIVE_ICON_VARIANT.MINUS_CIRCLE}
      />
    </div>
  );
}

export default function AdCard(props) {
  const { header, body, dot } = props;
  return (
    <div className={`${styles.card} ${dot ? styles.dot : ''}`}>
      {header}
      <div className={styles.divider}>{header && <Divider />}</div>
      {body}
    </div>
  );
}
