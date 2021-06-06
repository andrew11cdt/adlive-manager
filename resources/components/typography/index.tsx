import { HTMLAttributes } from "react";
import styles from "./styles.module.scss";

export type AdsliveTypographyProps = {
  children?: any;
  style?: any;
  className?: string;
} & HTMLAttributes<HTMLDivElement>;

export function AdsliveH1({
  children,
  className,
  style,
  ...props
}: AdsliveTypographyProps) {
  return (
    <div {...props} className={`${styles.h1} ${className || ""}`} style={style}>
      {children}
    </div>
  );
}

export function AdsliveH2({
  children,
  className,
  style,
  ...props
}: AdsliveTypographyProps) {
  return (
    <div {...props} className={`${styles.h2} ${className || ""}`} style={style}>
      {children}
    </div>
  );
}

export function AdsliveH3({
  children,
  className,
  style,
  ...props
}: AdsliveTypographyProps) {
  return (
    <div {...props} className={`${styles.h3} ${className || ""}`} style={style}>
      {children}
    </div>
  );
}

export function AdsliveH4({
  children,
  className,
  style,
  ...props
}: AdsliveTypographyProps) {
  return (
    <div {...props} className={`${styles.h4} ${className || ""}`} style={style}>
      {children}
    </div>
  );
}

export function AdsliveCaption({
  children,
  className,
  style,
  ...props
}: AdsliveTypographyProps) {
  return (
    <div
      {...props}
      className={`${styles.caption} ${className || ""}`}
      style={style}
    >
      {children}
    </div>
  );
}

export function AdsliveOverline({
  children,
  className,
  style,
  ...props
}: AdsliveTypographyProps) {
  return (
    <div
      {...props}
      className={`${styles.overline} ${className || ""}`}
      style={style}
    >
      {children}
    </div>
  );
}

export function AdsliveBody16({
  children,
  className,
  style,
  ...props
}: AdsliveTypographyProps) {
  return (
    <div
      {...props}
      className={`${styles.body16} ${className || ""}`}
      style={style}
    >
      {children}
    </div>
  );
}

export function AdsliveBody14({
  children,
  className,
  style,
  ...props
}: AdsliveTypographyProps) {
  return (
    <div
      {...props}
      className={`${styles.body14} ${className || ""}`}
      style={style}
    >
      {children}
    </div>
  );
}

export function AdsliveSubtitle({
  children,
  className,
  style,
  ...props
}: AdsliveTypographyProps) {
  return (
    <div
      {...props}
      className={`${styles.subtitle} ${className || ""}`}
      style={style}
    >
      {children}
    </div>
  );
}

export function AdsliveSubtitle14({
  children,
  className,
  style,
  ...props
}: AdsliveTypographyProps) {
  return (
    <div
      {...props}
      className={`${styles.subtitle14} ${className || ""}`}
      style={style}
    >
      {children}
    </div>
  );
}

export function AdsliveSubtitle16({
  children,
  className,
  style,
  ...props
}: AdsliveTypographyProps) {
  return (
    <div
      {...props}
      className={`${styles.subtitle16} ${className || ""}`}
      style={style}
    >
      {children}
    </div>
  );
}

export function MutedText(props) {
  const { children, style } = props
  return (
    <span style={{ color: "#7F838E", ...style}} >
      {children}
    </span>
  );
}

export function InfoText(props) {
  const { children, style, size } = props
  const sizeLvl = {lg: "20px", md: "14px", sm: "12px"}
  return (
    <span style={{ color: "#2475FF", fontSize: sizeLvl[size], ...style}} >
      {children}
    </span>
  );
}
