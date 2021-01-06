import React, { Component } from "react";
import Dropdown from "react-bootstrap/Dropdown";

const Bioenergy = (props) => {
  return (
    <React.Fragment>
      <div className="container" style={{ width: "100%", margin: "0px" }}>
        <br />
        <h1>Bioenergy Usage</h1>
        <div className="row">
          <div className="col-md-3">
            <br />
            <p style={{ fontSize: "25px" }}>Type of fuel: </p>
          </div>

          <div class="dropdown col-md-3" style={{ marginTop: "20px" }}>
            <Dropdown onSelect={props.handleBiofuel}>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                {props.biofuel}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item eventKey="Bioethanol">Bioethanol</Dropdown.Item>
                <Dropdown.Item eventKey="Biodiesel">Biodiesel </Dropdown.Item>
                <Dropdown.Item eventKey="Biomethane">Biomethane </Dropdown.Item>
                <Dropdown.Item eventKey="Biodiesel">
                  Biodiesel (from used cooking oil){" "}
                </Dropdown.Item>
                <Dropdown.Item eventKey="Biodiesel(from tallow)">
                  Biodiesel (from tallow){" "}
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div class="dropdown col-md-3" style={{ marginTop: "20px" }}>
            <Dropdown value={props.bioethanol} onSelect={props.handleBiothanol}>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                {props.bioethanol}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item eventKey="litres">litres</Dropdown.Item>
                <Dropdown.Item eventKey="GJ">GJ </Dropdown.Item>
                <Dropdown.Item eventKey="kg">kg</Dropdown.Item>
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
              onChange={(event) => props.setBioEnergyUsage(event.target.value)}
              placeholder="Enter usage"
              style={{ width: "100%", height: "35px" }}
              value={props.bioEnergyUsage}
            />
          </div>

          <div class="dropdown col-md-3" style={{ marginTop: "20px" }}>
            <Dropdown onSelect={props.handleLiter}>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                {props.liter}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item eventKey="GJ">GJ </Dropdown.Item>
                <Dropdown.Item eventKey="kg">kg</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>

        <div class="col-md-4" style={{ padding: "0px" }}>
          <br />
          <p style={{ fontSize: "30px" }}>Add WTT ?</p>
        </div>
        <div class="col-md-4" style={{ padding: "0px" }}>
          <br />
          <input
            type="checkbox"
            value={props.bioEnergyCheckBoxValue}
            onClick={props.handleBioEnergyInput}
            style={{ width: "30px", height: "30px" }}
          />
        </div>
        {/* <button style={{ float: "right" }} class="btn btn-danger btn-md">
          Add another fuel
        </button> */}
      </div>
    </React.Fragment>
  );
};

export default Bioenergy;
