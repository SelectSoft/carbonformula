import React, { Component } from "react";
import Dropdown from 'react-bootstrap/Dropdown'

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
                Bio-Fuel
                  </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item eventKey="action">Action</Dropdown.Item>
                <Dropdown.Item eventKey="another" >Another action</Dropdown.Item>
                <Dropdown.Item eventKey="else">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div class="dropdown col-md-3" style={{ marginTop: "20px" }}>
            <Dropdown onSelect={props.handleBiothanol}>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Bioethanol
                  </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item eventKey="action">Action</Dropdown.Item>
                <Dropdown.Item eventKey="another" >Another action</Dropdown.Item>
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
              onChange={(event) => props.setBioEnergyUsage(event.target.value)}
              placeholder="Enter usage"
              style={{ width: "100%", height: "35px" }} />
          </div>

          <div class="dropdown col-md-3" style={{ marginTop: "20px" }}>
            <Dropdown onSelect={props.handleLiter}>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Liter
                  </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item eventKey="action">Action</Dropdown.Item>
                <Dropdown.Item eventKey="another" >Another action</Dropdown.Item>
                <Dropdown.Item eventKey="else">Something else</Dropdown.Item>
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
          <input type="checkbox"
            value={props.bioEnergyCheckBoxValue} onClick={props.handleBioEnergyInput}
            style={{ width: "30px", height: "30px" }} />
        </div>
        <button style={{ float: "right" }} class="btn btn-danger btn-md">
          Add another fuel
        </button>
      </div>
    </React.Fragment>
  );
};

export default Bioenergy;
