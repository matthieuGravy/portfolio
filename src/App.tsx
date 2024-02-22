import { Outlet, ScrollRestoration } from "react-router-dom";
import Topnav from "./components/blocs/Topnav";
import Footer from "./components/blocs/Footer";

function App() {
  const styeMain = "bg-zinc-800 px-4 py-2 text-neutral-50 ";
  return (
    <>
      <Topnav />
      <main className={styeMain}>
        <Outlet />
      </main>
      <hr />
      <Footer />
      <ScrollRestoration />
    </>
  );
}

export default App;
