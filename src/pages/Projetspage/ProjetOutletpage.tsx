import { Outlet } from "react-router-dom";
import Getintouch from "../../components/Getintouch/Getintouch";
import Containers from "../../components/Containers";
import Heading from "../../components/blocs/Heading";

const ProjetOutletpage = () => {
  return (
    <>
      <Outlet />
      <Containers type="section-large" className="space-y-8 mb-16">
        <Heading level="h3" title="Get in touch" className="ps-8 pt-12" />
        <Getintouch className="md:py-12 md:px-8" />
      </Containers>
    </>
  );
};

export default ProjetOutletpage;
