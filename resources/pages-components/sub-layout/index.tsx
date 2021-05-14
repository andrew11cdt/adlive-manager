import styles from "./styles.module.scss";

export default function SubLayout({
  header,
  content
}) {
  return (
    <div className={styles.subLayout}>
      <div className={styles.header}>
        {header}
      </div>
      <div className={styles.content}>
        {content}
      </div>
    </div>
  );
}
