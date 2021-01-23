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
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="container m-auto">{children}</main>
      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by AMENLINE
        </a>
      </footer>
    </div>
  );
};

export default Layout;
