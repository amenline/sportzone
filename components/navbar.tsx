import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className="px-3 py-0 flex justify-center bg-primary-300 bg-nav-wave bg-no-repeat bg-center bg-cover">
      <img src="/logo_1.svg" alt="Sportzone Logo" width="150px" />
      <div className="flex-1"></div>
      <ul className="flex m-1 text-fonts text-base font-semibold">
        <li className="p-2 m-1 hover:bg-primary-500">
          <Link href="/news">
            <a>News</a>
          </Link>
        </li>
        <li className="p-2 m-1 rounded-md hover:bg-primary-500 hover:text-white">
          <Link href="/news">
            <a>Competitions</a>
          </Link>
        </li>
        <li className="p-2 m-1 rounded-md hover:bg-primary-500 hover:text-white">
          <Link href="/news">
            <a>Teams</a>
          </Link>
        </li>
        <li className="p-2 m-1 rounded-md hover:bg-primary-500 hover:text-white">
          <Link href="/news">
            <a>Fixtures</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
