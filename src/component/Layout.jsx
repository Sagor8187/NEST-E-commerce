import { Outlet } from "react-router-dom";
import Navbars from "./Navbars"
import Footer from "./Footer";


function Layout() {
  return (
    <>
      <Navbars></Navbars>
      <div className="min-h-screen">
        <Outlet />  {/* now Home / About / Contact*/}
      </div>
      <Footer />
    </>
  );
}

export default Layout;
