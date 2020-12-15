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
              <Air />
            ) : land ? (
              <Land />
            ) : electriccar ? (
              <Electriccar />
            ) : calculatefuel ? (
              <Calculatefuel />
            ) : Ferry ? (
              <Ferry />
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

export default Construction;
