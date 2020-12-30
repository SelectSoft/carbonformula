import React, { Component } from "react";
import Dropdown from "react-bootstrap/Dropdown";

const Electriccar = (props) => {
  return (
    <React.Fragment>
      <div className="container" style={{ width: "100%", margin: "0px" }}>
        <br />
        <h1>Electric Car</h1>
        <div className="row">
          <div className="col-md-3">
            <br />
            <p style={{ fontSize: "25px" }}>Vehical </p>
          </div>

          <div class="dropdown col-md-3" style={{ marginTop: "20px" }}>
            <Dropdown onSelect={props.handleElectricCarVehicl}>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Car
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item eventKey="bike">Notor bike</Dropdown.Item>
                <Dropdown.Item eventKey="taxi">Taxis</Dropdown.Item>
                <Dropdown.Item eventKey="bus">Bus</Dropdown.Item>
                <Dropdown.Item eventKey="rail">Rail</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>

          <div className="col-md-3">
            <br />
            <p style={{ fontSize: "25px" }}>Type </p>
          </div>

          <div class="dropdown col-md-3" style={{ marginTop: "20px" }}>
            <Dropdown onSelect={props.handleElectricCarType}>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Mini
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item eventKey="Supermini">Supermini</Dropdown.Item>
                <Dropdown.Item eventKey="Lower medium">
                  Lower medium
                </Dropdown.Item>
                <Dropdown.Item eventKey="Upper medium">
                  Upper medium
                </Dropdown.Item>
                <Dropdown.Item eventKey="Executive">Executive</Dropdown.Item>
                <Dropdown.Item eventKey="Luxury">Luxury</Dropdown.Item>
                <Dropdown.Item eventKey="Sports">Sports</Dropdown.Item>
                <Dropdown.Item eventKey="Dual purpose 4X4">
                  Dual purpose 4X4
                </Dropdown.Item>
                <Dropdown.Item eventKey="MPV">MPV</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>

        <div className="row">
          <div className="col-md-3">
            <br />
            <p style={{ fontSize: "25px" }}>Distance: </p>
          </div>

          <div class="dropdown col-md-2">
            <br />
            <input
              style={{ width: "100%", height: "35px" }}
              onChange={(event) =>
                props.handleElectricCarDistance(event.target.value)
              }
            />
          </div>

          <div class="dropdown col-md-3" style={{ marginTop: "20px" }}>
            <Dropdown onSelect={props.handleElectricCarKm}>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Km
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item eventKey="miles">Miles</Dropdown.Item>
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

export default Electriccar;
