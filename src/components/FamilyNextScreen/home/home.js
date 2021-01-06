import React, { Component, useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import Logo from "../../home/logo";
import Font, { Text } from "react-font";
import classes from "../../../style/building.module.css";
import App from "./horizontalscrol";
import Electricityusage from "./elements/electricityusage";
import Fuelusage from "./elements/fuelusage";
import Bioenergy from "./elements/bioenergy";
import Watersupply from "./elements/watersupply";

const Home = (props) => {
  const [electricityusage, setElectricityusage] = useState(false);
  const [fuelusage, setFuelusage] = useState(true);
  const [bioenergy, setBioenergy] = useState(false);
  const [watersupply, setWatersupply] = useState(false);
  const [title, setTitle] = useState(false);
  const [titlee, setTitlee] = useState(false);

  const handleMenuItems = (link) => {
    console.log(link);
    if (link === "fuelusage") {
      setElectricityusage(false);
      setFuelusage(true);
      setWatersupply(false);
      setBioenergy(false);
    } else if (link === "watersupply") {
      setFuelusage(false);
      setElectricityusage(false);
      setWatersupply(true);
      setBioenergy(false);
    } else if (link === "electricityusage") {
      setFuelusage(false);
      setElectricityusage(true);
      setWatersupply(false);
      setBioenergy(false);
    } else if (link === "bioenergy") {
      setFuelusage(false);
      setElectricityusage(false);
      setWatersupply(false);
      setBioenergy(true);
    } else {
      setFuelusage(false);
      setElectricityusage(false);
      setWatersupply(false);
      setBioenergy(false);

      <center>
        <h1>Page Not Found</h1>
      </center>;
    }
  };
  const handleTitle = () => {
    const char = true;
    return char;
  };
  //Handle Business opertunities electricity usage

  const [electricityUsage, setElectricityUsage] = useState("");
  const [electricityKWH, setElectricityKWH] = useState("");
  const [electricityUsageCheckBox, setElectricityUsageCheckBox] = useState(
    "notchecked"
  );

  const handleElectricityUsage = (eventKey) => {
    setElectricityUsage(eventKey);
  };
  const handleElectricityKWH = (eventKey) => {
    setElectricityKWH(eventKey);
  };

  //////////////////////
  //Handle Business opertunities Fuel usage

  const [electricityGaseous, setElectricityGaseous] = useState("CNG");
  const [electricityCNG, setElectricityCNG] = useState("");
  const [electricityFuelUsage, setElectricityFuelUsage] = useState("");
  const [electricityFuelUsageKWH, setElectricityFuelUsageKWH] = useState("");
  const [electricityFuelUsageCheck, setElectricityFuelUsageCheck] = useState(
    "notchecked"
  );

  const handleElectricityGaseous = (eventKey) => {
    setElectricityGaseous(eventKey);
  };
  const handleElectricityCNG = (eventKey) => {
    setElectricityCNG(eventKey);
  };
  const handleElectricityFuelUsage = (eventKey) => {
    setElectricityFuelUsage(eventKey);
  };
  const handleElectricityFuelUsageKWH = (eventKey) => {
    setElectricityFuelUsageKWH(eventKey);
  };

  //////////////////////
  //Handle Business opertunities Bio-energy usage

  const [bioEnergyBioFuel, setBioEnergyBioFuel] = useState("Bioethanol");
  const [bioEnergyBioethanol, setBioEnergyBioethanol] = useState("litres");
  const [bioEnergyFuelUsage, setBioEnergyFuelUsage] = useState("");
  const [bioEnergyLiter, setBioEnergyLiter] = useState("GJ");
  const [bioEnergyCheck, setBioEnergyCheck] = useState("notchecked");

  const handleBioEnergyBioFuel = (eventKey) => {
    setBioEnergyBioFuel(eventKey);
  };
  const handleBioEnergyBioethanol = (eventKey) => {
    setBioEnergyBioethanol(eventKey);
  };
  const handleBioEnergyFuelUsage = (eventKey) => {
    setBioEnergyFuelUsage(eventKey);
  };
  const handleBioEnergyLiter = (eventKey) => {
    setBioEnergyLiter(eventKey);
  };

  ///// handle water supply

  const [waterSupplyUsage, setWaterSupplyUsage] = useState("");
  const [waterSupplyCubicMeters, setWaterSupplyCubicMeters] = useState("");

  const handleWaterSupplyUsage = (eventKey) => {
    setWaterSupplyUsage(eventKey);
  };

  const handleWaterSupplyCubicMeters = (eventKey) => {
    setWaterSupplyCubicMeters(eventKey);
  };
  /////////////////////////
  const formHandler = () => {
    if (electricityusage) {
      var data = {
        electricityUsage: electricityUsage,
        electricityKWH: electricityKWH,
      };
      props.jsonObjOfCalculator(data);
      console.log(data);
    } else if (fuelusage) {
      var data = {
        electricityGaseous: electricityGaseous,
        electricityCNG: electricityCNG,
        electricityFuelUsage: electricityFuelUsage,
        electricityFuelUsageKWH: electricityFuelUsageKWH,
      };
      props.jsonObjOfCalculator(data);
      console.log(data);
    } else if (bioenergy) {
      var data = {
        bioEnergyBioFuel: bioEnergyBioFuel,
        bioEnergyBioethanol: bioEnergyBioethanol,
        bioEnergyFuelUsage: bioEnergyFuelUsage,
        bioEnergyLiter: bioEnergyLiter,
      };
      props.jsonObjOfCalculator(data);
      console.log(data);
    } else if (watersupply) {
      var data = {
        waterSupplyUsage: waterSupplyUsage,
        waterSupplyCubicMeters: waterSupplyCubicMeters,
      };
      props.jsonObjOfCalculator(data);
      console.log(data);
    }
  };
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
              <Link onClick={() => props.toogleHandler("/family-back-home")}>
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
                <h1>Events & Hotel Stay</h1>
                <br />
              </center>
            </div>

            <br />

            <div className={classes.div1}>
              <App handleMenuItems={handleMenuItems} />
            </div>
            {electricityusage ? (
              <Electricityusage
                handleElectricityKWH={handleElectricityKWH}
                handleElectricityUsage={handleElectricityUsage}
              />
            ) : fuelusage ? (
              <Fuelusage
                handleElectricityGaseous={handleElectricityGaseous}
                electricityGaseous={electricityGaseous}
                handleElectricityCNG={handleElectricityCNG}
                electricityCNG={electricityCNG}
                handleElectricityFuelUsage={handleElectricityFuelUsage}
                handleElectricityFuelUsageKWH={handleElectricityFuelUsageKWH}
              />
            ) : bioenergy ? (
              <Bioenergy
                handleBioEnergyBioFuel={handleBioEnergyBioFuel}
                bioEnergyBioFuel={bioEnergyBioFuel}
                bioEnergyBioethanol={bioEnergyBioethanol}
                handleBioEnergyBioethanol={handleBioEnergyBioethanol}
                handleBioEnergyFuelUsage={handleBioEnergyFuelUsage}
                bioEnergyLiter={bioEnergyLiter}
                handleBioEnergyLiter={handleBioEnergyLiter}
              />
            ) : watersupply ? (
              <Watersupply
                handleWaterSupplyUsage={handleWaterSupplyUsage}
                handleWaterSupplyCubicMeters={handleWaterSupplyCubicMeters}
              />
            ) : null}
            <div className="container" style={{ width: "100%" }}>
              <center>
                <button
                  className="btn btn-success btn-lg"
                  style={{ backgroundColor: "#85B91C", color: "white" }}
                  onClick={formHandler}
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

export default Home;
