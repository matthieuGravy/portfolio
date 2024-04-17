import { Outlet, ScrollRestoration } from "react-router-dom";
import Topnav from "./components/blocs/Topnav";
import Footer from "./components/blocs/Footer";
import { motion } from "framer-motion";

function App() {
  const styeMain = "bg-zinc-100 text-zinc-800 ";
  const pageTransition = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 1 },
  };

  return (
    <>
      <Topnav />
      <motion.main className={styeMain} {...pageTransition}>
        <Outlet />
      </motion.main>
      <Footer />
      <ScrollRestoration />
    </>
  );
}

export default App;
