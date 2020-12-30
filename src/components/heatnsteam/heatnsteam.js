import React, { Component } from "react";
import Dropdown from "react-bootstrap/Dropdown";

import classes from "../../style/fuel.module.css";
const HeatnSteam = (props) => {
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

          <div class="dropdown col-md-3" style={{ marginTop: "20px" }}>
            <Dropdown onSelect={props.handleHeatAndSteamOnsite}>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Onsite heat and steam
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item eventKey="Onsite heat and steam">
                  Onsite heat and steam
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <br />
            <p style={{ fontSize: "25px" }}>Usage: </p>
          </div>

          <div class="dropdown col-md-2">
            <br />
            <input
              style={{ width: "100%", height: "35px" }}
              onChange={(event) =>
                props.handleHeatAndSteamUsage(event.target.value)
              }
            />
          </div>

          <div class="dropdown col-md-3" style={{ marginTop: "20px" }}>
            <Dropdown onSelect={props.handleHeatAndSteamKWH}>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                KWH
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item eventKey="KWH">KWH</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
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
