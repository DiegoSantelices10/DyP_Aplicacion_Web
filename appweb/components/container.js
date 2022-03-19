import Head from "next/head";

const Container = (props) => (
  <div className="relative bg-slate-200 h-screen container mx-auto ">
    <Head>
      <title>D&amp;P</title>
    </Head>
    <div>{props.children}</div>
  </div>
);

export default Container;
