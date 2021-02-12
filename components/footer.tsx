import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-300 bg-nav-wave bg-no-repeat bg-center bg-cover text-fonts">
      <div className="container m-auto py-4 flex justify-evenly">
        <section>
          <h2 className="uppercase font-bold mb-3">Quick Links</h2>
          <nav className="text-xs">
            <Link href="/home">
              <a className="block py-1 hover:text-gray-300">Home</a>
            </Link>
            <Link href="/news">
              <a className="block py-1 hover:text-gray-300">News</a>
            </Link>
            <Link href="/fixtures">
              <a className="block py-1 hover:text-gray-300">Fixtures</a>
            </Link>
            <Link href="/components">
              <a className="block py-1 hover:text-gray-300">Competitions</a>
            </Link>
            <Link href="Teams">
              <a className="block py-1 hover:text-gray-300">Teams</a>
            </Link>
          </nav>
        </section>
        <section>
          <h2 className="uppercase font-bold mb-3">Top Links</h2>
          <nav className="text-xs">
            <Link href="#">
              <a className="block py-1 hover:text-gray-300">Champions League</a>
            </Link>
            <Link href="#">
              <a className="block py-1 hover:text-gray-300">EPL</a>
            </Link>
            <Link href="#">
              <a className="block py-1 hover:text-gray-300">Chealse</a>
            </Link>
            <Link href="#">
              <a className="block py-1 hover:text-gray-300">Liverpool</a>
            </Link>
            <Link href="#">
              <a className="block py-1 hover:text-gray-300">Transfer news</a>
            </Link>
          </nav>
        </section>
        <section className="hidden md:block">
          <h2 className="uppercase font-bold mb-3">Follow us</h2>
          <nav className="text-xs">
            <Link href="#">
              <a
                className="block py-1 hover:text-gray-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="pr-2 inline-block"
                  src="/images/facebook.svg"
                  alt="Facebook"
                />
                Facebook
              </a>
            </Link>
            <Link href="#">
              <a
                className="block py-1 hover:text-gray-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="pr-2 inline-block"
                  src="/images/twitter.svg"
                  alt="Twitter"
                />
                Twitter
              </a>
            </Link>
            <Link href="#">
              <a
                className="block py-1 hover:text-gray-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="pr-2 inline-block"
                  src="/images/instagram.svg"
                  alt="Instagram"
                />
                Instagram
              </a>
            </Link>
          </nav>
        </section>
      </div>
      <section className="text-center py-4">
        <nav className="md:hidden flex justify-center">
          <Link href="#">
            <a className="p-2 m-1" target="_blank" rel="noopener noreferrer">
              <img src="/images/facebook.svg" alt="Facebook" />
            </a>
          </Link>
          <Link href="#">
            <a className="p-2 m-1" target="_blank" rel="noopener noreferrer">
              <img src="/images/twitter.svg" alt="Twitter" />
            </a>
          </Link>
          <Link href="#">
            <a className="p-2 m-1" target="_blank" rel="noopener noreferrer">
              <img src="/images/instagram.svg" alt="Instagram" />
            </a>
          </Link>
        </nav>
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
