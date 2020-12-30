import React, { Component } from "react";
import Dropdown from "react-bootstrap/Dropdown";

const Calculatefuel = (props) => {
  return (
    <React.Fragment>
      <div className="container" style={{ width: "100%", margin: "0px" }}>
        <br />
        <h1>Measure by fuel use</h1>
        <div className="row">
          <div className="col-md-3">
            <br />
            <p style={{ fontSize: "25px" }}>Fuel type</p>
          </div>

          <div class="dropdown col-md-3" style={{ marginTop: "20px" }}>
            <Dropdown onSelect={props.handleCalculatefuelGaseous}>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Gaseous
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item eventKey="CNG">Liquid fuels</Dropdown.Item>
                <Dropdown.Item eventKey="LNG">Solid fuels</Dropdown.Item>
                <Dropdown.Item eventKey="LPG">Biofuel</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>

          <div className="col-md-3">
            <br />
            <p style={{ fontSize: "25px" }}>Fuel </p>
          </div>

          <div class="dropdown col-md-3" style={{ marginTop: "20px" }}>
            <Dropdown onSelect={props.handleCalculatefuelCNG}>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                CNG
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
            <p style={{ fontSize: "25px" }}>Quantity </p>
          </div>

          <div class="dropdown col-md-2">
            <br />
            <input
              style={{ width: "100%", height: "35px" }}
              onChange={(event) =>
                props.handleCalculatefuelQuantity(event.target.value)
              }
            />
          </div>

          <div class="dropdown col-md-3" style={{ marginTop: "20px" }}>
            <Dropdown onSelect={props.handleCalculatefuelTonnes}>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Tonnes
              </Dropdown.Toggle>
              <Dropdown.Menu>
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

        <button style={{ float: "right" }} class="btn btn-danger btn-md">
          Add another
        </button>
      </div>
    </React.Fragment>
  );
};

export default Calculatefuel;
