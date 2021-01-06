import React, { Component } from "react";
import Dropdown from "react-bootstrap/Dropdown";

const FreightPage = (props) => {
  return (
    <React.Fragment>
      <div className="container" style={{ width: "100%", margin: "0px" }}>
        <br />
        <h1>Freighting goods</h1>
        <div className="row">
          <div className="col-md-3">
            <br />
            <p style={{ fontSize: "25px" }}>Vahicle type </p>
          </div>

          <div class="dropdown col-md-3" style={{ marginTop: "20px" }}>
            <Dropdown onSelect={props.handleFreightVans}>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                {props.freightVans}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item eventKey="hgv">HGV (all diesel)</Dropdown.Item>
                <Dropdown.Item eventKey="another">
                  HGV refrigerated (all diesel)
                </Dropdown.Item>
                <Dropdown.Item eventKey="freight">
                  Freight flights
                </Dropdown.Item>
                <Dropdown.Item eventKey="Rail">Rail </Dropdown.Item>
                <Dropdown.Item eventKey="Sea tanker">Sea tanker </Dropdown.Item>
                <Dropdown.Item eventKey="Cargo ship">Cargo ship </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>

          <div class="dropdown col-md-3" style={{ marginTop: "20px" }}>
            <Dropdown onSelect={props.handleFreightClass}>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                {props.freightClass}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item eventKey="class2">
                  Class 2(1.305 to 1.74 tonnes)
                </Dropdown.Item>
                <Dropdown.Item eventKey="class3">
                  Class 3(1.74 to 3.5 tonnes)
                </Dropdown.Item>
                <Dropdown.Item eventKey="average">
                  Average(upto 3.5 tonnes)
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div class="dropdown col-md-3" style={{ marginTop: "20px" }}>
            <Dropdown onSelect={props.handleFreightDiesel}>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                {props.freightDiesel}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item eventKey="Petrol">Petrol</Dropdown.Item>
                <Dropdown.Item eventKey="CNG">CNG </Dropdown.Item>
                <Dropdown.Item eventKey="LP"> LP</Dropdown.Item>
                <Dropdown.Item eventKey="Plug-in Hybrid Electric Vehicle">
                  {" "}
                  Plug-in Hybrid Electric Vehicle
                </Dropdown.Item>
                <Dropdown.Item eventKey="Battery Electric Vehicle">
                  {" "}
                  Battery Electric Vehicle
                </Dropdown.Item>
                <Dropdown.Item eventKey="unknown"> unknown</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <br />
            <p style={{ fontSize: "25px" }}>Distance/Weight </p>
          </div>

          <div class="dropdown col-md-2">
            <br />
            <input
              style={{ width: "100%", height: "35px" }}
              onChange={(event) =>
                props.handleFreightDistance(event.target.value)
              }
            />
          </div>

          <div class="dropdown col-md-3" style={{ marginTop: "20px" }}>
            <Dropdown onSelect={props.handleFreightKm}>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                {props.freightKm}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item eventKey="Km">Km</Dropdown.Item>
                <Dropdown.Item eventKey="miles">Miles</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
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
            onClick={props.handleFreightCheck}
          />
        </div>
        {/* <button style={{ float: "right" }} class="btn btn-danger btn-md">
          Add another
        </button> */}
      </div>
    </React.Fragment>
  );
};

export default FreightPage;
