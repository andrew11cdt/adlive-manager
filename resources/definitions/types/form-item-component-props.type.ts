import { AdsliveComponentProps } from "./component-props.type";

export type AdsliveFormItemComponentProps = AdsliveComponentProps & {
  autoFocus?:boolean;
  value?: string;
  defaultValue?: string;
  disabled?: boolean;
  onChange?: (value: string, e?: any) => void;
  onBlur?: (value: string, e?: any) => void;
  onFocus?: (value: string, e?: any) => void;
};
