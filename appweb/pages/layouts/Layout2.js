import Head from "next/head";
import Navbar from 'components/navbar'


const Layout2 = ({ children }) => (
  <div className="h-screen w-full">
    <Head>
      <title>D&amp;P</title>
    </Head>
      <Navbar />
      <main className="h-screen fixed bg-slate-50 font-sans w-full">{children}</main>
  </div>
);

export default Layout2;
