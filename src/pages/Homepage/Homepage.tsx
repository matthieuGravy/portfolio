import { Outlet } from "react-router-dom";

import Getintouch from "../../components/Getintouch/Getintouch";
import ParallaxTextor from "../../components/ParallaxTextor";

const Homepage = () => {
  return (
    <>
      <main className="text-zinc-800 flex flex-col gap-12 md:gap-24 lg:gap-y-36">
        <Outlet />
        <ParallaxTextor />
        <Getintouch />
      </main>
    </>
  );
};

export default Homepage;
