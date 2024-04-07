import { Outlet, ScrollRestoration } from "react-router-dom";
import Topnav from "./components/blocs/Topnav";
import Footer from "./components/blocs/Footer";
import { motion } from "framer-motion";
import Hr from "./components/blocs/Hr";

function App() {
  const styeMain = "bg-zinc-900 text-neutral-50 pt-28 ";
  const pageTransition = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <>
      <section className=" bg-zinc-900">
        <Topnav />
        <motion.main className={styeMain} {...pageTransition}>
          <Outlet />
        </motion.main>
        <Hr />
        <Footer />
        <ScrollRestoration />
      </section>
    </>
  );
}

export default App;
