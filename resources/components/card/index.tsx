import { useState } from "react";
import { Dropdown } from "react-bootstrap";
import Divider from "../divider";
import AdsliveIcon, { AdIcon, ADSLIVE_ICON_VARIANT } from "../icon";
import styles from "./styles.module.scss";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import { displayTime } from "../../utils/common.util";
import AdsliveLoading, { ADSLIVE_LOADING_SIZE } from "../loading";

export function CardInput(props) {
  let { title, value, onInputChange, onFocusOut, icon } = props;
  console.log({ value });

  value = value || "";
  return (
    <div className={styles.cardInput}>
      <label>{title}</label>
      <input
        disabled={props.disabled}
        value={value}
        type={props.type || "text"}
        onChange={onInputChange}
        onBlur={onFocusOut}
      />
      <span className={styles.icon}>{icon}</span>
    </div>
  );
}
export function CardSelect({ title, initValue, values, onChange, ...props }) {
  const [selectedValue, onSelectValue] = useState(initValue || null);
  return (
    <div className={styles.cardSelect}>
      <label>{title}</label>
      <Dropdown>
        <Dropdown.Toggle
          id="dropdown-basic"
          className={styles.selectBtn}
          disabled={props.disabled}
        >
          {selectedValue}
        </Dropdown.Toggle>

        <Dropdown.Menu className={styles.menu}>
          {values?.map((value, i) => {
            return (
              <Dropdown.Item key={i} onClick={() => onSelectValue(value)}>
                {value}
              </Dropdown.Item>
            );
          })}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export function CardSelectTime({ title, initValue, onChange, ...props }) {
  const retrieveHours = (date) => moment(date).format("HH:MM");
  const data = new Date(initValue);
  const [date, setDate] = useState(data);
  return (
    <div className={styles.cardSelect}>
      <label>{title}</label>
      <div className={`${styles.selectBtn} ${styles.datePickerContainer}`}>
        <DatePicker
          className={styles.datePicker}
          selected={date}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          timeCaption="time"
          dateFormat="MMMM d, yyyy h:mm aa"
          disabledKeyboardNavigation
          shouldCloseOnSelect={false}
          onChange={(change) => {
            console.log(change);
            setDate(change);
            onChange(moment(change).format());
          }}
        />
        <AdIcon name="Calendar" w="20px" />
      </div>
    </div>
  );
}

export function CardDragItem({ onDrag, onDelete, children }) {
  return (
    <div className={styles.cardDragItem}>
      <span>
        <AdIcon name="drag" mr="20px" h="48px" w="12px" />
        {children}
      </span>
      <AdsliveIcon
        className={styles.icon}
        variant={ADSLIVE_ICON_VARIANT.MINUS_CIRCLE}
      />
    </div>
  );
}

export default function AdCard(props) {
  const {
    header,
    body,
    footer,
    dot,
    fullView,
    toggle,
    toggled,
    clickable,
    loading,
  } = props;
  return (
    <div
      className={`
        ${styles.card}
        ${dot ? styles.dot : ""}
        ${clickable ? styles.clickable : ""}
        ${toggle ? styles.toggle : ""}
        ${toggled ? styles.toggled : ""}
      `}
    >
      {loading ? (
        <div className={styles.loadingCard}>
          <AdsliveLoading size={ADSLIVE_LOADING_SIZE.EXTRA_SMALL} />
        </div>
      ) : (
        <>
          <div className={styles.header}>{header}</div>
          {!toggled && (
            <div className={styles.divider}>{header && <Divider />}</div>
          )}
          <div className={`${styles.body} ${fullView ? styles.fullView : ""}`}>
            {body}
          </div>
          <div className={styles.footer}>{footer}</div>
        </>
      )}
    </div>
  );
}
