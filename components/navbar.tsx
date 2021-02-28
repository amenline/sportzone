import { useState } from "react";
import Link from "next/link";
import MobileNav from "./MobileNav";

interface Props {
  link: string;
}

export const NavItem: React.FC<Props> = ({ children, link }) => {
  return (
    <li className="p-2 m-1 rounded-md hover:bg-primary-500 hover:text-white transition-all ease-linear duration-200">
      <Link href={`/${link}`}>
        <a>{children}</a>
      </Link>
    </li>
  );
};

const Navbar: React.FC = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <nav className="bg-primary-300 bg-nav-wave bg-no-repeat bg-center bg-cover items-center">
        <div className="container mx-auto flex px-3 justify-center">
          <Link href="/">
            <a className="py-2">
              <img
                src="/images/logo_1.svg"
                alt="Sportzone Logo"
                width="150px"
              />
            </a>
          </Link>
          <div className="flex-1"></div>
          <img
            className="md:hidden pr-2"
            src="/images/menu.svg"
            alt="Menu drawer button"
            onClick={() => setOpenDrawer(true)}
          />
          <ul className="hidden md:flex m-1 text-fonts text-sm">
            <NavItem link="news">News</NavItem>
            <NavItem link="competitions">Competitions</NavItem>
            <NavItem link="teams">Teams</NavItem>
            <NavItem link="fixtures">Fixtures</NavItem>
          </ul>
          <MobileNav open={openDrawer} setOpen={setOpenDrawer} />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
