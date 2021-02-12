import Link from "next/link";
import MobileNav from "./MobileNav";

interface Props {
  link: string;
}

export const NavItem: React.FC<Props> = ({ children, link }) => {
  return (
    <li className="p-2 m-1 rounded-md hover:bg-primary-500 hover:text-white">
      <Link href={`/${link}`}>
        <a>{children}</a>
      </Link>
    </li>
  );
};

const Navbar: React.FC = () => {
  return (
    <>
      <div className="md:hidden fixed top-0 right-0 h-full w-full bg-gray-500 bg-opacity-50" />
      <nav className="px-3 flex justify-center bg-primary-300 bg-nav-wave bg-no-repeat bg-center bg-cover items-center">
        <Link href="/">
          <a className="py-2">
            <img src="/images/logo_1.svg" alt="Sportzone Logo" width="150px" />
          </a>
        </Link>
        <div className="flex-1"></div>
        <img className="md:hidden pr-2" src="/images/menu.svg" alt="Menu" />
        <ul className="hidden md:flex m-1 text-fonts text-base font-semibold">
          <NavItem link="news">News</NavItem>
          <NavItem link="competetions">Competitions</NavItem>
          <NavItem link="teams">Teams</NavItem>
          <NavItem link="fixtures">Fixtures</NavItem>
        </ul>
        <MobileNav />
      </nav>
    </>
  );
};

export default Navbar;
