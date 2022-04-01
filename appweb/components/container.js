import Head from "next/head";



const Container = (props) => (
  <div className="relative bg-slate-50 h-screen  mx-auto ">
    <Head>
      <title>D&amp;P</title>
    </Head>


    <body >
      <div className="font-poppins h-full">{props.children}</div>

    </body>
  </div>
);

export default Container;
