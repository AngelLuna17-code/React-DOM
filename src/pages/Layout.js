import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <section>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
      </nav>
      <hr />
      <Outlet />
    </section>
  );
};

export default Layout;