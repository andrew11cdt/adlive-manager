import styles from "./styles.module.scss";


export default function Card({children}) {
  return (
    <div className={styles.card}>
      {children}
    </div>
  );
}
