import { Dropdown } from "react-bootstrap";
import styles from "./styles.module.scss";
export default function AdDropdown(props) {
  const { title, menu } = props
  return (
    <Dropdown className={styles.dropdown}>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        {title}
      </Dropdown.Toggle>

      <Dropdown.Menu className={styles.menu}>
        {menu?.map((item, i) => {
          <Dropdown.Item key={i} className={styles.item}>{item}</Dropdown.Item>
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
}
