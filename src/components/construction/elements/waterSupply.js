import React, { Component } from "react";
import Dropdown from "react-bootstrap/Dropdown";

const WaterSupply = (props) => {
  return (
    <React.Fragment>
      <div className="container" style={{ width: "100%", margin: "0px" }}>
        <br />
        <h1>Water Supply</h1>
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
                props.handleWaterSupplyUsage(event.target.value)
              }
            />
          </div>

          <Dropdown style={{ marginTop: "21px" }} onSelect={props.handleWaterSupplyCubicMeters}>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Cubic meters
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item eventKey="Cubic meters">
                Cubic meters
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        {/* <button style={{ float: "right" }} class="btn btn-danger btn-md">
          Add another
        </button> */}
      </div>
    </React.Fragment >
  );
};

export default WaterSupply;
