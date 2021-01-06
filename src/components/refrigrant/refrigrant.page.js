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
                <Dropdown.Item eventKey="Kyoto Protocol Standard">
                  Kyoto Protocol Standard
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>

          <div class="dropdown col-md-3" style={{ marginTop: "20px" }}>
            <Dropdown onSelect={props.handleRefrigrantCO2}>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                {props.refrigrantCO2}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item eventKey="Methane">Methane</Dropdown.Item>
                <Dropdown.Item eventKey="Nitrous oxide">
                  Nitrous oxide
                </Dropdown.Item>
                <Dropdown.Item eventKey="HFC-23">HFC-23</Dropdown.Item>
                <Dropdown.Item eventKey="HFC-32">HFC-32</Dropdown.Item>
                <Dropdown.Item eventKey="HFC-41">HFC-41</Dropdown.Item>
                <Dropdown.Item eventKey="HFC-125">HFC-125</Dropdown.Item>
                <Dropdown.Item eventKey="HFC-134">HFC-134</Dropdown.Item>
                <Dropdown.Item eventKey="HFC-134a">HFC-134a</Dropdown.Item>
                <Dropdown.Item eventKey="HFC-143">HFC-143</Dropdown.Item>
                <Dropdown.Item eventKey="HFC-143a">HFC-143a</Dropdown.Item>
                <Dropdown.Item eventKey="HFC-152">HFC-152</Dropdown.Item>
                <Dropdown.Item eventKey="HFC-152a">HFC-152a</Dropdown.Item>
                <Dropdown.Item eventKey="HFC-227ea">HFC-227ea</Dropdown.Item>
                <Dropdown.Item eventKey="HFC-236fa">HFC-236fa</Dropdown.Item>
                <Dropdown.Item eventKey="HFC-245fa">HFC-245fa</Dropdown.Item>
                <Dropdown.Item eventKey="HFC-43-10mee">
                  HFC-43-10mee
                </Dropdown.Item>
                <Dropdown.Item eventKey="Perfluoromethane (PFC-14)">
                  Perfluoromethane (PFC-14){" "}
                </Dropdown.Item>
                <Dropdown.Item eventKey="Perfluoromethane (PFC-116)">
                  Perfluoromethane (PFC-116){" "}
                </Dropdown.Item>
                <Dropdown.Item eventKey="Perfluoromethane (PFC-218)">
                  Perfluoromethane (PFC-218){" "}
                </Dropdown.Item>
                <Dropdown.Item eventKey="Perfluoromethane (PFC-318)">
                  Perfluoromethane (PFC-318){" "}
                </Dropdown.Item>
                <Dropdown.Item eventKey="Perfluoromethane (PFC-3-1-10)">
                  Perfluoromethane (PFC-3-1-10){" "}
                </Dropdown.Item>
                <Dropdown.Item eventKey="Perfluoromethane (PFC-4-1-12)">
                  Perfluoromethane (PFC-4-1-12){" "}
                </Dropdown.Item>
                <Dropdown.Item eventKey="Perfluoromethane (PFC-5-1-14)">
                  Perfluoromethane (PFC-5-1-14){" "}
                </Dropdown.Item>
                <Dropdown.Item eventKey="Sulphur hexafluoride (SF6)">
                  {" "}
                  Sulphur hexafluoride (SF6)
                </Dropdown.Item>
                <Dropdown.Item eventKey="HFC-152">HFC-152</Dropdown.Item>
                <Dropdown.Item eventKey="HFC-161">HFC-161</Dropdown.Item>
                <Dropdown.Item eventKey="HFC-236cb">HFC-236cb</Dropdown.Item>
                <Dropdown.Item eventKey="HFC-236ea">HFC-236ea</Dropdown.Item>
                <Dropdown.Item eventKey="HFC-245ca">HFC-245ca</Dropdown.Item>
                <Dropdown.Item eventKey="HFC-365mfc">HFC-365mfc</Dropdown.Item>
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
                <Dropdown.Item eventKey="action">Kg</Dropdown.Item>
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

        {/* <button style={{ float: "right" }} class="btn btn-danger btn-md">
          Add another
        </button> */}
      </div>
    </React.Fragment>
  );
};

export default Refrigrant;
