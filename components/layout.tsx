import Footer from "./footer";
import Head from "next/head";
import Navbar from "./navbar";

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
      <main className="container m-auto">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
