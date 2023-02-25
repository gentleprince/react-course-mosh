// stateless functional Component
const NavBar = ({totalCounter}) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar{" "}
          <span className="bg-secondary rounded text-white m-2 p-2 mx-4">
            {totalCounter}
          </span>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
