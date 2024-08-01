import { Outlet, ScrollRestoration } from "react-router-dom";
import Topnav from "./components/Topnav";
import Footer from "./components/Footer";
import SEO from "./components/SEO";

function App() {
  return (
    <>
      <SEO />
      <section className="bg-[#130e11] min-h-screen">
        <Topnav />
        <Outlet />
        <Footer />
        <ScrollRestoration />
      </section>
    </>
  );
}

export default App;
