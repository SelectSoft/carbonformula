import React, { Component } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Logo from "../home/logo";
import { Link } from "react-router-dom";
import Font, { Text } from "react-font";
import classes from "../../style/activity.module.css";
const TotalEmissions = (props) => {
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
              <Link onClick={() => props.toogleHandler("/back-totalEmissions")}>
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
                <h1>Your Emissions</h1>
                <br />
              </center>
            </div>

            <br />
            <div className="container" style={{ width: "100%" }}>
              <center>
                <button
                  className="btn btn-lg"
                  style={{ backgroundColor: "gray" }}
                >
                  XXX Tones
                </button>
                <br />
                <br />
                <button
                  className="btn btn-lg"
                  style={{ backgroundColor: "#99d41f" }}
                >
                  Get to carbon neutral
                </button>
              </center>
            </div>

            <diV className="container" style={{ width: "100%" }}>
              <br />
              <br />
              <center>
                <span className="col-sm-6">
                  <Link to="/view-emissions">
                    <p
                      style={{
                        fontSize: "20px",
                        textDecoration: "underline",
                        color: "black",
                      }}
                    >
                      View breakdown of emissions
                    </p>
                  </Link>
                </span>

                <span className="col-sm-6">
                  <p style={{ fontSize: "20px", textDecoration: "underline" }}>
                    Learn more about carbon emission
                  </p>
                </span>
              </center>
            </diV>
          </div>
        </Font>
      </div>
    </React.Fragment>
  );
};

export default TotalEmissions;
