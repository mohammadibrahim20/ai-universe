import React from "react";

const Buttun = ({children}) => {
  return (
    <div>
      <button className="btn btn-active btn-error"> {children}</button>
    </div>
  );
};

export default Buttun;
