import React, { Component } from "react";
import Dropdown from "react-bootstrap/Dropdown";

const MaterialUse = (props) => {
  return (
    <React.Fragment>
      <div className="container" style={{ width: "100%", margin: "0px" }}>
        <br />
        <h1>Material Use</h1>
        <div className="row">
          <div className="col-md-3">
            <br />
            <p style={{ fontSize: "25px" }}>Type of material: </p>
          </div>

          <div class="dropdown col-md-3" style={{ marginTop: "20px" }}>
            <Dropdown onSelect={props.handleMaterialConstruction}>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Construction
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item eventKey="action">Action</Dropdown.Item>
                <Dropdown.Item eventKey="another">Another action</Dropdown.Item>
                <Dropdown.Item eventKey="else">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>

          <div class="dropdown col-md-3" style={{ marginTop: "20px" }}>
            <Dropdown onSelect={props.handleMaterialAggregate}>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Aggregate
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item eventKey="action">Action</Dropdown.Item>
                <Dropdown.Item eventKey="another">Another action</Dropdown.Item>
                <Dropdown.Item eventKey="else">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>

          <div class="dropdown col-md-3" style={{ marginTop: "20px" }}>
            <Dropdown onSelect={props.handlePrimaryMaterialProduction}>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Primary material production
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
            <p style={{ fontSize: "25px" }}>Usage: </p>
          </div>

          <div class="dropdown col-md-2">
            <br />
            <input
              placeholder="Enter usage"
              onChange={(event) =>
                props.handleMaterialUsage(event.target.value)
              }
              style={{ width: "100%", height: "35px" }}
            />
          </div>

          <div class="dropdown col-md-3" style={{ marginTop: "20px" }}>
            <Dropdown onSelect={props.handleMaterialTones}>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Tones
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item eventKey="action">Action</Dropdown.Item>
                <Dropdown.Item eventKey="another">Another action</Dropdown.Item>
                <Dropdown.Item eventKey="else">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div class="dropdown col-md-3" style={{ marginTop: "20px" }}>
            <Dropdown onSelect={props.handleOpenSourceLoop}>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Open-source Loop
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item eventKey="action">Action</Dropdown.Item>
                <Dropdown.Item eventKey="another">Another action</Dropdown.Item>
                <Dropdown.Item eventKey="else">Something else</Dropdown.Item>
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

export default MaterialUse;
