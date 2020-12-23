import React, { Component } from "react";
import Dropdown from "react-bootstrap/Dropdown";

import classes from "../../style/fuel.module.css";
const Refrigrant = (props) => {
  return (
    <React.Fragment>
      <div className="container" style={{ width: "100%", margin: "0px" }}>
        <br />
        <h1>Refrigrant Usage</h1>
        <div className="row">
          <div className="col-md-3">
            <br />
            <p style={{ fontSize: "25px" }}>Type of refrigrant: </p>
          </div>

          <div class="dropdown col-md-3" style={{ marginTop: "20px" }}>
            <Dropdown onSelect={props.handleRefrigrantKyotoProtocolStandard}>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Kyoto Protocol Standard
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item eventKey="action">Action</Dropdown.Item>
                <Dropdown.Item eventKey="another">Another action</Dropdown.Item>
                <Dropdown.Item eventKey="else">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>

          <div class="dropdown col-md-3" style={{ marginTop: "20px" }}>
            <Dropdown onSelect={props.handleRefrigrantCO2}>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                CO2
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
              style={{ width: "100%", height: "35px" }}
              onChange={(event) =>
                props.handleRefrigrantUsage(event.target.value)
              }
            />
          </div>

          <div class="dropdown col-md-3" style={{ marginTop: "20px" }}>
            <Dropdown onSelect={props.handleRefrigrantKg}>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Kg
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item eventKey="action">Action</Dropdown.Item>
                <Dropdown.Item eventKey="another">Another action</Dropdown.Item>
                <Dropdown.Item eventKey="else">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>

          {/* <div className="col-md-3">
                            <br/>
                                <p style={{fontSize: '25px'}}>Carbon Emitting: </p> 
                            </div>

                            <div className="col-md-3">
                            <br/>
                                <input style={{width: '100%', height: '35px'}}/> 
                            </div>

                            <div class="dropdown col-md-3">
                            <br/>
                            <p style={{fontSize: '20px'}}>Tones</p>
                                </div>   */}
        </div>

        <button style={{ float: "right" }} class="btn btn-danger btn-md">
          Add another
        </button>
      </div>
    </React.Fragment>
  );
};

export default Refrigrant;
