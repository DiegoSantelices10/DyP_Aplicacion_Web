import Head from "next/head";


const Layout1 = ({ children }) => (
  <div className="h-screen">
    <Head>
      <title>D&amp;P</title>
    </Head>
      <main className="h-screen fixed bg-white font-poppins w-full">{children}</main>
  </div>
);

export default Layout1;