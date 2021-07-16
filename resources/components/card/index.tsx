import { useEffect, useState } from "react";
import { Button, Dropdown } from "react-bootstrap";
import Divider from "../divider";
import AdsliveIcon, { AdIcon, ADSLIVE_ICON_VARIANT } from "../icon";
import styles from "./styles.module.scss";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import { displayTime } from "../../utils/common.util";
import AdsliveLoading, { ADSLIVE_LOADING_SIZE } from "../loading";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import ContentLoader from 'react-content-loader'

export function CardInput(props) {
  let { title, value, onInputChange, onFocusOut, icon } = props;
  value = value || "";
  const [isChange, setIsChange] = useState(null)
  return (
    <div className={styles.cardInput}>
      <label>{title}</label>
      <input
        disabled={props.disabled}
        value={value}
        type={props.type || "text"}
        onChange={(e) => {
          setIsChange(e.target.value !== value);
          onInputChange(e)
        }}
        onBlur={() => onFocusOut(isChange)}
      />
      <span className={styles.icon}>{icon}</span>
    </div>
  );
}
interface CardSelectInput {
  title?: string;
  initValue?: string[];
  values: string[];
  onChange?: Function;
  disabled?: boolean;
}
export function CardSelect(props: CardSelectInput) {
  const { title, initValue, values, onChange } = props
  const [selectedValue, onSelectValue] = useState(initValue || null);
  function handleSelect(item) {
    onSelectValue(item)
    onChange(item)
  }
  return (
    <div className={styles.cardSelect}>
      <label>{title}</label>
      <Dropdown>
        <Dropdown.Toggle
          id="dropdown-basic"
          className={styles.selectBtn}
          disabled={props.disabled}
        >
          {selectedValue || `Select ${title}`}
        </Dropdown.Toggle>

        <Dropdown.Menu className={styles.menu}>
          {values?.map((value, i) => {
            return (
              <Dropdown.Item key={i} onClick={() => handleSelect(value)}>
                {value}
              </Dropdown.Item>
            );
          })}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
export function CardMultiSelect(props: CardSelectInput) {
  const { title, initValue, values, onChange, disabled } = props;
  const [selectedValue, setSelectValue] = useState<any[]>(initValue || []);
  const [showDrop, setShowDrop] = useState(false);
  const [isSelectAll, setSelectAll] = useState(false);
  const config = { show: showDrop };
  const handleSelectItem = (item) => {
    setShowDrop(true);
    if (checkInclude(item)) removeItem(item);
    else addItem(item);
  };
  function removeItem(item) {
    setSelectValue(selectedValue.filter((e) => e !== item));
  }
  function addItem(item) {
    setSelectValue([...selectedValue, item]);
  }
  function displaySelect() {
    if (selectedValue?.length) return "Multi choices";
    else return "Select";
  }
  function checkInclude(item) {
    return selectedValue?.includes(item);
  }

  function handleDone() {
    setShowDrop(false)
    onChange(selectedValue)
  }

  function handleSelectAll(value) {
    setSelectAll(value)
    setSelectValue(value ? values : [])
  }
  return (
    <div className={styles.cardSelect}>
      <label>{title}</label>
      <Dropdown
        {...config}
      >
        <Dropdown.Toggle
          id="dropdown-basic"
          className={styles.selectBtn}
          disabled={disabled}
          onClick={() => setShowDrop(!showDrop)}
        >
          {displaySelect()}
        </Dropdown.Toggle>

        <Dropdown.Menu id="dropdown-menu" className={styles.menu}>
          {
            values?.length > 2 && <Button style={{ width: '100%' }} variant={isSelectAll ? 'outline-secondary' : 'secondary'} onClick={() => handleSelectAll(!isSelectAll)}>{isSelectAll ? 'Unselect' : 'Select'} All</Button>
          }
          {values?.map((value, i) => {
            return (
              <Dropdown.Item
                id="dropdown-item"
                key={i.toString()}
                className={`${styles.menuItem} ${checkInclude(value) ? styles.selected : ""
                  }`}
                onClick={() => {
                  handleSelectItem(value)
                }}
              >
                {value}
                {checkInclude(value) &&
                  <AdIcon name="check-in-a-circle-highlight" style={{ marginLeft: "6px" }} />
                }
              </Dropdown.Item>
            );
          })}
          <Button style={{ width: '100%' }} variant="primary" onClick={handleDone}>Done</Button>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
export function CardSelectTime({ title, initValue, onChange, ...props }) {
  const retrieveHours = (date) => (date ? moment(date).format("HH:MM") : null);
  const data = initValue ? new Date(initValue) : null;
  const [date, setDate] = useState(data);
  return (
    <div className={styles.cardSelect}>
      <label>{title}</label>
      <div className={`${styles.selectBtn} ${styles.datePickerContainer}`}>
        <DatePicker
          className={styles.datePicker}
          calendarClassName={styles.calendar}
          selected={date}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          timeCaption="time"
          dateFormat="MMMM d, yyyy h:mm aa"
          disabledKeyboardNavigation
          shouldCloseOnSelect={false}
          onChange={(change) => {
            setDate(change);
            onChange(moment(change).format());
          }}
        />
        <AdIcon className={styles.calendarIcon} name="Calendar" w="20px" />
      </div>
    </div>
  );
}
const DragItemLoader = () => (
  <ContentLoader viewBox="0 0 380 50">
    {/* Only SVG shapes */}
    <rect x="0" y="0" rx="5" ry="5" width="50" height="50" />
    <rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
    <rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
  </ContentLoader>
)
export function CardDragItem({ isLoading, onDelete, children }) {
  return (
    <div className={`${styles.cardDragItem} ${isLoading ? styles.loading : ''}`}>
      {isLoading ? <DragItemLoader /> : (
        <>
          <div className={styles.leftItem}>
            <AdIcon name="drag" mr="20px" h="48px" w="16px" />
            {children}
          </div>
          <AdIcon name="minus_circle" ml="6px" w="16px" onClick={onDelete}
            className={styles.icon}
          />
        </>
      )
      }
    </div>
  );
}

export function CardDragWrapper({ items, onChange }) {
  const [itemsStatus, setItemsStatus] = useState(items);
  useEffect(() => {
    setItemsStatus(items);
  }, [items]);
  const getListStyle = (isDraggingOver) => ({
    // background: isDraggingOver ? "inherit" : "lightgrey",
  });
  const getItemStyle = (isDragging, draggableStyle) => ({
    userSelect: "none",
    ...draggableStyle,
  });
  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };
  function onDragEnd(result) {
    // dropped outside the list
    if (!result.destination) return;

    const items: any = reorder(
      itemsStatus,
      result.source.index,
      result.destination.index
    );
    setItemsStatus(items);
    onChange(items);
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {(provided, snapshot) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            style={getListStyle(snapshot.isDraggingOver)}
          >
            {itemsStatus?.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={getItemStyle(
                      snapshot.isDragging,
                      provided.draggableProps.style
                    )}
                  >
                    {item.content}
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
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
