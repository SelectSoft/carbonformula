import React, { Component, useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import Logo from "../home/logo";
import Font, { Text } from "react-font";
import classes from "../../style/building.module.css";
import App from "./horizontalscrol";
import Hotelstay from "./elements/hotelstay";
import Cartravel from "./elements/cartravel";
import Electriccar from "./elements/electriccar";
import Airplanetravel from "./elements/airplanetravel";

const Events = (props) => {
  const [hotelstay, setHotelstay] = useState(false);
  const [airplanetravel, setAirplanetravel] = useState(true);
  const [cartravel, setCartravel] = useState(false);
  const [electriccar, setElectriccar] = useState(false);
  const [title, setTitle] = useState(false);
  const [titlee, setTitlee] = useState(false);

  const handleMenuItems = (link) => {
    console.log(link);
    if (link === "airplanetravel") {
      setHotelstay(false);
      setAirplanetravel(true);
      setElectriccar(false);
      setCartravel(false);
    } else if (link === "electriccar") {
      setAirplanetravel(false);
      setHotelstay(false);
      setElectriccar(true);
      setCartravel(false);
    } else if (link === "hotelstay") {
      setAirplanetravel(false);
      setHotelstay(true);
      setElectriccar(false);
      setCartravel(false);
    } else if (link === "cartravel") {
      setAirplanetravel(false);
      setHotelstay(false);
      setElectriccar(false);
      setCartravel(true);
    } else {
      setAirplanetravel(false);
      setHotelstay(false);
      setElectriccar(false);
      setCartravel(false);

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

  const [hoteStayCountry, setHotelStay] = useState("");
  const [hoteStayNoOfNights, setHotelStayNoOfNights] = useState("");
  const [hoteStayCheck, setHotelStayCheck] = useState("notchecked");

  const handleHoteStayCountry = (eventKey) => {
    setHotelStay(eventKey);
  };
  const handleHoteStayNoOfNights = (eventKey) => {
    setHotelStayNoOfNights(eventKey);
  };
  const handleHoteStayCheck = (event) => {
    if (event.target.checked) {
      setHotelStayCheck("checked");
    } else {
      setHotelStayCheck("notchecked");
    }
  };

  //////////////////////

  ///////////////handle Business Travel air

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

  const [carTravelVehicl, setCarTravel] = useState("");
  const [carTravelType, setCarTravelType] = useState("");
  const [carTravelDistance, setCarTravelDistance] = useState("");
  const [carTravelKm, setCarTravelKm] = useState("");

  const handleCarTravelVehicl = (eventKey) => {
    setAirPlaneTravelPassenger(eventKey);
  };
  const handleCarTravelType = (eventKey) => {
    setAirPlaneTravelPassenger(eventKey);
  };
  const handleCarTravelDistance = (eventKey) => {
    setAirPlaneTravelPassenger(eventKey);
  };
  const handleCarTravelKm = (eventKey) => {
    setAirPlaneTravelPassenger(eventKey);
  };

  /////////////////////////

  ////////////// handle electric car

  const [electricCarVehicl, setElectricCarVehicl] = useState("");
  const [electricCarType, setElectricCarType] = useState("");
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

  /////////////////////////

  ////// Form Handler
  const formHandler = () => {
    if (hotelstay) {
      var data = {
        hoteStayCountry: hoteStayCountry,
        hoteStayNoOfNights: hoteStayNoOfNights,
        hoteStayCheck: hoteStayCheck,
      };
      console.log(data);
    } else if (airplanetravel) {
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
    } else if (cartravel) {
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
    }
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
              <Link
                onClick={() => props.toogleHandler("/organization-back-event")}
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
                <h1>Events & Hotel Stay</h1>
                <br />
              </center>
            </div>

            <br />

            <div className={classes.div1}>
              <App handleMenuItems={handleMenuItems} />
            </div>
            {airplanetravel ? (
              <Airplanetravel
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
            ) : hotelstay ? (
              <Hotelstay
                handleHoteStayCountry={handleHoteStayCountry}
                handleHoteStayNoOfNights={handleHoteStayNoOfNights}
                handleHoteStayCheck={handleHoteStayCheck}
              />
            ) : cartravel ? (
              <Cartravel
                handleCarTravelVehicl={handleCarTravelVehicl}
                handleCarTravelType={handleCarTravelType}
                handleCarTravelDistance={handleCarTravelDistance}
                handleCarTravelKm={handleCarTravelKm}
              />
            ) : electriccar ? (
              <Electriccar
                handleElectricCarVehicl={handleElectricCarVehicl}
                handleElectricCarType={handleElectricCarType}
                handleElectricCarDistance={handleElectricCarDistance}
                handleElectricCarKm={handleElectricCarKm}
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

export default Events;
