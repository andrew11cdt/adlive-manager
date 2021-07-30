import { useEffect, useRef, useState } from "react";
import { Button, Dropdown } from "react-bootstrap";
import Divider from "../divider";
import { AdIcon } from "../icon";
import styles from "./styles.module.scss";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import AdsliveLoading, { ADSLIVE_LOADING_SIZE } from "../loading";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import ContentLoader from 'react-content-loader'
import { useOnClickOutside } from "../../hooks";

const InputLoader = () => (
  <ContentLoader viewBox="0 0 340 46" backgroundColor="#e3e3e3"  >
    <rect x="0" y="0" rx="8" ry="8" width="340" height="46" />
  </ContentLoader>
)
export function CardInput(props) {
  let { isLoading, title, value, defaultValue, onInputChange, onFocusOut, icon } = props;
  value = value || "";
  const [isChange, setIsChange] = useState(null)
  useEffect(() => {
    if (value && defaultValue) {
      setIsChange(value !== defaultValue)
    }
  }, [value, defaultValue])
  return (
    <div className={styles.cardInput}>
      <label>{title}</label>
      {isLoading ? <InputLoader /> :
        <input
          disabled={props.disabled}
          value={value}
          type={props.type || "text"}
          onChange={(e) => {
            onInputChange(e)
            value = e.target.value
          }}
          onBlur={() => {
            onFocusOut && onFocusOut(isChange)
          }}
        />
      }
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
  const mainRef = useRef()
  useOnClickOutside(mainRef, ()=> setShowDrop(false))
  const config = { show: showDrop, ref: mainRef };

  const handleSelectItem = (item) => {
    if (checkInclude(item)) removeItem(item);
    else addItem(item);
  };
  function removeItem(item) {
    const res = selectedValue.filter((e) => e !== item)
    setSelectValue(res);
    onChange(res)
  }
  function addItem(item) {
    const res = [...selectedValue, item]
    setSelectValue(res);
    onChange(res)
  }
  function displaySelect() { 
    let res = ''
    if (selectedValue?.length && values?.length) {
      const str = selectedValue.join(', ')
      res = str.length > 30 ? str.slice(0, 30).concat('...') : str;
    } else res = "Select";
    return res
  }
  function checkInclude(item) {
    return selectedValue?.includes(item);
  }

  function handleSelectAll(value) {
    setSelectAll(value)
    setSelectValue(value ? values : [])
    onChange(values)
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
  <ContentLoader 
    viewBox="0 0 340 50"
    backgroundColor="#e3e3e3"
    foregroundColor="#ecebeb"
    width={340}
    height={50}
    speed={2}
  >
    {/* Only SVG shapes */}
    <rect x="0" y="10" rx="5" ry="5" width="16" height="40" />
    <rect x="40" y="14" rx="4" ry="4" width="300" height="13" />
    <rect x="40" y="35" rx="3" ry="3" width="250" height="10" />
  </ContentLoader>
)
export function CardDragItem({ isLoading, onDelete, children }) {
  return (
    <div className={`${styles.cardDragItem} ${isLoading ? styles.loading : ''}`}>
      {isLoading ? <DragItemLoader/> : (
        <div className={styles.item}>
          <div className={styles.leftItem}>
            <AdIcon name="drag" mr="20px" h="48px" w="16px" />
            {children}
          </div>
          <AdIcon name="minus_circle" ml="6px" w="16px" onClick={onDelete}
            className={styles.icon}
          />
        </div>
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
