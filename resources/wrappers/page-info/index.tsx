import Head from "next/head";
import { Url } from "../../definitions/types";
import styles from "./styles.module.scss";

export type PageInfoWrapperProps = {
  children?: any;
  title?: string;
  favicon?: Url;
};

export default function PageInfoWrapper({ children, title, favicon }) {
  return (
    <>
      <Head>
        {title && <title>{title}</title>}
        {favicon && <link rel="icon" href={favicon} />}
      </Head>
      {children}
    </>
  );
}
