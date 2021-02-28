import Footer from "./Footer";
import Head from "next/head";
import Navbar from "./Navbar";

interface Props {
  title: string;
}

const Layout: React.FC<Props> = ({ children, title }) => {
  return (
    <div className="font-body">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <header>
        <Navbar />
      </header>
      <main className="max-w-7xl mx-auto px-2 py-8 sm:px-6 lg:px-8 container">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
