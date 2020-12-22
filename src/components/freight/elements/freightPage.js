import React, { Component } from "react";

const FreightPage = () => {
  return (
    <React.Fragment>
      <div className="container" style={{ width: "100%", margin: "0px" }}>
        <br />
        <h1>Freighting goods</h1>
        <div className="row">
          <div className="col-md-3">
            <br />
            <p style={{ fontSize: "25px" }}>Vahicle type </p>
          </div>

          <div class="dropdown col-md-2" style={{ width: "100%" }}>
            <br />
            <button
              class="btn dropdown-toggle"
              type="button"
              data-toggle="dropdown"
              style={{ border: "1px solid black" }}
            >
              Vans
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

          <div class="dropdown col-md-3">
            <br />
            <button
              class="btn dropdown-toggle"
              type="button"
              data-toggle="dropdown"
              style={{ border: "1px solid black" }}
            >
              Class 1(upto 1.305tonnes)
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

          <div class="dropdown col-md-3">
            <br />
            <button
              class="btn dropdown-toggle"
              type="button"
              data-toggle="dropdown"
              style={{ border: "1px solid black" }}
            >
              Diesel
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
        </div>
        <div className="row">
          <div className="col-md-3">
            <br />
            <p style={{ fontSize: "25px" }}>Distance/Weight </p>
          </div>

          <div class="dropdown col-md-2">
            <br />
            <input style={{ width: "100%", height: "35px" }} />
          </div>

          <div class="dropdown col-md-3" style={{ width: "100%" }}>
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
        <div class="col-md-4" style={{ padding: "0px" }}>
          <br />
          <p style={{ fontSize: "30px" }}>Add WTT ?</p>
        </div>
        <div class="col-md-4" style={{ padding: "0px" }}>
          <br />
          <input type="checkbox" style={{ width: "30px", height: "30px" }} />
        </div>
        <button style={{ float: "right" }} class="btn btn-danger btn-md">
          Add another
        </button>
      </div>
    </React.Fragment>
  );
};

export default FreightPage;
