import React, { Component, useState } from "react";
import classes from "../../style/building.module.css";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import Logo from "../home/logo";
import Font, { Text } from "react-font";
import ViewEmissions from "../viewEmissions/viewemissions";

const Title = (props) => {

  return (
    <React.Fragment>
      <div className={["container", classes.mainBody].join(" ")}>
        <Font family="Georgia">
          <div
            className={["row", classes.innerDiv].join(" ")}
            style={{ textAlign: "left", width: "100%" }}
          >
            <button
              className="col-md-1"
              style={{ backgroundColor: "#85B91C", border: "none" }}
            >
              <Link onClick={() => props.toogleHandler(props.back)}>
                <AiOutlineArrowLeft
                  style={{ width: "50px", height: "50px", color: "white" }}
                />
              </Link>
            </button>
            <p
              style={{ fontSize: "30px", marginLeft: "5px", marginTop: "12px" }}
            >
              Previous Page
            </p>
            <div className="col-md-12">
              <center>
                <Logo />
                <br />
                <h1>Your calculations so far</h1>
                <br />
                <Link
                  onClick={() => props.toogleHandler("/calculate-emissions")}
                >
                  <button
                    className="btn btn-success btn-lg"
                    style={{ backgroundColor: "#85B91C", color: "white" }}
                  >
                    Calculate total emissions
                  </button>
                </Link>
              </center>
              <br />
            </div>
            <ViewEmissions endpoint={props.endpoint} />
            {/* // handleBoElectricityUsage={handleBoElectricityUsage}
            // handleBoFuelUsage={handleBoFuelUsage}
            // handleBoBioEnergyUsage={handleBoBioEnergyUsage}
            // handleBoRefrigerantUsage={handleBoRefrigerantUsage}
            // handleBoHeatAndSteam={handleBoHeatAndSteam}
            // handleBoMaterialUse={handleBoMaterialUse}
            // handleBoWaterSupply={handleBoWaterSupply}
            // handleBoWaterTreatment={handleBoWaterTreatment}
            // handleBoWaterDisposal={handleBoWaterDisposal}
            // handleCsElectricityUsage={handleCsElectricityUsage}
            // handleCsFuelUsage={handleCsFuelUsage}
            // handleCsBioEnergyUsage={handleCsBioEnergyUsage}
            // handleCsMaterialUse={handleCsMaterialUse}
            // handleCsWaterSupply={handleCsWaterSupply}
            // handleCsWaterDisposal={handleCsWaterDisposal} */}
            <br />
            <div className="container" style={{ width: "100%" }}>
              <center>
                <button
                  className="btn btn-success btn-lg"
                  style={{
                    marginLeft: "3px",
                    backgroundColor: "#85B91C",
                    color: "white",
                  }}
                >
                  Add to total emissions
                </button>
                <br />
                <br />
                <button className="btn btn-danger btn-md">Clear</button>
              </center>
            </div>
            <br />
            <br />
            <div className={[classes.div2, "footer"].join(" ")}>
              <center>
                <a style={{ fontSize: "20px", marginTop: "5px" }}>
                  All activities
                </a>
                <Link onClick={() => props.toogleHandler("/view-emissions")}>
                  <button
                    className="btn btn-success btn-lg"
                    style={{
                      marginLeft: "3px",
                      backgroundColor: "#85B91C",
                      color: "white",
                    }}
                  >
                    View my emissions
                  </button>
                </Link>
                <a
                  style={{
                    fontSize: "20px",
                    marginTop: "5px",
                    marginLeft: "10px",
                  }}
                >
                  Next Tab
                </a>
              </center>
            </div>
          </div>
        </Font>
      </div>
    </React.Fragment>
  );
};

export default Title;
