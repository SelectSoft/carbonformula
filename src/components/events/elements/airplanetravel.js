import React, { Component } from "react";
const Airplanetravel = () => {
  return (
    <React.Fragment>
      <div className="container" style={{ width: "100%", margin: "0px" }}>
        <br />
        <h1>Business Travel air</h1>
        <div className="row">
          <div className="col-md-3">
            <br />
            <p style={{ fontSize: "25px" }}>Departure airport </p>
          </div>

          <div className="dropdown col-md-3" style={{ width: "100%" }}>
            <br />
            <button
              className="btn dropdown-toggle"
              type="button"
              data-toggle="dropdown"
              style={{ border: "1px solid black" }}
            ></button>
            <ul class="dropdown-menu">
              <li>
                <a >HTML</a>
              </li>
              <li>
                <a >CSS</a>
              </li>
              <li>
                <a >JavaScript</a>
              </li>
            </ul>
          </div>

          <div className="col-md-3">
            <br />
            <p style={{ fontSize: "25px" }}>Via: </p>
          </div>

          <div className="dropdown col-md-3" style={{ width: "100%" }}>
            <br />
            <button
              style={{ marginLeft: "2px" }}
              className="btn dropdown-toggle"
              type="button"
              data-toggle="dropdown"
              style={{ border: "1px solid black" }}
            ></button>
            <ul class="dropdown-menu">
              <li>
                <a >HTML</a>
              </li>
              <li>
                <a >CSS</a>
              </li>
              <li>
                <a >JavaScript</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <br />
            <p style={{ fontSize: "25px" }}>Arival airport </p>
          </div>

          <div className="dropdown col-md-3" style={{ width: "100%" }}>
            <br />
            <button
              className="btn dropdown-toggle"
              type="button"
              data-toggle="dropdown"
              style={{ border: "1px solid black" }}
            ></button>
            <ul class="dropdown-menu">
              <li>
                <a >HTML</a>
              </li>
              <li>
                <a >CSS</a>
              </li>
              <li>
                <a >JavaScript</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <br />
            <p style={{ fontSize: "25px" }}>Class: </p>
          </div>

          <div className="dropdown col-md-3" style={{ width: "100%" }}>
            <br />
            <button
              className="btn dropdown-toggle"
              type="button"
              data-toggle="dropdown"
              style={{ border: "1px solid black" }}
            >
              Economy
            </button>
            <ul class="dropdown-menu">
              <li>
                <a >HTML</a>
              </li>
              <li>
                <a >CSS</a>
              </li>
              <li>
                <a >JavaScript</a>
              </li>
            </ul>
          </div>

          <div className="col-md-3">
            <br />
            <p style={{ fontSize: "25px" }}>Passenger: </p>
          </div>

          <div className="dropdown col-md-3" style={{ width: "100%" }}>
            <br />
            <button
              style={{ marginLeft: "2px" }}
              className="btn dropdown-toggle"
              type="button"
              data-toggle="dropdown"
              style={{ border: "1px solid black" }}
            ></button>
            <ul class="dropdown-menu">
              <li>
                <a >HTML</a>
              </li>
              <li>
                <a >CSS</a>
              </li>
              <li>
                <a >JavaScript</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div class="col-md-2" style={{ padding: "0px" }}>
            <br />
            <p style={{ fontSize: "30px" }}>Return</p>
          </div>
          <div class="col-md-1" style={{ padding: "0px" }}>
            <br />
            <input type="checkbox" style={{ width: "30px", height: "30px" }} />
          </div>
          <div class="col-md-2" style={{ padding: "0px" }}>
            <br />
            <p style={{ fontSize: "30px" }}>Single</p>
          </div>
          <div class="col-md-1" style={{ padding: "0px" }}>
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

export default Airplanetravel;
