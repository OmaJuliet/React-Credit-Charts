import { Link, useLocation } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { CgNotes } from "react-icons/cg";

function Sidebar() {
  const location = useLocation();

  const isActiveRoute = (pathname: string) => {
    return location.pathname === pathname;
  };

  return (
    <header className="w-24 h-screen bg-white flex flex-col items-center justify-between fixed top-0 shadow-md">
      <section className="flex flex-col items-center mt-8">
        <section className="mt-8">
          <Link to="/">
            <GoHome
              className={`text-${isActiveRoute("/") ? "blue-500" : "gray-400"} text-4xl`}
              title="Dashboard"
            />
          </Link>
        </section>
        <section className="mt-20">
          <Link to="/customer">
            <CgNotes
              className={`text-${isActiveRoute("/customer") ? "blue-500" : "gray-400"} text-3xl`}
              title="Customer"
            />
          </Link>
        </section>
      </section>
    </header>
  );
}

export default Sidebar;
