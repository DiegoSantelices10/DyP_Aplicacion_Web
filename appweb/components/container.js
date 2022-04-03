import Head from "next/head";



const Container = (props) => (
  <div className="relative bg-slate-50 h-screen  mx-auto ">
    <Head>
      <title>D&amp;P</title>
    </Head>


    <body >
      <div className="font-poppins h-full">{props.children}</div>
      <script src="https://unpkg.com/flowbite@1.3.4/dist/flowbite.js"></script>
    </body>
  </div>
);

export default Container;
