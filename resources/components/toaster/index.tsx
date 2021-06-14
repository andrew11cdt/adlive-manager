import { useEffect, useState } from "react";
import { Toast } from "react-bootstrap";
import { AdIcon } from "../icon";
import styles from "./styles.module.scss";
interface ToasterProps {
  type: "success" | "warning" | "error";
  showStatus?: boolean;
  title?: string;
  delay?: number;
  message: string;

  isShow: boolean;
  setShow: Function;
}
export const TYPE_TO_ICON = {
  success: "check-in-a-circle",
  warning: "attention",
  error: "x-in-a-circle",
};
export function Toaster({
  isShow,
  setShow,
  type,
  message,
  title = type,
  delay = 3000,
}: ToasterProps) {
  return (
    <Toast
      className={`${styles.toaster} ${styles[type]}`}
      onClose={() => setShow(false)}
      show={isShow}
      delay={delay}
      autohide={false}
    >
      <Toast.Header className={styles.header}>
        <span className={styles.leftHead}>
          <AdIcon name={TYPE_TO_ICON[type]} />
          <strong className={styles.title}>{title?.toUpperCase()}</strong>
        </span>
      </Toast.Header>
      <Toast.Body>{message}</Toast.Body>
    </Toast>
  );
}
