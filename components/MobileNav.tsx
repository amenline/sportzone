import Link from "next/link";

interface LinkProps {
  link: string;
}

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const NavItem: React.FC<LinkProps> = ({ children, link }) => {
  return (
    <li className="p-2 m-1 rounded-md focus:bg-primary-100 text-lg">
      <Link href={`/${link}`}>
        <a>{children}</a>
      </Link>
    </li>
  );
};

const MobileNav: React.FC<Props> = ({ open, setOpen }) => {
  return (
    <div className={`${!open && "hidden"}`}>
      <div
        className="md:hidden fixed top-0 right-0 h-full w-full bg-gray-500 bg-opacity-50 transition-all ease-linear duration-500"
        onClick={() => {
          setOpen(false);
        }}
      />
      <div className="md:hidden fixed top-0 right-0 h-full w-3/4 xs:w-4/6 sm:w-1/2 bg-white shadow-2xl transition-all ease-linear duration-500">
        <div className="flex p-3 bg-primary-100 items-center">
          <Link href="/">
            <a>
              <svg
                width="33"
                height="33"
                viewBox="0 0 33 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.807065"
                  y="0.807065"
                  width="31.3859"
                  height="31.3859"
                  fill="#F2F2F2"
                  stroke="#3E4874"
                  strokeWidth="1.61413"
                />
                <path
                  d="M16.3996 23.8983C15.345 23.8983 14.3765 23.7476 13.4941 23.4463C12.6117 23.145 11.9123 22.7469 11.3958 22.2519C10.9008 21.7569 10.6533 21.2296 10.6533 20.67C10.6533 20.0243 10.9546 19.6262 11.5572 19.4755C12.1598 20.1212 12.8808 20.67 13.7201 21.122C14.581 21.5524 15.4957 21.7676 16.4641 21.7676C17.4111 21.7676 18.1536 21.5416 18.6916 21.0897C19.2297 20.6377 19.4987 20.0136 19.4987 19.2173C19.4987 18.5071 19.2404 17.9152 18.7239 17.4417C18.2074 16.9683 17.3035 16.5271 16.0122 16.1182C14.1398 15.494 12.8162 14.8053 12.0414 14.0521C11.2882 13.2773 10.9115 12.2335 10.9115 10.9207C10.9115 9.39261 11.4065 8.30576 12.3965 7.66011C13.408 6.99294 14.6778 6.65935 16.2059 6.65935C17.82 6.65935 19.1113 6.97142 20.0798 7.59555C21.0698 8.21968 21.5648 8.9837 21.5648 9.88761C21.5648 10.5333 21.2635 10.9314 20.6609 11.0821C20.0583 10.3718 19.4018 9.80152 18.6916 9.37109C18.0029 8.94065 17.2066 8.72544 16.3027 8.72544C15.4418 8.72544 14.7316 8.92989 14.1721 9.33881C13.634 9.7262 13.365 10.2427 13.365 10.8884C13.365 11.6201 13.6448 12.2227 14.2043 12.6962C14.7639 13.1697 15.7324 13.6432 17.1098 14.1166C18.9391 14.7192 20.2197 15.3972 20.9514 16.1504C21.7047 16.9037 22.0813 17.8829 22.0813 19.0882C22.0813 20.7023 21.554 21.9075 20.4995 22.7038C19.4449 23.5001 18.0783 23.8983 16.3996 23.8983Z"
                  fill="#3E4874"
                />
              </svg>
            </a>
          </Link>
          <span className="flex-1" />
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => {
              setOpen(false);
            }}
          >
            <path
              d="M20.197 2.837L21.064 3.704L12.854 11.995L21.162 20.197L20.296 21.064L12.004 12.854L3.774 21.165L2.934 20.325L11.147 12.005L2.835 3.774L3.675 2.934L11.994 11.146L20.197 2.837V2.837ZM20.188 0L11.976 8.318L3.666 0.114L0 3.781L8.321 12.021L0.114 20.334L3.781 24L12.018 15.682L20.303 23.886L24 20.188L15.685 11.979L23.886 3.697L20.188 0V0Z"
              fill="#F2F2F2"
            />
          </svg>
        </div>
        <div>
          <ul className="mt-5">
            <NavItem link="">Home</NavItem>
            <NavItem link="news">News</NavItem>
            <NavItem link="competitions">Competitions</NavItem>
            <NavItem link="teams">Teams</NavItem>
            <NavItem link="fixtures">Fixtures</NavItem>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
