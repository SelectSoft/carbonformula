import React, { Component, useState } from "react";
import classes from "../../style/building.module.css";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import Logo from "../home/logo";
import Font, { Text } from "react-font";
import ViewEmissions from "../viewEmissions/viewemissions";
const Title = (props) => {
  // const [boElectricityUsage, setBoElectricityUsage] = useState("uncheck");
  // const [boFuelUsage, setBoFuelUsage] = useState("uncheck");
  // const [boBioEnergyUsage, setBoBioEnergyUsage] = useState("uncheck");
  // const [boRefrigerantUsage, setBoRefrigerantUsage] = useState("uncheck");
  // const [boHeatAndSteam, setBoHeatAndSteam] = useState("uncheck");
  // const [boMaterialUse, setBoMaterialUse] = useState("uncheck");
  // const [boWaterSupply, setBoWaterSupply] = useState("uncheck");
  // const [boWaterTreatment, setBoWaterTreatment] = useState("uncheck");
  // const [boWaterDisposal, setBoWaterDisposal] = useState("uncheck");

  // const [csElectricityUsage, setCsElectricityUsage] = useState("uncheck");
  // const [csFuelUsage, setCsFuelUsage] = useState("uncheck");
  // const [csBioEnergyUsage, setCsBioEnergyUsage] = useState("uncheck");
  // const [csMaterialUse, setCsMaterialUse] = useState("uncheck");
  // const [csWaterSupply, setCsWaterSupply] = useState("uncheck");
  // const [csWaterDisposal, setCsWaterDisposal] = useState("uncheck");

  // const handleBoElectricityUsage = (event) => {
  //   if (event.target.checked) {
  //     setBoElectricityUsage("checked");
  //   } else {
  //     setBoElectricityUsage("notchecked");
  //   }
  // };
  // const handleBoFuelUsage = (event) => {
  //   if (event.target.checked) {
  //     setBoFuelUsage("checked");
  //   } else {
  //     setBoFuelUsage("notchecked");
  //   }
  // };
  // const handleBoBioEnergyUsage = (event) => {
  //   if (event.target.checked) {
  //     setBoBioEnergyUsage("checked");
  //   } else {
  //     setBoBioEnergyUsage("notchecked");
  //   }
  // };
  // const handleBoRefrigerantUsage = (event) => {
  //   if (event.target.checked) {
  //     setBoRefrigerantUsage("checked");
  //   } else {
  //     setBoRefrigerantUsage("notchecked");
  //   }
  // };

  // const handleBoHeatAndSteam = (event) => {
  //   if (event.target.checked) {
  //     setBoHeatAndSteam("checked");
  //   } else {
  //     setBoHeatAndSteam("notchecked");
  //   }
  // };

  // const handleBoMaterialUse = (event) => {
  //   if (event.target.checked) {
  //     setBoMaterialUse("checked");
  //   } else {
  //     setBoMaterialUse("notchecked");
  //   }
  // };
  // const handleBoWaterSupply = (event) => {
  //   if (event.target.checked) {
  //     setBoWaterSupply("checked");
  //   } else {
  //     setBoWaterSupply("notchecked");
  //   }
  // };

  // const handleBoWaterTreatment = (event) => {
  //   if (event.target.checked) {
  //     setBoWaterTreatment("checked");
  //   } else {
  //     setBoWaterTreatment("notchecked");
  //   }
  // };
  // const handleBoWaterDisposal = (event) => {
  //   if (event.target.checked) {
  //     setBoWaterDisposal("checked");
  //   } else {
  //     setBoWaterDisposal("notchecked");
  //   }
  // };
  // const handleCsElectricityUsage = (event) => {
  //   if (event.target.checked) {
  //     setCsElectricityUsage("checked");
  //   } else {
  //     setCsElectricityUsage("notchecked");
  //   }
  // };
  // const handleCsFuelUsage = (event) => {
  //   if (event.target.checked) {
  //     setCsFuelUsage("checked");
  //   } else {
  //     setCsFuelUsage("notchecked");
  //   }
  // };
  // const handleCsBioEnergyUsage = (event) => {
  //   if (event.target.checked) {
  //     setCsBioEnergyUsage("checked");
  //   } else {
  //     setCsBioEnergyUsage("notchecked");
  //   }
  // };
  // const handleCsMaterialUse = (event) => {
  //   if (event.target.checked) {
  //     setCsMaterialUse("checked");
  //   } else {
  //     setCsMaterialUse("notchecked");
  //   }
  // };
  // const handleCsWaterSupply = (event) => {
  //   if (event.target.checked) {
  //     setCsWaterSupply("checked");
  //   } else {
  //     setCsWaterSupply("notchecked");
  //   }
  // };
  // const handleCsWaterDisposal = (event) => {
  //   if (event.target.checked) {
  //     setCsWaterDisposal("checked");
  //   } else {
  //     setCsWaterDisposal("notchecked");
  //   }
  // };

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
            <ViewEmissions />
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
