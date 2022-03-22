import Head from "next/head";

const Container = (props) => (
  <div className="relative bg-gray-100 h-screen  mx-auto ">
    <Head>
      <title>D&amp;P</title>
      <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@500&family=Roboto:wght@400&display=swap" rel="stylesheet" />
    </Head>


    <body >
      <div className="font-roboto text-gray-600">{props.children}</div>

    </body>
  </div>
);

export default Container;
