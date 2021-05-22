import React from "react";
import { AdIcon } from "../icon";
import styles from "./styles.module.scss";

export default function StatusBadge({ status }) {
  return (
    <span className={`${styles.status} ${styles[status]}`}>
      {status === "offline" && (
        <AdIcon w="12px" m="0px 5px 0px 0px" name="Subtract" />
      )}
      {status}
    </span>
  );
}