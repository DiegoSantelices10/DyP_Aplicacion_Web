import Head from "next/head";



const Container = (props) => (
  <div className="relative bg-gray-100 h-screen  mx-auto ">
    <Head>
      <title>D&amp;P</title>
    </Head>


    <body >
      <div className="font-poppins">{props.children}</div>

    </body>
  </div>
);

export default Container;
