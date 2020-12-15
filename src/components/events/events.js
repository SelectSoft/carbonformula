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
              <Airplanetravel />
            ) : hotelstay ? (
              <Hotelstay />
            ) : cartravel ? (
              <Cartravel />
            ) : electriccar ? (
              <Electriccar />
            ) : null}
            <div className="container" style={{ width: "100%" }}>
              <center>
                <button
                  className="btn btn-success btn-lg"
                  style={{ backgroundColor: "#85B91C", color: "white" }}
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
