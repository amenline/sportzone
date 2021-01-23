import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-300 bg-nav-wave bg-no-repeat bg-center bg-cover text-fonts">
      <div className="container m-auto py-4 flex justify-evenly">
        <section>
          <h2 className="uppercase font-bold mb-3">Quick Links</h2>
          <nav className="text-xs">
            <Link href="#">
              <a className="block p-1">News</a>
            </Link>
            <Link href="#">
              <a className="block p-1">Upcoming matches</a>
            </Link>
            <Link href="#">
              <a className="block p-1">Played matches</a>
            </Link>
            <Link href="#">
              <a className="block p-1">Competitions</a>
            </Link>
            <Link href="#">
              <a className="block p-1">Teams</a>
            </Link>
          </nav>
        </section>
        <section>
          <h2 className="uppercase font-bold mb-3">Top Links</h2>
          <nav className="text-xs">
            <Link href="#">
              <a className="block p-1">Champions League</a>
            </Link>
            <Link href="#">
              <a className="block p-1">EPL</a>
            </Link>
            <Link href="#">
              <a className="block p-1">Chealse</a>
            </Link>
            <Link href="#">
              <a className="block p-1">Liverpool</a>
            </Link>
            <Link href="#">
              <a className="block p-1">Transfer news</a>
            </Link>
          </nav>
        </section>
        <section>
          <h2 className="uppercase font-bold mb-3">Follow us</h2>
          <nav className="text-xs">
            <Link href="#">
              <a className="block p-1">Facebook</a>
            </Link>
            <Link href="#">
              <a className="block p-1">Twitter</a>
            </Link>
            <Link href="#">
              <a className="block p-1">Instagram</a>
            </Link>
          </nav>
        </section>
      </div>
      <section className="text-center py-4">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          className="p-1"
        >
          Powered by AMENLINE
        </a>
        <p className="text-xs p-1">
          &copy; {new Date().getFullYear()} Sportzone. All rights reserved.
        </p>
      </section>
    </footer>
  );
};

export default Footer;
