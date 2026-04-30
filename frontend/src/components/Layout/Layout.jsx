import { Outlet } from "react-router-dom";
import FloatingMenu from "../FloatingMenu";
import Navbar from "../NavBar";

function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-950 text-white">
      {/* NAVBAR */}
      <Navbar />

      {/* MAIN CONTENT */}
      <main className="flex-1 pt-20 md:pt-24 px-4 sm:px-6">
        <Outlet />
      </main>

      {/* FLOATING MENU */}
      <FloatingMenu />
    </div>
  );
}

export default Layout;
