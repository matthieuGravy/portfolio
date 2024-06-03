import { Outlet } from "react-router-dom";
import Getintouch from "../../components/Getintouch/Getintouch";

const ProjetOutletpage = () => {
  return (
    <>
      <Outlet />
      <Getintouch />
    </>
  );
};

export default ProjetOutletpage;
