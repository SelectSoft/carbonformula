import React, { Component } from "react";
const Electricity = () => {
  return (
    <React.Fragment>
      <div className="container" style={{ width: "100%", margin: "0px" }}>
        <br />
        <h1>Electricity Usage</h1>

        <div className="row">
          <div className="col-md-3">
            <br />
            <p style={{ fontSize: "25px" }}>Electricity Usage: </p>
          </div>

          <div className="col-md-3">
            <br />
            <input style={{ width: "100%", height: "35px" }} />
          </div>

          <div class="dropdown col-md-3">
            <br />
            <button
              class="btn dropdown-toggle"
              type="button"
              data-toggle="dropdown"
              style={{ border: "1px solid black" }}
            >
              KWH
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

        {/* <div className="row">
          <div className="col-md-3">
            <br/>
                <p style={{fontSize: '25px'}}>Carbon Emitting: </p> 
            </div>

          <div className="col-md-3">
            <br />
            <input style={{ width: "100%", height: "35px" }} />
          </div>

          <div class="dropdown col-md-3">
            <br />
            <p style={{ fontSize: "20px" }}>Tones</p>
          </div>
        </div> */}

        <div class="col-md-4" style={{ padding: "0px" }}>
          <br />
          <p style={{ fontSize: "30px" }}>Add WIT and T&D?</p>
        </div>

        <div class="col-md-4" style={{ padding: "0px" }}>
          <br />
          <input type="checkbox" style={{ width: "30px", height: "30px" }} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Electricity;