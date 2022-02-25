import Head from "next/head";

const Container = (props) => (
  <div>
    <Head>
      <title>D&amp;P</title>
    </Head>
    <div >{props.children}</div>
  </div>
);

export default Container;
