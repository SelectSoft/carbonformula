import React, { Component, useState } from "react";
import classes from "../../style/login.module.css";
import Dropdown from "react-bootstrap/Dropdown";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Font, { Text } from "react-font";
import Logo from "../home/logo";
import { Link } from "react-router-dom";
const Login = (props) => {
  const [email, setEmail] = useState("");
  const [dropDown, setDropDown] = useState("Daily");
  const [number, setNumebr] = useState("");
  const handleForm = () => {
    var data = {
      email: email,
      dropDown: dropDown,
      number: number,
    };
    console.log(data);
    props.jsonObjOfCalculator(data);
    props.toogleHandler("/activity");
  };
  const handleDropdown = (eventKey) => {
    setDropDown(eventKey);
  };
  const emailHandler = (event) => {
    setEmail(event.target.value);
  };
  const numberHandler = (event) => {
    setNumebr(event.target.value);
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
              <Link onClick={() => props.toogleHandler("/family-back-login")}>
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
                <h1>Login</h1>
                <br />
              </center>
            </div>
            <br />
            <div className="row" style={{ width: "100%" }}>
              <div className="col-md-4">
                <h3>Email Address:</h3>
              </div>
              <div className="col-md-8">
                <br />
                <input
                  class="form-control form-control-lg"
                  type="text"
                  placeholder="Enter your email"
                  style={{ width: "100%" }}
                  onChange={emailHandler}
                />
              </div>
            </div>
            <br />
            {/* <div className='row' style={{ width: '100%' }}>
                            <div className="col-md-4">
                                <h3>Organizational Code:</h3>
                            </div>
                            <div className="col-md-8">
                                <br />
                                <input class="form-control form-control-lg" type="text" placeholder="Enter orginizational code" style={{ width: '100%' }} />
                            </div>
                        </div> */}
            <div className="row" style={{ width: "100%" }}>
              <div
                className="container "
                style={{ width: "100%", padding: "0px" }}
              >
                <div className="col-md-4">
                  <h3>
                    What period of time are you calculating emmission over?
                  </h3>
                </div>
                <div class="col-md-3" style={{ marginTop: "28px" }}>
                  <input
                    // value={}
                    onChange={numberHandler}
                    placeholder=""
                    style={{ width: "100%", height: "35px" }}

                    // value={props.usage}
                  />
                </div>
                <div class="dropdown col-md-1" style={{ marginTop: "28px" }}>
                  <Dropdown onSelect={handleDropdown}>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      {dropDown}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item eventKey="Daily">Daily</Dropdown.Item>
                      <Dropdown.Item eventKey="Monthly">Monthly</Dropdown.Item>
                      <Dropdown.Item eventKey="Yearly">Yearly</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
            </div>
            <div className="container" style={{ width: "100%" }}>
              <center>
                <Link onClick={() => props.toogleHandler("/addActivity")}>
                  <button
                    className="btn btn-lg"
                    onClick={handleForm}
                    style={{ backgroundColor: "#85B91C", color: "white" }}
                  >
                    Get Started
                  </button>
                </Link>
              </center>
            </div>
          </div>
        </Font>
      </div>
    </React.Fragment>
  );
};

export default Login;
