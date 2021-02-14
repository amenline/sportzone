import Footer from "./Footer";
import Head from "next/head";
import Navbar from "./Navbar";

interface Props {
  title: string;
}

const Layout: React.FC<Props> = ({ children, title }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <header>
        <Navbar />
      </header>
      <main className="container m-auto md:py-16 md:px-5 py-8 px-2">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
