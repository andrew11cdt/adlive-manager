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

  handleSetToast: Function;
}
export const TYPE_TO_ICON = {
  success: "success",
  warning: "attention-highlight",
  error: "error",
};
export function Toaster({
  handleSetToast,
  type,
  message,
  title = type,
  delay = 6000,
}: ToasterProps) {
  return (
    <Toast
      className={`${styles.toaster} ${styles[type]}`}
      onClose={() => handleSetToast(null)}
      show={!!message}
      delay={delay}
      autohide={true}
    >
      <Toast.Header className={styles.header}>
        <span className={styles.leftHead}>
          <AdIcon className={`${styles.icon} ${styles[type]}`} name={TYPE_TO_ICON[type]} />
          <strong className={styles.title}>{title?.toUpperCase()}</strong>
        </span>
      </Toast.Header>
      <Toast.Body>{message}</Toast.Body>
    </Toast>
  );
}
