import React, { Component } from "react";
import Dropdown from "react-bootstrap/Dropdown";
const Onsite = (props) => {
  return (
    <React.Fragment>
      <div className="container" style={{ width: "100%", margin: "0px" }}>
        <br />
        <h1>Onsite fuel combustion</h1>
        <div className="row">
          <div className="col-md-3">
            <br />
            <p style={{ fontSize: "25px" }}>Type of fuel: </p>
          </div>

          <div class="dropdown col-md-3" style={{ marginTop: "20px" }}>
            <Dropdown onSelect={props.handleGaseous}>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Gaseous
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
          <div class="dropdown col-md-3" style={{ marginTop: "20px" }}>
            <Dropdown onSelect={props.handleCNG}>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                CNG
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item eventKey="tonnes">tonnes</Dropdown.Item>
                <Dropdown.Item eventKey="litres">litres</Dropdown.Item>
                <Dropdown.Item eventKey="kWh (Net CV)">
                  kWh (Net CV)
                </Dropdown.Item>
                <Dropdown.Item eventKey="kWh (Gross CV)">
                  kWh (Gross CV)
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
              onChange={(event) => props.setOnSiteUsage(event.target.value)}
              placeholder="Enter usage"
              style={{ width: "100%", height: "35px" }}
            />
          </div>
          <div class="dropdown col-md-3" style={{ marginTop: "20px" }}>
            <Dropdown onSelect={props.handleKWH}>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                KWH(NGV)
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item eventKey="KWH(NCV)">KWH(NCV)</Dropdown.Item>
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
            value={props.onsiteCheckBoxValue}
            onClick={props.handleOnsiteInput}
            style={{ width: "30px", height: "30px" }}
          />
        </div>
        <button style={{ float: "right" }} class="btn btn-danger btn-md">
          Add another
        </button>
      </div>
    </React.Fragment>
  );
};

export default Onsite;
