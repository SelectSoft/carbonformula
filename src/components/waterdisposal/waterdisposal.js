import React, { Component } from "react";
import Dropdown from "react-bootstrap/Dropdown";

import classes from "../../style/fuel.module.css";
const WaterDisposal = (props) => {
  return (
    <React.Fragment>
      <div className="container" style={{ width: "100%", margin: "0px" }}>
        <br />
        <h1>Water Disposal</h1>
        <div className="row">
          <div className="col-md-3">
            <br />
            <p style={{ fontSize: "25px" }}>Type of waste: </p>
          </div>

          <div class="dropdown col-md-3" style={{ marginTop: "20px" }}>
            <Dropdown onSelect={props.handleWaterDisposalConstruction}>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Construction
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item eventKey="refuse">Refuse</Dropdown.Item>
                <Dropdown.Item eventKey="electrical">
                  Electrical item{" "}
                </Dropdown.Item>
                <Dropdown.Item eventKey="metal">Metal</Dropdown.Item>
                <Dropdown.Item eventKey="other">Other</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>

          <div class="dropdown col-md-3" style={{ marginTop: "20px" }}>
            <Dropdown onSelect={props.handleWaterDisposalAggregate}>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Aggregates
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item eventKey="Asbestos">Asbestos</Dropdown.Item>
                <Dropdown.Item eventKey="asphalt">Asphalt</Dropdown.Item>
                <Dropdown.Item eventKey="bricks">Bricks</Dropdown.Item>
                <Dropdown.Item eventKey="concrete">Concrete</Dropdown.Item>
                <Dropdown.Item eventKey="insulation">Insulation</Dropdown.Item>
                <Dropdown.Item eventKey="metals">Metals</Dropdown.Item>
                <Dropdown.Item eventKey="soils">Soils</Dropdown.Item>
                <Dropdown.Item eventKey="mineral oil">
                  Mineral oil
                </Dropdown.Item>
                <Dropdown.Item eventKey="plasterboard">
                  Plasterboard
                </Dropdown.Item>
                <Dropdown.Item eventKey="tyres">Tyres</Dropdown.Item>
                <Dropdown.Item eventKey="wood">Woods</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>

          <div class="dropdown col-md-3" style={{ marginTop: "20px" }}>
            <Dropdown onSelect={props.handleWaterDisposalReUse}>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Re-use
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item eventKey="reuse">Re-use</Dropdown.Item>
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
              style={{ width: "100%", height: "35px" }}
              onChange={(event) =>
                props.handleWaterDisposalUsage(event.target.value)
              }
            />
          </div>

          <div class="dropdown col-md-3" style={{ marginTop: "20px" }}>
            <Dropdown onSelect={props.handleWaterDisposalTonnes}>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Tonnes
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item eventKey="tonnes">Tonnes</Dropdown.Item>
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

export default WaterDisposal;
