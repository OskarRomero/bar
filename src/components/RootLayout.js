import { Outlet } from "react-router-dom";
import NavBar from "../pages/landing/NavBar";
import Footer from "../pages/landing/Footer";

function RootLayout() {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
export default RootLayout;
