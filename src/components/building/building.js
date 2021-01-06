import React, { Component, useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import Logo from "../home/logo";
import Font, { Text } from "react-font";
import classes from "../../style/building.module.css";
import App from "../horizontally_scrolable/horizontalscrol";
import Electricity from "../electricityusage/electricityusage";
import Fuel from "../fuelusage/fuelusage.page";
import Bioenergy from "../bioenergyusage/bioenergy";
import MaterialUse from "../material/material";
import Refrigrant from "../refrigrant/refrigrant.page";
import HeatnSteam from "../heatnsteam/heatnsteam";
import WaterSupply from "../watersupply/watersupplyy";
import WaterDisposal from "../waterdisposal/waterdisposal";
import WaterTreatment from "../watertreatment/watertreatment";
import ViewEmissions from "../viewEmissions/viewemissions";

const Building = (props) => {
  const [electricity, setElectricity] = useState(true);
  const [fuel, setFuel] = useState(false);
  const [bioenergy, setBioenergy] = useState(false);
  const [material, setMaterial] = useState(false);
  const [heatnsteam, setHeatnsteam] = useState(false);
  const [refrigrant, setRefrigrant] = useState(false);
  const [waterdisposal, setWaterdisposal] = useState(false);
  const [watersupply, setWatersupply] = useState(false);
  const [watertreatment, setWatertreatment] = useState(false);
  const [title, setTitle] = useState(false);
  const [titlee, setTitlee] = useState(false);

  const handleMenuItems = (link) => {
    console.log(link);
    if (link === "building") {
      setElectricity(true);
      setBioenergy(false);
      setFuel(false);
      setMaterial(false);
      setHeatnsteam(false);
      setRefrigrant(false);
      setWaterdisposal(false);
      setWatersupply(false);
      setWatertreatment(false);
    } else if (link === "fuel-usage") {
      setElectricity(false);
      setBioenergy(false);
      setFuel(true);
      setMaterial(false);
      setHeatnsteam(false);
      setRefrigrant(false);
      setWaterdisposal(false);
      setWatersupply(false);
      setWatertreatment(false);
    } else if (link === "bio-usage") {
      setElectricity(false);
      setBioenergy(true);
      setFuel(false);
      setMaterial(false);
      setHeatnsteam(false);
      setRefrigrant(false);
      setWaterdisposal(false);
      setWatersupply(false);
      setWatertreatment(false);
    } else if (link === "reFrigrant-usage") {
      setElectricity(false);
      setBioenergy(false);
      setFuel(false);
      setMaterial(false);
      setHeatnsteam(false);
      setRefrigrant(true);
      setWaterdisposal(false);
      setWatersupply(false);
      setWatertreatment(false);
    } else if (link === "heatnSteam-usage") {
      setElectricity(false);
      setBioenergy(false);
      setFuel(false);
      setMaterial(false);
      setHeatnsteam(true);
      setRefrigrant(false);
      setWaterdisposal(false);
      setWatersupply(false);
      setWatertreatment(false);
    } else if (link === "material-usage") {
      setElectricity(false);
      setBioenergy(false);
      setFuel(false);
      setMaterial(true);
      setHeatnsteam(false);
      setRefrigrant(false);
      setWaterdisposal(false);
      setWatersupply(false);
      setWatertreatment(false);
    } else if (link === "waterDisposal") {
      setElectricity(false);
      setBioenergy(false);
      setFuel(false);
      setMaterial(false);
      setHeatnsteam(false);
      setRefrigrant(false);
      setWaterdisposal(true);
      setWatersupply(false);
      setWatertreatment(false);
    } else if (link === "waterSupply") {
      setElectricity(false);
      setBioenergy(false);
      setFuel(false);
      setMaterial(false);
      setHeatnsteam(false);
      setRefrigrant(false);
      setWaterdisposal(false);
      setWatersupply(true);
      setWatertreatment(false);
    } else if (link === "waterTreatment") {
      setElectricity(false);
      setBioenergy(false);
      setFuel(false);
      setMaterial(false);
      setHeatnsteam(false);
      setRefrigrant(false);
      setWaterdisposal(false);
      setWatersupply(false);
      setWatertreatment(true);
    } else {
      setElectricity(false);
      setBioenergy(false);
      setFuel(false);
      setMaterial(false);
      setHeatnsteam(false);
      setRefrigrant(false);
      setWaterdisposal(false);
      setWatersupply(false);
      setWatertreatment(false);
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
  const handleElectricityUsageCheckBox = (event) => {
    if (event.target.checked) {
      setElectricityUsageCheckBox("checked");
    } else {
      setElectricityUsageCheckBox("notchecked");
    }
  };

  //////////////////////
  //Handle Business opertunities Fuel usage

  const [electricityGaseous, setElectricityGaseous] = useState("Gaseous");
  const [electricityCNG, setElectricityCNG] = useState("CNG");
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
  const handleElectricityFuelUsageCheck = (event) => {
    if (event.target.checked) {
      setElectricityFuelUsageCheck("checked");
    } else {
      setElectricityFuelUsageCheck("notchecked");
    }
  };

  //////////////////////
  //Handle Business opertunities Bio-energy usage

  const [bioEnergyBioFuel, setBioEnergyBioFuel] = useState("Bio-Fuel");
  const [bioEnergyBioethanol, setBioEnergyBioethanol] = useState("Bioethanol");
  const [bioEnergyFuelUsage, setBioEnergyFuelUsage] = useState("");
  const [bioEnergyLiter, setBioEnergyLiter] = useState("Liter");
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
  const handleBioEnergyCheck = (event) => {
    if (event.target.checked) {
      setBioEnergyCheck("checked");
    } else {
      setBioEnergyCheck("notchecked");
    }
  };

  //////////////////////
  //Handle Business opertunities material usage

  const [materialUseConstruction, setMaterialUseConstruction] = useState(
    "Construction"
  );
  const [materialUseAggregate, setMaterialUseAggregate] = useState("Aggregate");
  const [
    materialUsePrimaryMaterialProduction,
    setMaterialUsePrimaryMaterialProduction,
  ] = useState("");
  const [materialUseUsage, setMaterialUseUsage] = useState("");
  const [materialUseTones, setMaterialUseTones] = useState("");
  const [materialUseOpenSourceLoop, setMaterialUseOpenSourceLoop] = useState(
    ""
  );

  const handleMaterialUseConstruction = (eventKey) => {
    setMaterialUseConstruction(eventKey);
  };
  const handleMaterialUseAggregate = (eventKey) => {
    setMaterialUseAggregate(eventKey);
  };
  const handleMaterialUsePrimaryMaterialProduction = (eventKey) => {
    setMaterialUsePrimaryMaterialProduction(eventKey);
  };
  const handleMaterialUseUsage = (eventKey) => {
    setMaterialUseUsage(eventKey);
  };
  const handleMaterialUseTones = (eventKey) => {
    setMaterialUseTones(eventKey);
  };
  const handleMaterialUseOpenSourceLoop = (eventKey) => {
    setMaterialUseOpenSourceLoop(eventKey);
  };

  //////////////////////
  ///// handle water supply

  const [waterSupplyUsage, setWaterSupplyUsage] = useState("");
  const [waterSupplyCubicMeters, setWaterSupplyCubicMeters] = useState("");

  const handleWaterSupplyUsage = (eventKey) => {
    setWaterSupplyUsage(eventKey);
  };

  const handleWaterSupplyCubicMeters = (eventKey) => {
    setWaterSupplyCubicMeters(eventKey);
  };

  //////////////////////

  ///// handle water disposal

  const [waterDisposalConstruction, setWaterDisposalConstruction] = useState(
    "Construction"
  );
  const [waterDisposalAggregate, setWaterDisposalAggregate] = useState(
    "Aggregate"
  );
  const [waterDisposalReUse, setWaterDisposalReUse] = useState("");
  const [waterDisposalUsage, setWaterDisposalUsage] = useState("");
  const [waterDisposalTonnes, setWaterDisposalTonnes] = useState("");

  const handleWaterDisposalConstruction = (eventKey) => {
    setWaterDisposalConstruction(eventKey);
  };
  const handleWaterDisposalAggregate = (eventKey) => {
    setWaterDisposalAggregate(eventKey);
  };
  const handleWaterDisposalReUse = (eventKey) => {
    setWaterDisposalReUse(eventKey);
  };
  const handleWaterDisposalUsage = (eventKey) => {
    setWaterDisposalUsage(eventKey);
  };
  const handleWaterDisposalTonnes = (eventKey) => {
    setWaterDisposalTonnes(eventKey);
  };

  /////////////////////

  ///// handle water disposal

  const [waterTreated, setWaterTreated] = useState("");
  const [waterTreatmentCubicMeter, setWaterTreatmentCubicMeter] = useState("");
  const [waterSupplyCarbonEmitted, setWaterSupplyCarbonEmitted] = useState("");

  const handleWaterTreated = (eventKey) => {
    setWaterTreated(eventKey);
  };
  const handleWaterTreatmentCubicMeter = (eventKey) => {
    setWaterTreatmentCubicMeter(eventKey);
  };
  const handleWaterSupplyCarbonEmitted = (eventKey) => {
    setWaterSupplyCarbonEmitted(eventKey);
  };

  //////////////////////

  ////////////ReFrigant usage handling

  const [
    refrigrantKyotoProtocolStandard,
    setRefrigrantKyotoProtocolStandard,
  ] = useState("");
  const [refrigrantCO2, setRefrigrantCO2] = useState("Carbon Dioxide");
  const [refrigrantUsage, setRefrigrantUsage] = useState("");
  const [refrigrantKg, setRefrigrantKg] = useState("");

  const handleRefrigrantKyotoProtocolStandard = (eventKey) => {
    setRefrigrantKyotoProtocolStandard(eventKey);
  };
  const handleRefrigrantCO2 = (eventKey) => {
    setRefrigrantCO2(eventKey);
  };
  const handleRefrigrantUsage = (eventKey) => {
    setRefrigrantUsage(eventKey);
  };
  const handleRefrigrantKg = (eventKey) => {
    setRefrigrantKg(eventKey);
  };

  ////////////////////////
  ////////////Head and steam usage handling

  const [heatAndSteamOnsite, setHeatAndSteamOnsite] = useState("");
  const [heatAndSteamUsage, setHeatAndSteamUsage] = useState("");
  const [heatAndSteamKWH, setHeatAndSteamKWH] = useState("");

  const handleHeatAndSteamOnsite = (eventKey) => {
    setHeatAndSteamOnsite(eventKey);
  };
  const handleHeatAndSteamUsage = (eventKey) => {
    setHeatAndSteamUsage(eventKey);
  };
  const handleHeatAndSteamKWH = (eventKey) => {
    setHeatAndSteamKWH(eventKey);
  };

  /////////////////////////
  const formHandler = () => {
    if (electricity) {
      var data = {
        electricityUsage: electricityUsage,
        electricityKWH: electricityKWH,
        electricityUsageCheckBox: electricityUsageCheckBox,
      };
      console.log("flag", data);
      props.jsonObjOfCalculator(data);
      setElectricityUsage("");
      setElectricityKWH("");
      setElectricityUsageCheckBox("notchecked");
    } else if (fuel) {
      var data = {
        electricityGaseous: electricityGaseous,
        electricityCNG: electricityCNG,
        electricityFuelUsage: electricityFuelUsage,
        electricityFuelUsageKWH: electricityFuelUsageKWH,
        electricityFuelUsageCheck: electricityFuelUsageCheck,
      };
      props.jsonObjOfCalculator(data);
      console.log(data);
      setElectricityGaseous("Gaseous");
      setElectricityCNG("CNG");
      setElectricityFuelUsage("");
      setElectricityFuelUsageKWH("");
      setElectricityFuelUsageCheck("notchecked");
    } else if (bioenergy) {
      var data = {
        bioEnergyBioFuel: bioEnergyBioFuel,
        bioEnergyBioethanol: bioEnergyBioethanol,
        bioEnergyFuelUsage: bioEnergyFuelUsage,
        bioEnergyLiter: bioEnergyLiter,
        bioEnergyCheck: bioEnergyCheck,
      };
      props.jsonObjOfCalculator(data);
      console.log(data);
      setBioEnergyBioFuel("Bio-Fuel");
      setBioEnergyBioethanol("Bioethanol");
      setBioEnergyFuelUsage("");
      setBioEnergyLiter("Liter");
      setBioEnergyCheck("notchecked");
    } else if (material) {
      var data = {
        materialUseConstruction: materialUseConstruction,
        materialUseAggregate: materialUseAggregate,
        materialUsePrimaryMaterialProduction: materialUsePrimaryMaterialProduction,
        materialUseUsage: materialUseUsage,
        materialUseTones: materialUseTones,
        materialUseOpenSourceLoop: materialUseOpenSourceLoop,
      };
      props.jsonObjOfCalculator(data);
      console.log(data);
      setMaterialUseConstruction("Construction");
      setMaterialUseAggregate("Aggregate");
      setMaterialUsePrimaryMaterialProduction("");
      setMaterialUseUsage("");
      setMaterialUseTones("");
      setMaterialUseOpenSourceLoop("");
    } else if (watersupply) {
      var data = {
        waterSupplyUsage: waterSupplyUsage,
        waterSupplyCubicMeters: waterSupplyCubicMeters,
      };
      props.jsonObjOfCalculator(data);
      console.log(data);
      setWaterSupplyUsage("");
      setWaterSupplyCubicMeters("");
    } else if (waterdisposal) {
      var data = {
        waterDisposalConstruction: waterDisposalConstruction,
        waterDisposalAggregate: waterDisposalAggregate,
        waterDisposalReUse: waterDisposalReUse,
        waterDisposalUsage: waterDisposalUsage,
        waterDisposalTonnes: waterDisposalTonnes,
      };
      props.jsonObjOfCalculator(data);
      console.log(data);
      setWaterDisposalConstruction("Construction");
      setWaterDisposalAggregate("Aggregate");
      setWaterDisposalReUse("");
      setWaterDisposalUsage("");
      setWaterDisposalTonnes("");
    } else if (watertreatment) {
      var data = {
        waterTreated: waterTreated,
        waterTreatmentCubicMeter: waterTreatmentCubicMeter,
        waterSupplyCarbonEmitted: waterSupplyCarbonEmitted,
      };
      props.jsonObjOfCalculator(data);
      console.log(data);
      setWaterTreated("");
      setWaterTreatmentCubicMeter("");
      setWaterSupplyCarbonEmitted("");
    } else if (refrigrant) {
      var data = {
        refrigrantKyotoProtocolStandard: refrigrantKyotoProtocolStandard,
        refrigrantCO2: refrigrantCO2,
        refrigrantUsage: refrigrantUsage,
        refrigrantKg: refrigrantKg,
      };
      props.jsonObjOfCalculator(data);
      console.log(data);
      setRefrigrantKyotoProtocolStandard("");
      setRefrigrantCO2("Carbon Dioxide");
      setRefrigrantUsage("");
      setRefrigrantKg("");
    } else if (heatnsteam) {
      var data = {
        heatAndSteamOnsite: heatAndSteamOnsite,
        heatAndSteamUsage: heatAndSteamUsage,
        heatAndSteamKWH: heatAndSteamKWH,
      };
      props.jsonObjOfCalculator(data);
      console.log(data);
      setHeatAndSteamOnsite("");
      setHeatAndSteamUsage("");
      setHeatAndSteamKWH("");
    }
    alert("Data added");
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
              <Link
                onClick={() =>
                  props.toogleHandler("/organization-back-business")
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
                <h1>Business opertunities</h1>
                <br />
              </center>
            </div>

            <br />

            <div className={classes.div1}>
              <App handleMenuItems={handleMenuItems} />
            </div>
            {electricity ? (
              <Electricity
                handleElectricityKWH={handleElectricityKWH}
                handleElectricityUsage={handleElectricityUsage}
                handleElectricityUsageCheckBox={handleElectricityUsageCheckBox}
                electricityUsage={electricityUsage}
              />
            ) : fuel ? (
              <Fuel
                handleElectricityGaseous={handleElectricityGaseous}
                handleElectricityCNG={handleElectricityCNG}
                electricityFuelUsage={electricityFuelUsage}
                handleElectricityFuelUsage={handleElectricityFuelUsage}
                handleElectricityFuelUsageKWH={handleElectricityFuelUsageKWH}
                handleElectricityFuelUsageCheck={
                  handleElectricityFuelUsageCheck
                }
                electricityGaseous={electricityGaseous}
                electricityCNG={electricityCNG}
              />
            ) : bioenergy ? (
              <Bioenergy
                handleBioEnergyBioFuel={handleBioEnergyBioFuel}
                handleBioEnergyBioethanol={handleBioEnergyBioethanol}
                handleBioEnergyFuelUsage={handleBioEnergyFuelUsage}
                bioEnergyFuelUsage={bioEnergyFuelUsage}
                handleBioEnergyLiter={handleBioEnergyLiter}
                handleBioEnergyCheck={handleBioEnergyCheck}
                bioEnergyLiter={bioEnergyLiter}
                bioEnergyBioFuel={bioEnergyBioFuel}
                bioEnergyBioethanol={bioEnergyBioethanol}
              />
            ) : material ? (
              <MaterialUse
                handleMaterialUseConstruction={handleMaterialUseConstruction}
                handleMaterialUseAggregate={handleMaterialUseAggregate}
                materialUseConstruction={materialUseConstruction}
                materialUseAggregate={materialUseAggregate}
                handleMaterialUsePrimaryMaterialProduction={
                  handleMaterialUsePrimaryMaterialProduction
                }
                handleMaterialUseUsage={handleMaterialUseUsage}
                materialUseUsage={materialUseUsage}
                handleMaterialUseTones={handleMaterialUseTones}
                handleMaterialUseOpenSourceLoop={
                  handleMaterialUseOpenSourceLoop
                }
              />
            ) : heatnsteam ? (
              <HeatnSteam
                handleHeatAndSteamOnsite={handleHeatAndSteamOnsite}
                handleHeatAndSteamUsage={handleHeatAndSteamUsage}
                handleHeatAndSteamKWH={handleHeatAndSteamKWH}
              />
            ) : refrigrant ? (
              <Refrigrant
                handleRefrigrantKyotoProtocolStandard={
                  handleRefrigrantKyotoProtocolStandard
                }
                handleRefrigrantCO2={handleRefrigrantCO2}
                handleRefrigrantUsage={handleRefrigrantUsage}
                handleRefrigrantKg={handleRefrigrantKg}
                refrigrantCO2={refrigrantCO2}
              />
            ) : waterdisposal ? (
              <WaterDisposal
                handleWaterDisposalConstruction={
                  handleWaterDisposalConstruction
                }
                handleWaterDisposalAggregate={handleWaterDisposalAggregate}
                handleWaterDisposalReUse={handleWaterDisposalReUse}
                handleWaterDisposalUsage={handleWaterDisposalUsage}
                waterDisposalUsage={waterDisposalUsage}
                handleWaterDisposalTonnes={handleWaterDisposalTonnes}
                waterDisposalAggregate={waterDisposalAggregate}
                waterDisposalConstruction={waterDisposalConstruction}
              />
            ) : watersupply ? (
              <WaterSupply
                handleWaterSupplyUsage={handleWaterSupplyUsage}
                handleWaterSupplyCubicMeters={handleWaterSupplyCubicMeters}
                waterSupplyUsage={waterSupplyUsage}
              />
            ) : watertreatment ? (
              <WaterTreatment
                handleWaterTreated={handleWaterTreated}
                waterTreated={waterTreated}
                handleWaterTreatmentCubicMeter={handleWaterTreatmentCubicMeter}
                handleWaterSupplyCarbonEmitted={handleWaterSupplyCarbonEmitted}
                waterSupplyCarbonEmitted={waterSupplyCarbonEmitted}
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

export default Building;
