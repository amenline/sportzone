// import styles from './layout.module.css'

const Navbar = () => {
  return (
    <nav className="p-3">
      <img
        className="border-solid border"
        src="/logo_1.svg"
        alt="Sportzone Logo"
        width="150px"
      />
      <ul>
        <li>News</li>
        <li>Competitions</li>
        <li>Teams</li>
        <li>Fixtures</li>
      </ul>
    </nav>
  );
};

export default Navbar;
