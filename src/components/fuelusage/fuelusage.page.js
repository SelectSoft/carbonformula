import React, { Component } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Logo from "../home/logo";
import classes from "../../style/fuel.module.css";
import App from "../horizontally_scrolable/horizontalscrol";
import { Link } from "react-router-dom";

const Fuel = (props) => {
  return (
    <React.Fragment>
      <div className="container" style={{ width: "100%", margin: "0px" }}>
        <br />
        <h1>Fuel Usage</h1>
        <div className="row">
          <div className="col-md-3">
            <br />
            <p style={{ fontSize: "25px" }}>Type of fuel: </p>
          </div>

          <div class="dropdown col-md-3" style={{ marginTop: "20px" }}>
            <Dropdown onSelect={props.handleElectricityGaseous}>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Gaseous
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item eventKey="action">Action</Dropdown.Item>
                <Dropdown.Item eventKey="another">Another action</Dropdown.Item>
                <Dropdown.Item eventKey="else">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>

          <div class="dropdown col-md-3" style={{ marginTop: "20px" }}>
            <Dropdown onSelect={props.handleElectricityCNG}>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                CNG
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item eventKey="action">Action</Dropdown.Item>
                <Dropdown.Item eventKey="another">Another action</Dropdown.Item>
                <Dropdown.Item eventKey="else">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <br />
            <p style={{ fontSize: "25px" }}>Fuel Usage: </p>
          </div>

          <div class="dropdown col-md-2">
            <br />
            <input
              style={{ width: "100%", height: "35px" }}
              onChange={(event) =>
                props.handleElectricityFuelUsage(event.target.value)
              }
            />
          </div>

          <div class="dropdown col-md-3" style={{ marginTop: "20px" }}>
            <Dropdown onSelect={props.handleElectricityFuelUsageKWH}>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                KWH(NCV)
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item eventKey="action">Action</Dropdown.Item>
                <Dropdown.Item eventKey="another">Another action</Dropdown.Item>
                <Dropdown.Item eventKey="else">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>

          {/* <div className="col-md-3">
            <br />
            <p style={{ fontSize: "25px" }}>Carbon Emitting: </p>
          </div>

          <div className="col-md-3">
            <br />
            <input style={{ width: "100%", height: "35px" }} />
          </div>

          <div class="dropdown col-md-3">
            <br />
            <p style={{ fontSize: "20px" }}>Tones</p>
          </div> */}
        </div>

        <div class="col-md-4" style={{ padding: "0px" }}>
          <br />
          <p style={{ fontSize: "30px" }}>Add WTT</p>
        </div>
        <div class="col-md-4" style={{ padding: "0px" }}>
          <br />
          <input type="checkbox" style={{ width: "30px", height: "30px" }} />
        </div>
        <button style={{ float: "right" }} class="btn btn-danger btn-md">
          Add another fuel
        </button>
      </div>
    </React.Fragment>
  );
};

export default Fuel;
