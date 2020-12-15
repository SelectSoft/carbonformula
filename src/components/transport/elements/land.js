import React, { Component } from "react";
const land = () => {
  return (
    <React.Fragment>
      <div className="container" style={{ width: "100%", margin: "0px" }}>
        <br />
        <h1>Business travel land</h1>
        <div className="row">
          <div className="col-md-3">
            <br />
            <p style={{ fontSize: "25px" }}>Vehical </p>
          </div>

          <div className="dropdown col-md-3" style={{ width: "100%" }}>
            <br />
            <button
              className="btn dropdown-toggle"
              type="button"
              data-toggle="dropdown"
              style={{ border: "1px solid black" }}
            >
              Car
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

          <div className="col-md-3">
            <br />
            <p style={{ fontSize: "25px" }}>Type </p>
          </div>

          <div className="dropdown col-md-3" style={{ width: "100%" }}>
            <br />
            <button
              style={{ marginLeft: "2px" }}
              className="btn dropdown-toggle"
              type="button"
              data-toggle="dropdown"
              style={{ border: "1px solid black" }}
            >
              Mini
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
            <p style={{ fontSize: "25px" }}>Distance: </p>
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
              Km
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
        </div>

        <button style={{ float: "right" }} class="btn btn-danger btn-md">
          Add another
        </button>
      </div>
    </React.Fragment>
  );
};

export default land;
