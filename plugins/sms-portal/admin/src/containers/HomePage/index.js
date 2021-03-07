/*
 *
 * HomePage
 *
 */

import React, { memo } from "react";

const HomePage = () => {
  return (
    <div>
      <h1 style={divStyle}>Welcome to SDA-SMS-PORTAL</h1>
      <a href="https://control.textlocal.in/">Send SMS</a>
    </div>
  );
};

const divStyle = {
  color: "black",
  textAlign: "center",
};

export default memo(HomePage);
