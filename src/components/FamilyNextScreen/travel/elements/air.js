import React, { Component } from "react";
import Dropdown from "react-bootstrap/Dropdown";

const Air = (props) => {
  return (
    <React.Fragment>
      <div className="container" style={{ width: "100%", margin: "0px" }}>
        <br />
        <h1>Business Travel air</h1>
        <div className="row">
          <div className="col-md-3">
            <br />
            <p style={{ fontSize: "25px" }}>Departure airport </p>
          </div>
          <div className="dropdown col-md-3" style={{ width: "100%" }}>
            <Dropdown onSelect={props.handleAirPlaneTravelDepartureAirport}>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Departure airport
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item eventKey="Departureairport">
                  Departure airport
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>{" "}
            {/* <br />
            <button
              className="btn dropdown-toggle"
              type="button"
              data-toggle="dropdown"
              style={{ border: "1px solid black" }}
            ></button>
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
            </ul> */}
          </div>
          <div className="col-md-3">
            <br />
            <p style={{ fontSize: "25px" }}>Via: </p>
          </div>
          <Dropdown onSelect={props.handleAirPlaneTravelVia}>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Optional
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item eventKey="optional">Optional</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>{" "}
          {/* <div className="dropdown col-md-3" style={{ width: "100%" }}>
            <br />
            <button
              style={{ marginLeft: "2px" }}
              className="btn dropdown-toggle"
              type="button"
              data-toggle="dropdown"
              style={{ border: "1px solid black" }}
            ></button>
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
            <p style={{ fontSize: "25px" }}>Arival airport </p>
          </div>

          <div className="dropdown col-md-3" style={{ width: "100%" }}>
            <Dropdown onSelect={props.handleAirPlaneTravelArivalAirport}>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Arival airport
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item eventKey="arival">Arival airport</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            {/* <br />
            <button
              className="btn dropdown-toggle"
              type="button"
              data-toggle="dropdown"
              style={{ border: "1px solid black" }}
            ></button>
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
            </ul> */}
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <br />
            <p style={{ fontSize: "25px" }}>Class: </p>
          </div>
          <div class="dropdown col-md-3" style={{ marginTop: "20px" }}>
            <Dropdown onSelect={props.handleAirPlaneTravelClass}>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Economy
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item eventKey="Economy">Economy</Dropdown.Item>
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
              Economy
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
            <p style={{ fontSize: "25px" }}>Passenger: </p>
          </div>
          <div class="dropdown col-md-3" style={{ marginTop: "20px" }}>
            <Dropdown onSelect={props.handleAirPlaneTravelPassenger}>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Passenger
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item eventKey="passenger">Passenger</Dropdown.Item>
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
            ></button>
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
          <div class="col-md-2" style={{ padding: "0px" }}>
            <br />
            <p style={{ fontSize: "30px" }}>Return</p>
          </div>
          <div class="col-md-1" style={{ padding: "0px" }}>
            <br />
            <input
              type="checkbox"
              style={{ width: "30px", height: "30px" }}
              onClick={props.handleAirPlaneTravelReturn}
            />
          </div>
          <div class="col-md-2" style={{ padding: "0px" }}>
            <br />
            <p style={{ fontSize: "30px" }}>Single</p>
          </div>
          <div class="col-md-1" style={{ padding: "0px" }}>
            <br />
            <input
              type="checkbox"
              style={{ width: "30px", height: "30px" }}
              onClick={props.handleAirPlaneTravelSingle}
            />
          </div>
        </div>

        <button style={{ float: "right" }} class="btn btn-danger btn-md">
          Add another
        </button>
      </div>
    </React.Fragment>
  );
};

export default Air;
