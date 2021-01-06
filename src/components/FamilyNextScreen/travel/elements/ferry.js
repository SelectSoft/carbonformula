import React, { Component } from "react";
import Dropdown from "react-bootstrap/Dropdown";

const Ferry = (props) => {
  return (
    <React.Fragment>
      <div className="container" style={{ width: "100%", margin: "0px" }}>
        <br />
        <h1>Ferry</h1>
        <div className="row">
          <div className="col-md-3">
            <br />
            <p style={{ fontSize: "25px" }}>Passenger type </p>
          </div>

          <div class="dropdown col-md-3" style={{ marginTop: "20px" }}>
            <Dropdown onSelect={props.handleSeaPassangerType}>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Foot
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item eventKey="car">Car passenger</Dropdown.Item>
                <Dropdown.Item eventKey="average">
                  Average (all passenger)
                </Dropdown.Item>
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
              onChange={(event) => props.handleSeDistance(event.target.value)}
            />
          </div>

          <div class="dropdown col-md-3" style={{ marginTop: "20px" }}>
            <Dropdown onSelect={props.handleSeaKm}>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Km
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item eventKey="km">Km</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>

        {/* <button style={{ float: "right" }} class="btn btn-danger btn-md">
          Add another
        </button> */}
      </div>
    </React.Fragment>
  );
};

export default Ferry;
