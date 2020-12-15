import React, { Component } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Logo from "../home/logo";
import Font, { Text } from "react-font";
import classes from "../../style/activity.module.css";
import activity2 from "../Images/activity2.png";
import activity3 from "../Images/activity3.png";
import activity4 from "../Images/activity4.png";
import { Link } from "react-router-dom";
const AddActivity = (props) => {
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
              <Link onClick={() => props.toogleHandler("/back-addactivity")}>
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
                <h1>Add an activity</h1>
                <br />
              </center>
            </div>

            <br />

            <div className="container">
              <br />

              <div className={[classes.div, "row"].join(" ")}>
                <div className="col-md-4" style={{ padding: "50px" }}>
                  <Link onClick={() => props.toogleHandler("/travel")}>
                    <img src={activity4} style={{ width: "90%" }} />
                  </Link>
                  <br />
                  <center>
                    <h3>Travel</h3>
                  </center>
                </div>

                <div className="col-md-4" style={{ padding: "50px" }}>
                  <Link onClick={() => props.toogleHandler("/home")}>
                    <img src={activity2} style={{ width: "90%" }} />
                  </Link>
                  <br />
                  <center>
                    <h3>Home</h3>
                  </center>
                </div>

                <div className="col-md-4" style={{ padding: "50px" }}>
                  <Link onClick={() => props.toogleHandler("/hotelstay")}>
                    <img src={activity3} style={{ width: "90%" }} />
                  </Link>
                  <br />
                  <center>
                    <h3>Hotel stay</h3>
                  </center>
                </div>
              </div>
            </div>
            <br />
          </div>
        </Font>
      </div>
    </React.Fragment>
  );
};

export default AddActivity;
