import React, { Component } from "react";
import Dropdown from "react-bootstrap/Dropdown";

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
                {props.electricityGaseous}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item eventKey="Liquid fuels">
                  Liquid fuels
                </Dropdown.Item>
                <Dropdown.Item eventKey="Solid fuels">
                  Solid fuels
                </Dropdown.Item>
                <Dropdown.Item eventKey="Biofuel">Biofuel</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>

          <div class="dropdown col-md-3" style={{ marginTop: "20px" }}>
            <Dropdown onSelect={props.handleElectricityCNG}>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                {props.electricityCNG}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item eventKey="CNG">CNG</Dropdown.Item>
                <Dropdown.Item eventKey="LNG">LNG</Dropdown.Item>
                <Dropdown.Item eventKey="LPG">LPG</Dropdown.Item>
                <Dropdown.Item eventKey="Natural Gas">
                  Natural Gas
                </Dropdown.Item>
                <Dropdown.Item eventKey="Natural Gas (100% mineral blend)">
                  Natural Gas (100% mineral blend)
                </Dropdown.Item>
                <Dropdown.Item eventKey="Other petroleum gas">
                  Other petroleum gas
                </Dropdown.Item>
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
                <Dropdown.Item eventKey="KWH(NCV)">KWH(NCV)</Dropdown.Item>
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
