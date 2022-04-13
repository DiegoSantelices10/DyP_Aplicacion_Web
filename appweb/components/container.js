import Head from "next/head";
import Navbar from './navbar'


const Container = ({ children }) => (
  <div className="h-screen">
    <Head>
      <title>D&amp;P</title>
    </Head>
      <Navbar />
      <main className="h-screen fixed bg-slate-50 font-poppins w-full">{children}</main>
  </div>
);

export default Container;
