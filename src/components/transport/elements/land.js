import React, { Component } from "react";
import Dropdown from "react-bootstrap/Dropdown";

const land = (props) => {
  return (
    <React.Fragment>
      <div className="container" style={{ width: "100%", margin: "0px" }}>
        <br />
        <h1>Business travel land</h1>
        <div className="row">
          <div className="col-md-3">
            <br />
            <p style={{ fontSize: "25px" }}>Vehical </p>
          </div>

          <div className="dropdown col-md-3" style={{ marginTop: "20px" }}>
            <Dropdown onSelect={props.handleCarTravelVehicl}>
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
            {/* <br /> */}
            {/* <button
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
            </ul> */}
          </div>

          <div className="col-md-3">
            <br />
            <p style={{ fontSize: "25px" }}>Type </p>
          </div>

          <div className="dropdown col-md-3" style={{ width: "100%" }}>
            <Dropdown onSelect={props.handleCarTravelType}>
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
            {/* <br />
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
            </ul> */}
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
                props.handleCarTravelDistance(event.target.value)
              }
            />
          </div>

          <div class="dropdown col-md-7" style={{ marginTop: "20px" }}>
            <Dropdown onSelect={props.handleCarTravelKm}>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Km
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item eventKey="miles">Miles</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            {/* <br />
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

        <button style={{ float: "right" }} class="btn btn-danger btn-md">
          Add another
        </button>
      </div>
    </React.Fragment>
  );
};

export default land;
