import React, { Component, useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import Logo from "../home/logo";
import Font, { Text } from "react-font";
import classes from "../../style/building.module.css";
import App from "../horizontally_scrolable/horizontalscrol";
import Freightpage from "./elements/freightPage";

const Freight = (props) => {
  const [freight, setFreight] = useState(true);
  const handleMenuItems = (link) => {
    console.log(link);
    if (link === "freight") {
      setFreight(true);
    } else {
      setFreight(false);

      <center>
        <h1>Page Not Found</h1>
      </center>;
    }
  };
  const handleTitle = () => {
    const char = true;
    return char;
  };

  ////// handle Freight page

  const [freightVans, setFreightVans] = useState("Vans");
  const [freightClass, setFreightClass] = useState("Class 1(upto 1.305tonnes)");
  const [freightDiesel, setFreightDiesel] = useState("Diesel");
  const [freightDistance, setFreightDistance] = useState("");
  const [freightKm, setFreightKm] = useState("Tonnes");
  const [freightCheck, setFreightCheck] = useState("");

  const handleFreightVans = (eventKey) => {
    setFreightVans(eventKey);
  };
  const handleFreightClass = (eventKey) => {
    setFreightClass(eventKey);
  };
  const handleFreightDiesel = (eventKey) => {
    setFreightDiesel(eventKey);
  };
  const handleFreightDistance = (eventKey) => {
    setFreightDistance(eventKey);
  };
  const handleFreightKm = (eventKey) => {
    setFreightKm(eventKey);
  };
  const handleFreightCheck = (event) => {
    if (event.target.checked) {
      setFreightCheck("checked");
    } else {
      setFreightCheck("notchecked");
    }
  };

  ////////////////////////
  //////////// form handler

  const formHandler = () => {
    if (freight) {
      var data = {
        freightVans: freightVans,
        freightClass: freightClass,
        freightDiesel: freightDiesel,
        freightDistance: freightDistance,
        freightKm: freightKm,
        freightCheck: freightCheck,
      };
      console.log(data);
    }
  };

  //////////////////
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
                  props.toogleHandler("/organization-back-freight")
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
                <h1>Freight</h1>
                <br />
              </center>
            </div>

            <br />

            {/* <div className={classes.div1}>
              <App handleMenuItems={handleMenuItems} />
            </div> */}
            <Freightpage
              handleFreightVans={handleFreightVans}
              handleFreightClass={handleFreightClass}
              handleFreightDiesel={handleFreightDiesel}
              handleFreightDistance={handleFreightDistance}
              handleFreightKm={handleFreightKm}
              handleFreightCheck={handleFreightCheck}
              freightKm={freightKm}
              freightDiesel={freightDiesel}
              freightClass={freightClass}
              freightVans={freightVans}
            />
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

export default Freight;
