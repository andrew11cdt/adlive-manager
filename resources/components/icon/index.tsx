import { HTMLAttributes } from "react";
import { path } from "ramda";
import styles from "./styles.module.scss";
import EyeOffIcon from "../../assets/icons/eye-off.svg";
import EyeOnIcon from "../../assets/icons/eye-on.svg";
import WifiIcon from "../../assets/icons/wifi.svg";
import ScreenIcon from "../../assets/icons/screen.svg";
import ScreenBoldIcon from "../../assets/icons/screen-bold.svg";
import VideoIcon from "../../assets/icons/video.svg";
import VideoBoldIcon from "../../assets/icons/video-bold.svg";
import ACIcon from "../../assets/icons/a-c.svg";
import ACBoldIcon from "../../assets/icons/a-c-bold.svg";
import PauseBoldIcon from "../../assets/icons/pause-bold.svg";
import GoLiveBoldIcon from "../../assets/icons/go-live-bold.svg";
import SendIcon from "../../assets/icons/send.svg";
import SendBoldIcon from "../../assets/icons/send-bold.svg";
import AlertIcon from "../../assets/icons/alert.svg";
import AlertBoldIcon from "../../assets/icons/alert-bold.svg";
import AttentionBoldIcon from "../../assets/icons/attention-bold.svg";
import CalendarIcon from "../../assets/icons/calendar.svg";
import SearchIcon from "../../assets/icons/search.svg";
import CirclePlusIcon from "../../assets/icons/circle-plus.svg";
import CirclePlusBoldIcon from "../../assets/icons/circle-plus-bold.svg";
import SettingIcon from "../../assets/icons/setting.svg";
import SettingBoldIcon from "../../assets/icons/setting-bold.svg";
import FullLeftArrow from "../../assets/icons/full-left-arrow.svg";
import FullRightArrow from "../../assets/icons/full-right-arrow.svg";

export enum ADSLIVE_ICON_COLOR {
  PRIMARY = "primary",
  NORMAL = "normal",
}

export enum ADSLIVE_ICON_TYPE {
  REGULAR = "regular",
  BOLD = "bold",
}

export enum ADSLIVE_ICON_SIZE {
  LARGE = "large",
  MEDIUM = "medium",
  SMALL = "small",
  EXTRA_SMALL = "extra-small",
}

export enum ADSLIVE_ICON_VARIANT {
  SCREEN = "screen",
  VIDEO = "video",
  SEND = "send",
  A_C = "a-c",
  ALERT = "alert",
  ATTENTION = "attention",
  CIRCLE_X = "circle-x",
  CIRCLE_PLUS = "circle-plus",
  CIRCLE_MINUS = "circle-minus",
  SEARCH = "search",
  SETTING = "setting",
  SQUARE_DOWN = "square-down",
  DOWN = "down",
  CODE = "code",
  PEN = "pen",
  TRASH = "trash",
  FULL_LEFT_ARROW = "full-left-arrow",
  FULL_RIGHT_ARROW = "full-right-arrow",
  WIFI = "wifi",
  FILTER = "filter",
  PAUSE = "pause",
  GO_LIVE = "go-live",
  CALENDAR = "calendar",
  EYE_ON = "eye-on",
  EYE_OFF = "eye-off",
}

const iconComponents = {
  [ADSLIVE_ICON_VARIANT.ALERT]: {
    [ADSLIVE_ICON_TYPE.REGULAR]: AlertIcon,
    [ADSLIVE_ICON_TYPE.BOLD]: AlertBoldIcon,
  },
  [ADSLIVE_ICON_VARIANT.ATTENTION]: {
    [ADSLIVE_ICON_TYPE.REGULAR]: null,
    [ADSLIVE_ICON_TYPE.BOLD]: AttentionBoldIcon,
  },
  [ADSLIVE_ICON_VARIANT.A_C]: {
    [ADSLIVE_ICON_TYPE.REGULAR]: ACIcon,
    [ADSLIVE_ICON_TYPE.BOLD]: ACBoldIcon,
  },
  [ADSLIVE_ICON_VARIANT.CALENDAR]: {
    [ADSLIVE_ICON_TYPE.REGULAR]: CalendarIcon,
    [ADSLIVE_ICON_TYPE.BOLD]: null,
  },
  [ADSLIVE_ICON_VARIANT.CIRCLE_MINUS]: {
    [ADSLIVE_ICON_TYPE.REGULAR]: null,
    [ADSLIVE_ICON_TYPE.BOLD]: null,
  },
  [ADSLIVE_ICON_VARIANT.CIRCLE_PLUS]: {
    [ADSLIVE_ICON_TYPE.REGULAR]: CirclePlusIcon,
    [ADSLIVE_ICON_TYPE.BOLD]: CirclePlusBoldIcon,
  },
  [ADSLIVE_ICON_VARIANT.CIRCLE_X]: {
    [ADSLIVE_ICON_TYPE.REGULAR]: null,
    [ADSLIVE_ICON_TYPE.BOLD]: null,
  },
  [ADSLIVE_ICON_VARIANT.CODE]: {
    [ADSLIVE_ICON_TYPE.REGULAR]: null,
    [ADSLIVE_ICON_TYPE.BOLD]: null,
  },
  [ADSLIVE_ICON_VARIANT.DOWN]: {
    [ADSLIVE_ICON_TYPE.REGULAR]: null,
    [ADSLIVE_ICON_TYPE.BOLD]: null,
  },
  [ADSLIVE_ICON_VARIANT.EYE_OFF]: {
    [ADSLIVE_ICON_TYPE.REGULAR]: EyeOffIcon,
    [ADSLIVE_ICON_TYPE.BOLD]: null,
  },
  [ADSLIVE_ICON_VARIANT.EYE_ON]: {
    [ADSLIVE_ICON_TYPE.REGULAR]: EyeOnIcon,
    [ADSLIVE_ICON_TYPE.BOLD]: null,
  },
  [ADSLIVE_ICON_VARIANT.FILTER]: {
    [ADSLIVE_ICON_TYPE.REGULAR]: null,
    [ADSLIVE_ICON_TYPE.BOLD]: null,
  },
  [ADSLIVE_ICON_VARIANT.FULL_LEFT_ARROW]: {
    [ADSLIVE_ICON_TYPE.REGULAR]: FullLeftArrow,
    [ADSLIVE_ICON_TYPE.BOLD]: FullLeftArrow,
  },
  [ADSLIVE_ICON_VARIANT.FULL_RIGHT_ARROW]: {
    [ADSLIVE_ICON_TYPE.REGULAR]: FullRightArrow,
    [ADSLIVE_ICON_TYPE.BOLD]: null,
  },
  [ADSLIVE_ICON_VARIANT.GO_LIVE]: {
    [ADSLIVE_ICON_TYPE.REGULAR]: null,
    [ADSLIVE_ICON_TYPE.BOLD]: GoLiveBoldIcon,
  },
  [ADSLIVE_ICON_VARIANT.PAUSE]: {
    [ADSLIVE_ICON_TYPE.REGULAR]: null,
    [ADSLIVE_ICON_TYPE.BOLD]: PauseBoldIcon,
  },
  [ADSLIVE_ICON_VARIANT.PEN]: {
    [ADSLIVE_ICON_TYPE.REGULAR]: null,
    [ADSLIVE_ICON_TYPE.BOLD]: null,
  },
  [ADSLIVE_ICON_VARIANT.SCREEN]: {
    [ADSLIVE_ICON_TYPE.REGULAR]: ScreenIcon,
    [ADSLIVE_ICON_TYPE.BOLD]: ScreenBoldIcon,
  },
  [ADSLIVE_ICON_VARIANT.SEARCH]: {
    [ADSLIVE_ICON_TYPE.REGULAR]: SearchIcon,
    [ADSLIVE_ICON_TYPE.BOLD]: null,
  },
  [ADSLIVE_ICON_VARIANT.SEND]: {
    [ADSLIVE_ICON_TYPE.REGULAR]: SendIcon,
    [ADSLIVE_ICON_TYPE.BOLD]: SendBoldIcon,
  },
  [ADSLIVE_ICON_VARIANT.SETTING]: {
    [ADSLIVE_ICON_TYPE.REGULAR]: SettingIcon,
    [ADSLIVE_ICON_TYPE.BOLD]: SettingBoldIcon,
  },
  [ADSLIVE_ICON_VARIANT.SQUARE_DOWN]: {
    [ADSLIVE_ICON_TYPE.REGULAR]: null,
    [ADSLIVE_ICON_TYPE.BOLD]: null,
  },
  [ADSLIVE_ICON_VARIANT.TRASH]: {
    [ADSLIVE_ICON_TYPE.REGULAR]: null,
    [ADSLIVE_ICON_TYPE.BOLD]: null,
  },
  [ADSLIVE_ICON_VARIANT.VIDEO]: {
    [ADSLIVE_ICON_TYPE.REGULAR]: VideoIcon,
    [ADSLIVE_ICON_TYPE.BOLD]: VideoBoldIcon,
  },
  [ADSLIVE_ICON_VARIANT.WIFI]: {
    [ADSLIVE_ICON_TYPE.REGULAR]: WifiIcon,
    [ADSLIVE_ICON_TYPE.BOLD]: null,
  },
  // [ADSLIVE_ICON_VARIANT.BACK]: {
  //   [ADSLIVE_ICON_TYPE.REGULAR]: BackIcon,
  //   [ADSLIVE_ICON_TYPE.BOLD]: null,
  // },
};

const getIcon = (
  variant: ADSLIVE_ICON_VARIANT,
  type: ADSLIVE_ICON_TYPE
): any => {
  return path([variant, type], iconComponents) || null;
};

const getSizeClassName = (size: ADSLIVE_ICON_SIZE) => {
  switch (size) {
    case ADSLIVE_ICON_SIZE.LARGE:
      return styles.large;
    case ADSLIVE_ICON_SIZE.MEDIUM:
      return styles.medium;
    case ADSLIVE_ICON_SIZE.SMALL:
      return styles.small;
    case ADSLIVE_ICON_SIZE.EXTRA_SMALL:
      return styles.extraSmall;
    default:
      return null;
  }
};

const getVariantClassNameByBoldType = (variant: ADSLIVE_ICON_VARIANT) => {
  switch (variant) {
    case ADSLIVE_ICON_VARIANT.SCREEN:
      return styles.screenBold;
    case ADSLIVE_ICON_VARIANT.VIDEO:
      return styles.videoBold;
    case ADSLIVE_ICON_VARIANT.SEND:
      return styles.sendBold;
    case ADSLIVE_ICON_VARIANT.ALERT:
      return styles.alertBold;
    case ADSLIVE_ICON_VARIANT.A_C:
      return styles.aCBold;
    case ADSLIVE_ICON_VARIANT.CIRCLE_PLUS:
      return styles.circlePlusBold;
    default:
      return null;
  }
};

const getVariantClassNameByRegularType = (variant: ADSLIVE_ICON_VARIANT) => {
  switch (variant) {
    case ADSLIVE_ICON_VARIANT.SCREEN:
      return styles.screen;
    case ADSLIVE_ICON_VARIANT.VIDEO:
      return styles.video;
    case ADSLIVE_ICON_VARIANT.SEND:
      return styles.send;
    case ADSLIVE_ICON_VARIANT.ALERT:
      return styles.alert;
    case ADSLIVE_ICON_VARIANT.A_C:
      return styles.aC;
    case ADSLIVE_ICON_VARIANT.SEARCH:
      return styles.search;
    default:
      return null;
  }
};

const getColorClassName = (color: ADSLIVE_ICON_COLOR) => {
  switch (color) {
    case ADSLIVE_ICON_COLOR.NORMAL:
      return styles.normal;
    case ADSLIVE_ICON_COLOR.PRIMARY:
      return styles.primary;
    default:
      return null;
  }
};

export type AdsliveIconProps = {
  color?: ADSLIVE_ICON_COLOR;
  type?: ADSLIVE_ICON_TYPE;
  size?: ADSLIVE_ICON_SIZE;
  variant?: ADSLIVE_ICON_VARIANT;
  className?: string;
  style?: any;
} & HTMLAttributes<HTMLDivElement>;

export default function AdsliveIcon({
  className,
  style,
  color = ADSLIVE_ICON_COLOR.NORMAL,
  variant,
  type = ADSLIVE_ICON_TYPE.REGULAR,
  size = ADSLIVE_ICON_SIZE.SMALL,
  ...props
}: AdsliveIconProps) {
  const Icon = getIcon(variant, type);

  return (
    <div
      {...props}
      className={`${styles.icon} ${getColorClassName(color)} ${getSizeClassName(
        size
      )} ${
        type === ADSLIVE_ICON_TYPE.BOLD
          ? getVariantClassNameByBoldType(variant) || ""
          : getVariantClassNameByRegularType(variant) || ""
      } ${className || ""}`}
      style={style}
    >
      {Icon && <Icon className={styles.svg} viewBox="0 0 24 24" />}
    </div>
  );
}
