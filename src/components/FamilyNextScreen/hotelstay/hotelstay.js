import React, { Component, useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import Logo from "../../home/logo";
import Font, { Text } from "react-font";
import classes from "../../../style/building.module.css";
import Hotel from "./elements/hotel";
import Dropdown from "react-bootstrap/Dropdown";

const Hotelstay = (props) => {
  const [hotelstay, setHotelstay] = useState(false);
  const handleMenuItems = (link) => {
    console.log(link);
    if (link === "hotelstay") {
      setHotelstay(true);
    } else {
      setHotelstay(false);

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
  const formHandler = () => {
    if (hotelstay) {
      var data = {
        hoteStayCountry: hoteStayCountry,
        hoteStayNoOfNights: hoteStayNoOfNights,
        hoteStayCheck: hoteStayCheck,
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
              <Link onClick={() => props.toogleHandler("/family-back-hotel")}>
                <AiOutlineArrowLeft
                  style={{ width: "50px", height: "50px", color: "white" }}
                />
              </Link>
            </button>
            <p
              style={{
                fontSize: "30px",
                marginLeft: "5px",
                marginTop: "12px",
              }}
            >
              Previous Page
            </p>

            <div className="col-md-12">
              <center>
                <Logo />
                <br />
                <h1>Hotel Stay</h1>
                <br />
              </center>
            </div>

            <br />

            {/* <div className={classes.div1}>
              <App handleMenuItems={handleMenuItems} />
            </div> */}
            <Hotel
              handleHoteStayCountry={handleHoteStayCountry}
              handleHoteStayNoOfNights={handleHoteStayNoOfNights}
              handleHoteStayCheck={handleHoteStayCheck}
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

export default Hotelstay;
