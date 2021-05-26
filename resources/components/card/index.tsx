import { useState } from "react";
import { Dropdown } from "react-bootstrap";
import Divider from "../divider";
import AdsliveIcon, { ADSLIVE_ICON_VARIANT } from "../icon";
import styles from "./styles.module.scss";

export function CardInput({ title, value, onInputChange, ...props }) {
  const { icon } = props
  return (
    <div className={styles.cardInput}>
      <label>{title}</label>
      <input
        disabled={props.disabled}
        value={value}
        type={props.type || "text"}
        onChange={onInputChange}
      />
      <span className={styles.icon}>
      {icon}
      </span>
    </div>
  );
}
export function CardSelect({ title, initValue, values, onChange, ...props }) {
  const [selectedValue, onSelectValue] =  useState(initValue || null)
  return (
    <div className={styles.cardSelect}>
      <label>{title}</label>
      <Dropdown>
        <Dropdown.Toggle id="dropdown-basic" className={styles.selectBtn}>
          {selectedValue}
        </Dropdown.Toggle>

        <Dropdown.Menu className={styles.menu}>
          {values?.map(value => {
            return <Dropdown.Item  onClick={()=> onSelectValue(value)} >{value}</Dropdown.Item>
          })}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export function CardDragItem({ onDrag, onDelete, children }) {
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
  const { header, body, footer, dot, fullView, clickable } = props;
  return (
    <div className={`${styles.card} ${dot ? styles.dot : null} ${clickable ? styles.clickable : null}`}>
      {header}
      <div className={styles.divider}>{header && <Divider />}</div>
      <div className={`${fullView ? styles.fullView : null}`}>
        {body}
      </div>
      <div className={styles.footer}>
        {footer}
      </div>
    </div>
  );
}
