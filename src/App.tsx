import { Outlet, ScrollRestoration } from "react-router-dom";
import Topnav from "./components/Topnav";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <section className="bg-zinc-900 min-h-screen">
        <Topnav />
        <Outlet />
        <Footer />
        <ScrollRestoration />
      </section>
    </>
  );
}

export default App;
