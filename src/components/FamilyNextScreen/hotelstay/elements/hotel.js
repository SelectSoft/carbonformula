import React, { Component } from "react";
import Dropdown from "react-bootstrap/Dropdown";

const Hotel = (props) => {
  return (
    <React.Fragment>
      <div className="container" style={{ width: "100%", margin: "0px" }}>
        <br />
        <h1>Hotel Stay</h1>
        <div className="row">
          <div className="col-md-3">
            <br />
            <p style={{ fontSize: "25px" }}>Country: </p>
          </div>

          <div class="dropdown col-md-3" style={{ marginTop: "20px" }}>
            <Dropdown onSelect={props.handleHoteStayCountry}>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                UK
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item eventKey="action">Action</Dropdown.Item>
                <Dropdown.Item eventKey="another">Another action</Dropdown.Item>
                <Dropdown.Item eventKey="else">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <br />
            <p style={{ fontSize: "25px" }}>No of Nights: </p>
          </div>

          <div class="dropdown col-md-2">
            <br />
            <input
              style={{ width: "100%", height: "35px" }}
              onChange={(event) =>
                props.handleHoteStayNoOfNights(event.target.value)
              }
            />
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
            style={{ width: "30px", height: "30px" }}
            onClick={props.handleHoteStayCheck}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Hotel;
