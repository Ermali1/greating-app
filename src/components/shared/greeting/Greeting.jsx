import React from "react";
import "./greeting.scss";
import { Link } from "react-router-dom";

function Greeting({ message, btnText }) {
  return (
    <div className="Greeting ">
      <h1>{message}</h1>

      {btnText ? (
        <Link className="Greeting__btn" to={"/Contact"}>
          {btnText}
        </Link>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Greeting;
