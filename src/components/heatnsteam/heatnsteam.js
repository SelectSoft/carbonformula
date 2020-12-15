import React, { Component } from "react";
import classes from "../../style/fuel.module.css";
const HeatnSteam = () => {
  return (
    <React.Fragment>
      <div className="container" style={{ width: "100%", margin: "0px" }}>
        <br />
        <h1>Heat and Steam</h1>
        <div className="row">
          <div className="col-md-3">
            <br />
            <p style={{ fontSize: "25px" }}>Type of heat and steam: </p>
          </div>

          <div class="dropdown col-md-2" style={{ width: "100%" }}>
            <br />
            <button
              class="btn dropdown-toggle"
              type="button"
              data-toggle="dropdown"
              style={{ border: "1px solid black" }}
            >
              Onsite
            </button>
            <ul class="dropdown-menu">
              <li>
                <a href={{}}>HTML</a>
              </li>
              <li>
                <a href={{}}>CSS</a>
              </li>
              <li>
                <a href={{}}>JavaScript</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <br />
            <p style={{ fontSize: "25px" }}>Usage: </p>
          </div>

          <div class="dropdown col-md-2">
            <br />
            <input style={{ width: "100%", height: "35px" }} />
          </div>

          <div class="dropdown col-md-7" style={{ width: "100%" }}>
            <br />
            <button
              class="btn dropdown-toggle"
              type="button"
              data-toggle="dropdown"
              style={{ border: "1px solid black" }}
            >
              kwh
              {/* <span class="caret"></span> */}
            </button>
            <ul class="dropdown-menu">
              <li>
                <a href={{}}>HTML</a>
              </li>
              <li>
                <a href={{}}>CSS</a>
              </li>
              <li>
                <a href={{}}>JavaScript</a>
              </li>
            </ul>
          </div>

          <div class="col-md-4" style={{ padding: "0px" }}>
            <br />
            <p style={{ fontSize: "30px" }}>Add WTT and T&D?</p>
          </div>
          <div class="col-md-4" style={{ padding: "0px" }}>
            <br />
            <input type="checkbox" style={{ width: "30px", height: "30px" }} />
          </div>
        </div>
        <button style={{ float: "right" }} class="btn btn-danger btn-md">
          Add another
        </button>
      </div>
    </React.Fragment>
  );
};

export default HeatnSteam;
