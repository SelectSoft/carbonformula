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
                {props.electricCarVehicl}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item eventKey="vans">Van</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          {/* <div className="dropdown col-md-3" style={{ width: "100%" }}>
            <br />
            <button
              className="btn dropdown-toggle"
              type="button"
              data-toggle="dropdown"
              style={{ border: "1px solid black" }}
            >
              Car
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
          </div> */}

          <div className="col-md-3">
            <br />
            <p style={{ fontSize: "25px" }}>Type </p>
          </div>
          <div class="dropdown col-md-3" style={{ marginTop: "20px" }}>
            <Dropdown onSelect={props.handleElectricCarType}>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                {props.electricCarType}
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
          {/* <div className="dropdown col-md-3" style={{ width: "100%" }}>
            <br />
            <button
              style={{ marginLeft: "2px" }}
              className="btn dropdown-toggle"
              type="button"
              data-toggle="dropdown"
              style={{ border: "1px solid black" }}
            >
              Mini
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
          </div> */}
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
              value={props.electricCarDistance}
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
          {/* <div class="dropdown col-md-7" style={{ width: "100%" }}>
            <br />
            <button
              class="btn dropdown-toggle"
              type="button"
              data-toggle="dropdown"
              style={{ border: "1px solid black" }}
            >
              Km
            </button>
            <ul class="dropdown-menu">
              <li>
                <a>HTML</a>
              </li>
              <li>
                <a>CSS</a>
              </li>
              <li>
                <a>JavaScript</a>
              </li>
            </ul>
          </div> */}
        </div>

        {/* <button style={{ float: "right" }} class="btn btn-danger btn-md">
          Add another
        </button> */}
      </div>
    </React.Fragment>
  );
};

export default Electriccar;
