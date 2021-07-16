import { AdIcon } from "../icon";
import styles from "./styles.module.scss";
export default function RefreshserIcon({isLoading, onClick}) {
  return isLoading ? <div className={styles.loading} />
  : <AdIcon w={20} onClick={onClick} name="refresh" className={`${styles.refresher}`}/>
}