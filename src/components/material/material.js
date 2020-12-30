import React, { Component } from "react";
import Dropdown from "react-bootstrap/Dropdown";

import classes from "../../style/fuel.module.css";
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
            <Dropdown onSelect={props.handleMaterialUseConstruction}>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Construction
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item eventKey="Organic">Organic</Dropdown.Item>
                <Dropdown.Item eventKey="Electrial Item">
                  Electrial Item
                </Dropdown.Item>
                <Dropdown.Item eventKey="metal">Metal</Dropdown.Item>
                <Dropdown.Item eventKey="plastic">Plastic</Dropdown.Item>
                <Dropdown.Item eventKey="paper">Paper</Dropdown.Item>
                <Dropdown.Item eventKey="other">Other</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>

          <div class="dropdown col-md-3" style={{ marginTop: "20px" }}>
            <Dropdown onSelect={props.handleMaterialUseAggregate}>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Aggregates
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item eventKey="Average construction">
                  Average construction
                </Dropdown.Item>
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
            <Dropdown
              onSelect={props.handleMaterialUsePrimaryMaterialProduction}
            >
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Primary material production
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item eventKey="Primary material production">
                  Primary material production
                </Dropdown.Item>
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
                props.handleMaterialUseUsage(event.target.value)
              }
            />
          </div>

          <div class="dropdown col-md-3" style={{ marginTop: "20px" }}>
            <Dropdown onSelect={props.handleMaterialUseTones}>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Tonnes
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item eventKey="Tonnes">Tonnes</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        <div class="dropdown col-md-3" style={{ marginTop: "20px" }}>
          <Dropdown onSelect={props.handleMaterialUseOpenSourceLoop}>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Open-source Loop
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item eventKey="Open-source Loop">
                Open-source Loop
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>

      <button style={{ float: "right" }} class="btn btn-danger btn-md">
        Add another
      </button>
    </React.Fragment>
  );
};

export default MaterialUse;
