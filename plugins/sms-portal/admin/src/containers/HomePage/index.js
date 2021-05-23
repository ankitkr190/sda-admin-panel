/*
 *
 * HomePage
 *
 */

import React, { memo } from "react";
import "../HomePage/style.css";

const HomePage = () => {
  return (
    <div>
      <div>
        <h1 className="header">Welcome to SDA-SMS-PORTAL</h1>
      </div>

      <div className="sms-portal">
        <div className="column">
          <div className="card">
            <h1>Gym</h1>
            <a href="https://control.textlocal.in/">Send SMS</a>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <h1>Dance</h1>
            <a href="https://control.textlocal.in/">Send SMS</a>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <h1>Taekwondo</h1>
            <a href="https://control.textlocal.in/">Send SMS</a>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <h1>Skating</h1>
            <a href="https://control.textlocal.in/">Send SMS</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(HomePage);
