import React, { Component, useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import Logo from "../home/logo";
import Font, { Text } from "react-font";
import classes from "../../style/building.module.css";
import App from "./horizontalscrol";
import Electricity from "./elements/electricityUsage";
import OnSite from "./elements/onsite.js";
import Bioenergy from "./elements/bioEnergy";
import MaterialUse from "./elements/materialUse";
import WaterSupply from "./elements/waterSupply";
import WaterDisposal from "./elements/waterDisposal";

const Construction = (props) => {
  const [bionergy, setBioenergy] = useState(false);
  const [electricityusage, setElectricityusage] = useState(true);
  const [materialuse, setMaterialuse] = useState(false);
  const [onsite, setOnsite] = useState(false);
  const [waterdisposal, setWaterdisposal] = useState(false);
  const [watersupply, setWatersupply] = useState(false);

  const handleMenuItems = (link) => {
    if (link === "electricityusage") {
      setBioenergy(false);
      setElectricityusage(true);
      setOnsite(false);
      setMaterialuse(false);
      setWaterdisposal(false);
      setWatersupply(false);
    } else if (link === "onsite") {
      setElectricityusage(false);
      setBioenergy(false);
      setOnsite(true);
      setMaterialuse(false);
      setWaterdisposal(false);
      setWatersupply(false);
    } else if (link === "bio-usage") {
      setElectricityusage(false);
      setBioenergy(true);
      setOnsite(false);
      setMaterialuse(false);
      setWaterdisposal(false);
      setWatersupply(false);
    } else if (link === "material-usage") {
      setElectricityusage(false);
      setBioenergy(false);
      setOnsite(false);
      setMaterialuse(true);

      setWaterdisposal(false);
      setWatersupply(false);
    } else if (link === "waterDisposal") {
      setElectricityusage(false);
      setBioenergy(false);
      setOnsite(false);
      setMaterialuse(false);

      setWaterdisposal(true);
      setWatersupply(false);
    } else if (link === "waterSupply") {
      setElectricityusage(false);
      setBioenergy(false);
      setOnsite(false);
      setMaterialuse(false);

      setWaterdisposal(false);
      setWatersupply(true);
    } else {
      setElectricityusage(false);
      setBioenergy(false);
      setOnsite(false);
      setMaterialuse(false);

      setWaterdisposal(false);
      setWatersupply(false);
      <center>
        <h1>Page Not Found</h1>
      </center>;
    }
  };
  const handleTitle = () => {
    const char = true;
    return char;
  };
  // Handle Electricity usage
  const [usage, setUsage] = useState("")
  const [dropDown, setDropDown] = useState("")
  const [checkBoxValue, setCheckBoxValue] = useState("notchecked")
  const handleDropdown = (eventKey) => {
    setDropDown(eventKey)
  }
  const handleInput = (event) => {
    if (event.target.checked) {
      setCheckBoxValue("checked")
    }
    else {
      setCheckBoxValue("notchecked")
    }
  }
  ////////////////////////////////////////////////////////

  // On Site Fuel Combustion
  const [gaseous, setGaseous] = useState("");
  const [CNG, setCNG] = useState("");
  const [KWH, setKWH] = useState("");
  const [onSiteUsage, setOnSiteUsage] = useState("");
  const [onsiteCheckBoxValue, setOnsiteCheckBoxValue] = useState("");

  const handleGaseous = (eventKey) => {
    setGaseous(eventKey)
  }
  const handleCNG = (eventKey) => {
    setCNG(eventKey)
  }
  const handleKWH = (eventKey) => {
    setKWH(eventKey)
  }
  const handleOnsiteInput = (event) => {
    if (event.target.checked) {
      setOnsiteCheckBoxValue("checked")
    }
    else {
      setOnsiteCheckBoxValue("notchecked")
    }
  }
  /////////////////////////////////////////////////

  // Bio energy usage
  const [biofuel, setBioFusel] = useState("");
  const [bioethanol, setBioethanol] = useState("");
  const [liter, setLiter] = useState("");
  const [bioEnergyUsage, setBioEnergyUsage] = useState("");
  const [bioEnergyCheckBoxValue, setBioEnergyCheckBoxValue] = useState("");

  const handleBiofuel = (eventKey) => {
    setBioFusel(eventKey)
  }
  const handleBiothanol = (eventKey) => {
    setBioethanol(eventKey)
  }
  const handleLiter = (eventKey) => {
    setLiter(eventKey)
  }
  const handleBioEnergyInput = (event) => {
    if (event.target.checked) {
      setBioEnergyCheckBoxValue("checked")
    }
    else {
      setBioEnergyCheckBoxValue("notchecked")
    }
  }
  /////////////////////////////////////////////////

  // FormHandler for all 
  const formHandler = () => {
    if (electricityusage) {
      var data = {
        "usage": usage,
        "checkBoxValue": checkBoxValue,
        "dropDown": dropDown
      }
      console.log(data);
    }
    else if (onsite) {
      var data = {
        "gaseous": gaseous,
        "CNG": CNG,
        "kwh": KWH,
        "onSiteUsage": onSiteUsage,
        "onsiteCheckBoxValue": onsiteCheckBoxValue
      }
      console.log(data);
    }
    else if (bionergy) {
      var data = {
        "biofuel": biofuel,
        "bioethanol": bioethanol,
        "liter": liter,
        "bioEnergyUsage": bioEnergyUsage,
        "bioEnergyCheckBoxValue": bioEnergyCheckBoxValue
      }
      console.log(data);
    }
  }
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
              <Link
                onClick={() =>
                  props.toogleHandler("/organization-back-construction")
                }
              >
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
                <h1>Construction Site</h1>
                <br />
              </center>
            </div>

            <br />

            <div className={classes.div1}>
              <App handleMenuItems={handleMenuItems} />
            </div>
            {electricityusage ? (
              <Electricity
                setUsage={setUsage}
                handleDropdown={handleDropdown}
                checkBoxValue={checkBoxValue}
                handleInput={handleInput} />
            ) : bionergy ? (
              <Bioenergy
                handleBiofuel={handleBiofuel}
                handleBiothanol={handleBiothanol}
                setBioEnergyUsage={setBioEnergyUsage}
                handleLiter={handleLiter}
                bioEnergyCheckBoxValue={bioEnergyCheckBoxValue}
                handleBioEnergyInput={handleBioEnergyInput} />
            ) : materialuse ? (
              <MaterialUse
              />
            ) : onsite ? (
              <OnSite
                handleGaseous={handleGaseous}
                handleCNG={handleCNG}
                setOnSiteUsage={setOnSiteUsage}
                handleKWH={handleKWH}
                onsiteCheckBoxValue={onsiteCheckBoxValue}
                handleOnsiteInput={handleOnsiteInput} />
            ) : waterdisposal ? (
              <WaterDisposal />
            ) : watersupply ? (
              <WaterSupply />
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

export default Construction;