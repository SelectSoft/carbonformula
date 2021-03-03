import React, { Component, useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import Logo from "../../home/logo";
import Font, { Text } from "react-font";
import classes from "../../../style/building.module.css";
import App from "./horizontalscrol";
import Electriccar from "./elements/electriccar";
import Calculatefuel from "./elements/calculatefuel";
import Air from "./elements/air";
import Land from "./elements/land";
import Ferry from "./elements/ferry";

const Construction = (props) => {
  const [air, setAir] = useState(false);
  const [ferry, setFerry] = useState(true);
  const [land, setLand] = useState(false);
  const [electriccar, setElectriccar] = useState(false);
  const [calculatefuel, setCalculatefuel] = useState(false);
  const [title, setTitle] = useState(false);
  const [titlee, setTitlee] = useState(false);

  const handleMenuItems = (link) => {
    console.log(link);
    if (link === "air") {
      setAir(true);
      setFerry(false);
      setElectriccar(false);
      setLand(false);
      setCalculatefuel(false);
    } else if (link === "ferry") {
      setAir(false);
      setFerry(true);
      setElectriccar(false);
      setLand(false);
      setCalculatefuel(false);
    } else if (link === "land") {
      setFerry(false);
      setAir(false);
      setElectriccar(false);
      setLand(true);
      setCalculatefuel(false);
    } else if (link === "electriccar") {
      setFerry(false);
      setAir(false);
      setElectriccar(true);
      setLand(false);
      setCalculatefuel(false);
    } else if (link === "calculatefuel") {
      setFerry(false);
      setAir(false);
      setElectriccar(false);
      setLand(false);
      setCalculatefuel(true);
    } else {
      setFerry(false);
      setAir(false);
      setElectriccar(false);
      setLand(false);
      setCalculatefuel(false);

      <center>
        <h1>Page Not Found</h1>
      </center>;
    }
  };
  const handleTitle = () => {
    const char = true;
    return char;
  };
  ///////// handle hotel stay

  // const [hoteStayCountry, setHotelStay] = useState("");
  // const [hoteStayNoOfNights, setHotelStayNoOfNights] = useState("");
  // const [hoteStayCheck, setHotelStayCheck] = useState("notchecked");

  // const handleHoteStayCountry = (eventKey) => {
  //   setHotelStay(eventKey);
  // };
  // const handleHoteStayNoOfNights = (eventKey) => {
  //   setHotelStayNoOfNights(eventKey);
  // };
  // const handleHoteStayCheck = (event) => {
  //   if (event.target.checked) {
  //     setHotelStayCheck("checked");
  //   } else {
  //     setHotelStayCheck("notchecked");
  //   }
  // };

  //////////////////////

  ///////////////handle Air travel

  const [
    airPlaneTravelDepartureAirport,
    setAirPlaneTravelDepartureAirport,
  ] = useState("");
  const [
    airPlaneTravelArivalAirport,
    setAirPlaneTravelArivalAirport,
  ] = useState("");
  const [airPlaneTravelVia, setAirPlaneTravelVia] = useState("");
  const [airPlaneTravelClass, setAirPlaneTravelClass] = useState("");
  const [airPlaneTravelPassenger, setAirPlaneTravelPassenger] = useState("");
  const [airPlaneTravelReturn, setAirPlaneTravelReturn] = useState(
    "notchecked"
  );
  const [airPlaneTravelSingle, setAirPlaneTravelSingle] = useState(
    "notchecked"
  );

  const handleAirPlaneTravelDepartureAirport = (eventKey) => {
    setAirPlaneTravelDepartureAirport(eventKey);
  };
  const handleAirPlaneTravelArivalAirport = (eventKey) => {
    setAirPlaneTravelArivalAirport(eventKey);
  };
  const handleAirPlaneTravelVia = (eventKey) => {
    setAirPlaneTravelVia(eventKey);
  };
  const handleAirPlaneTravelClass = (eventKey) => {
    setAirPlaneTravelClass(eventKey);
  };
  const handleAirPlaneTravelPassenger = (eventKey) => {
    setAirPlaneTravelPassenger(eventKey);
  };
  const handleAirPlaneTravelReturn = (event) => {
    if (event.target.checked) {
      setAirPlaneTravelReturn("checked");
    } else {
      setAirPlaneTravelReturn("notchecked");
    }
  };
  const handleAirPlaneTravelSingle = (event) => {
    if (event.target.checked) {
      setAirPlaneTravelSingle("checked");
    } else {
      setAirPlaneTravelSingle("notchecked");
    }
  };

  //////////////////////
  ////////////// handle car travel

  const [carTravelVehicl, setCarTravel] = useState("bike");
  const [carTravelType, setCarTravelType] = useState("Supermini");
  const [carTravelDistance, setCarTravelDistance] = useState("");
  const [carTravelKm, setCarTravelKm] = useState("");

  const handleCarTravelVehicl = (eventKey) => {
    setCarTravel(eventKey);
  };
  const handleCarTravelType = (eventKey) => {
    setCarTravelType(eventKey);
  };
  const handleCarTravelDistance = (eventKey) => {
    setCarTravelDistance(eventKey);
  };
  const handleCarTravelKm = (eventKey) => {
    setCarTravelKm(eventKey);
  };

  /////////////////////////

  ////////////// handle electric car

  const [electricCarVehicl, setElectricCarVehicl] = useState("");
  const [electricCarType, setElectricCarType] = useState("Supermini");
  const [electricCarDistance, setElectricCarDistance] = useState("");
  const [electricCarKm, setElectricCarKm] = useState("");

  const handleElectricCarVehicl = (eventKey) => {
    setElectricCarVehicl(eventKey);
  };
  const handleElectricCarType = (eventKey) => {
    setElectricCarType(eventKey);
  };
  const handleElectricCarDistance = (eventKey) => {
    setElectricCarDistance(eventKey);
  };
  const handleElectricCarKm = (eventKey) => {
    setElectricCarKm(eventKey);
  };
  //////////// handle tranSPort and travel Seas

  const [seaPassangerType, setSeaPassangerType] = useState("car");
  const [seaDistance, setSeaDistance] = useState("");
  const [seaKm, setSeaKm] = useState("");

  const handleSeaPassangerType = (eventKey) => {
    setSeaPassangerType(eventKey);
  };
  const handleSeDistance = (eventKey) => {
    setSeaDistance(eventKey);
  };
  const handleSeaKm = (eventKey) => {
    setSeaKm(eventKey);
  };

  ///////////////////

  //////////// handle tranSPort and travel Seas

  const [calculatefuelGaseous, setCalculatefuelGaseous] = useState(
    "Liquid fuels"
  );
  const [calculatefuelCNG, setCalculatefuelCNG] = useState("CNG");
  const [calculatefuelQuantity, setCalculatefuelQuantity] = useState("");
  const [calculatefuelTonnes, setCalculatefuelTonnes] = useState("litres");

  const handleCalculatefuelGaseous = (eventKey) => {
    setCalculatefuelGaseous(eventKey);
  };
  const handleCalculatefuelCNG = (eventKey) => {
    setCalculatefuelCNG(eventKey);
  };
  const handleCalculatefuelQuantity = (eventKey) => {
    setCalculatefuelQuantity(eventKey);
  };
  const handleCalculatefuelTonnes = (eventKey) => {
    setCalculatefuelTonnes(eventKey);
  };

  ///////////////////

  /////////////////////////

  ////// Form Handler
  const formHandler = () => {
    if (air) {
      var data = {
        airPlaneTravelDepartureAirport: airPlaneTravelDepartureAirport,
        airPlaneTravelArivalAirport: airPlaneTravelArivalAirport,
        airPlaneTravelVia: airPlaneTravelVia,
        airPlaneTravelClass: airPlaneTravelClass,
        airPlaneTravelPassenger: airPlaneTravelPassenger,
        airPlaneTravelReturn: airPlaneTravelReturn,
        airPlaneTravelSingle: airPlaneTravelSingle,
      };
      console.log(data);
    } else if (land) {
      var data = {
        carTravelVehicl: carTravelVehicl,
        carTravelType: carTravelType,
        carTravelDistance: carTravelDistance,
        carTravelKm: carTravelKm,
      };
      console.log(data);
    } else if (electriccar) {
      var data = {
        electricCarVehicl: electricCarVehicl,
        electricCarType: electricCarType,
        electricCarDistance: electricCarDistance,
        electricCarKm: electricCarKm,
      };
      console.log(data);
    } else if (ferry) {
      var data = {
        seaPassangerType: seaPassangerType,
        seaDistance: seaDistance,
        seaKm: seaKm,
      };
      console.log(data);
    } else if (calculatefuel) {
      var data = {
        calculatefuelGaseous: calculatefuelGaseous,
        calculatefuelCNG: calculatefuelCNG,
        calculatefuelQuantity: calculatefuelQuantity,
        calculatefuelTonnes: calculatefuelTonnes,
      };
      console.log(data);
    }
    alert("Data added");
  };
  //////////////////////

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
              <Link onClick={() => props.toogleHandler("/family-back-travel")}>
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
                <h1>Travel</h1>
                <br />
              </center>
            </div>

            <br />

            <div className={classes.div1}>
              <App handleMenuItems={handleMenuItems} />
            </div>
            {air ? (
              <Air
                handleAirPlaneTravelDepartureAirport={
                  handleAirPlaneTravelDepartureAirport
                }
                handleAirPlaneTravelArivalAirport={
                  handleAirPlaneTravelArivalAirport
                }
                handleAirPlaneTravelVia={handleAirPlaneTravelVia}
                handleAirPlaneTravelClass={handleAirPlaneTravelClass}
                handleAirPlaneTravelPassenger={handleAirPlaneTravelPassenger}
                handleAirPlaneTravelReturn={handleAirPlaneTravelReturn}
                handleAirPlaneTravelSingle={handleAirPlaneTravelSingle}
              />
            ) : land ? (
              <Land
                handleCarTravelVehicl={handleCarTravelVehicl}
                handleCarTravelType={handleCarTravelType}
                carTravelType={carTravelType}
                carTravelVehicl={carTravelVehicl}
                handleCarTravelDistance={handleCarTravelDistance}
                handleCarTravelKm={handleCarTravelKm}
              />
            ) : electriccar ? (
              <Electriccar
                handleElectricCarVehicl={handleElectricCarVehicl}
                handleElectricCarType={handleElectricCarType}
                electricCarType={electricCarType}
                handleElectricCarDistance={handleElectricCarDistance}
                handleElectricCarKm={handleElectricCarKm}
              />
            ) : calculatefuel ? (
              <Calculatefuel
                handleCalculatefuelGaseous={handleCalculatefuelGaseous}
                calculatefuelGaseous={calculatefuelGaseous}
                calculatefuelCNG={calculatefuelCNG}
                handleCalculatefuelCNG={handleCalculatefuelCNG}
                handleCalculatefuelQuantity={handleCalculatefuelQuantity}
                handleCalculatefuelTonnes={handleCalculatefuelTonnes}
                calculatefuelTonnes={calculatefuelTonnes}
              />
            ) : ferry ? (
              <Ferry
                handleSeaPassangerType={handleSeaPassangerType}
                seaPassangerType={seaPassangerType}
                handleSeDistance={handleSeDistance}
                handleSeaKm={handleSeaKm}
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

export default Construction;
