import React, { Component } from "react";
import Dropdown from "react-bootstrap/Dropdown";

const Electricity = (props) => {
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
            <input
              style={{ width: "100%", height: "35px" }}
              onChange={(event) =>
                props.handleElectricityUsage(event.target.value)
              }
              value={props.electricityUsage}
            />
          </div>

          <div class="dropdown col-md-3" style={{ marginTop: "20px" }}>
            <Dropdown onSelect={props.handleElectricityKWH}>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                KWH
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item eventKey="KWH">KWH</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
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
          {/* <input type="checkbox" style={{ width: "30px", height: "30px" }} /> */}
          <input
            type="checkbox"
            name="check-box"
            onClick={props.handleElectricityUsageCheckBox}
            style={{ width: "30px", height: "30px" }}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Electricity;
