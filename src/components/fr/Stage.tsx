import { Fragment } from "react";
import Letter from "../blocs/Letter";

const Stage = () => {
  const tab = ["s", "t", "a", "g", "e"];

  return (
    <>
      {tab.map((lettre, index) => (
        <Fragment key={index}>
          <Letter>{lettre}</Letter>
          <br />
        </Fragment>
      ))}
    </>
  );
};

export default Stage;
