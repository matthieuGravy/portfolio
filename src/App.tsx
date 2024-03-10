import { Outlet, ScrollRestoration } from "react-router-dom";
import Topnav from "./components/blocs/Topnav";
import Footer from "./components/blocs/Footer";
import { motion } from "framer-motion";

function App() {
  const styeMain =
    "bg-zinc-800 px-4 xl:px-12 py-2 text-neutral-50 pt-10 min-h-[100vh]";
  const pageTransition = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <>
      <section className="min-h-[100vh] bg-zinc-800 w-full">
        <Topnav />
        <motion.main className={styeMain} {...pageTransition}>
          <Outlet />
        </motion.main>
        <hr />
        <Footer />
        <ScrollRestoration />
      </section>
    </>
  );
}

export default App;
