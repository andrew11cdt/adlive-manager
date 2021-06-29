import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";

function AdsliveApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Adslive</title>
        <link href="/assets/css/globals.css" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Questrial&display=swap"
          rel="stylesheet"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
      </Head>
      <div
        style={{
          width: "100%",
          maxWidth: "414px",
          margin: "auto",
          height: "100%",
        }}
      >
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default AdsliveApp;
