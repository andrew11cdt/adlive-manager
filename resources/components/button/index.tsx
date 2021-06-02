import { Button, Container, Row } from "react-bootstrap";
import { parseTitle } from "../../utils/common.util";
import styles from "./styles.module.scss";

export enum ADSLIVE_BUTTON_SIZE {
  LARGE = "large",
  SMALL = "small",
}

export enum ADSLIVE_BUTTON_TYPE {
  FIT = "fit",
  FULL = "full",
}

export enum ADSLIVE_BUTTON_VARIANT {
  PRIMARY = "primary",
  ROUNDER = "rounder",
  SECONDARY = "secondary",
}

type ADSLIVEButtonProps = {
  size?: ADSLIVE_BUTTON_SIZE;
  type?: ADSLIVE_BUTTON_TYPE;
  variant?: ADSLIVE_BUTTON_VARIANT;
  className?: any;
  style?: any;
  disabledClassName?: any;
  disabledStyle?: any;
  disabled?: boolean;
  children?: any;
  onClick?: any;
};

const getTypeClassName = (
  type: ADSLIVE_BUTTON_TYPE = ADSLIVE_BUTTON_TYPE.FIT
) => {
  switch (type) {
    case ADSLIVE_BUTTON_TYPE.FIT:
      return styles.fit;
    case ADSLIVE_BUTTON_TYPE.FULL:
      return styles.full;
    default:
      return null;
  }
};

const getVariantClassName = (
  variant: ADSLIVE_BUTTON_VARIANT = ADSLIVE_BUTTON_VARIANT.PRIMARY
) => {
  switch (variant) {
    case ADSLIVE_BUTTON_VARIANT.PRIMARY:
      return styles.primary;
    case ADSLIVE_BUTTON_VARIANT.ROUNDER:
      return styles.rounder;
    default:
      return null;
  }
};

const getSizeClassName = (
  size: ADSLIVE_BUTTON_SIZE = ADSLIVE_BUTTON_SIZE.LARGE
) => {
  switch (size) {
    case ADSLIVE_BUTTON_SIZE.LARGE:
      return styles.large;
    case ADSLIVE_BUTTON_SIZE.SMALL:
      return styles.small;
    default:
      return null;
  }
};

export function AdButton(props) {
  const { icon, title, onClick, variant, cardBtn, dash, ghost, style } = props;
  return (
    <Button
      style={style}
      onClick={onClick}
      variant={variant || "light"}
      className={`${styles.adBtn} ${cardBtn ? styles.cardBtn : ""} ${
        dash ? styles.dashBtn : ""
      } ${ghost ? styles.ghostBtn : ""}`}
    >
      {icon}
      {title}
    </Button>
  );
}

export default function ADSLIVEButton({
  size,
  type,
  variant,
  className,
  style,
  disabledClassName,
  disabledStyle,
  children,
  onClick,
  disabled,
}: ADSLIVEButtonProps) {
  return (
    <div
      className={`${styles.button} ${getTypeClassName(type) || ""} ${
        getVariantClassName(variant) || ""
      } ${getSizeClassName(size) || ""} ${disabled ? styles.disabled : ""} ${
        className || ""
      }`}
      style={style}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
