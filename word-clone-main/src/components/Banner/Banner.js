import React from "react";

function Banner({ gameStatus }) {

 

  console.log(gameStatus);
  return <div className={`${gameStatus} banner`}></div>;
}

export default Banner;
