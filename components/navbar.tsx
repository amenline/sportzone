import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className="px-3 flex justify-center bg-primary-300 bg-nav-wave bg-no-repeat bg-center bg-cover items-center">
      <Link href="/">
        <a className="py-2">
          <img src="/images/logo_1.svg" alt="Sportzone Logo" width="150px" />
        </a>
      </Link>
      <div className="flex-1"></div>
      <img className="md:hidden pr-2" src="/images/menu.svg" alt="Menu icon" />
      <ul className="hidden md:flex m-1 text-fonts text-base font-semibold">
        <li className="p-2 m-1 hover:bg-primary-500">
          <Link href="/news">
            <a>News</a>
          </Link>
        </li>
        <li className="p-2 m-1 rounded-md hover:bg-primary-500 hover:text-white">
          <Link href="/competetions">
            <a>Competitions</a>
          </Link>
        </li>
        <li className="p-2 m-1 rounded-md hover:bg-primary-500 hover:text-white">
          <Link href="/teams">
            <a>Teams</a>
          </Link>
        </li>
        <li className="p-2 m-1 rounded-md hover:bg-primary-500 hover:text-white">
          <Link href="/fixtures">
            <a>Fixtures</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
