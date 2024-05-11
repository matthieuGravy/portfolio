import { Outlet } from "react-router-dom";
import Getintouch from "../../components/Getintouch/Getintouch";

const Homepage = () => {
  return (
    <>
      <main className="bg-zinc-50 flex flex-col gap-12 md:gap-24 lg:gap-y-36">
        <Outlet />
        <Getintouch />
      </main>
    </>
  );
};

export default Homepage;
