import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { ReactComponent as LogoIcon } from "../../assets/logo.svg"

function SharedLayout() {
  return (
    <>
      <header>
        <h1><LogoIcon /></h1>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/tweets">Tweets</NavLink>
        </nav>
      </header>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
}

export default SharedLayout;
