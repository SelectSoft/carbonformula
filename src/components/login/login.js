import React, { useState, Component } from "react";
import classes from "../../style/login.module.css";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Font, { Text } from "react-font";
import Logo from "../home/logo";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";
const Login = (props) => {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [dropDown, setDropDown] = useState("Daily");
  const [number, setNumebr] = useState("");
  const handleForm = () => {
    var data = {
      email: email,
      code: code,
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
  const codeHandler = (event) => {
    setCode(event.target.value);
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
            {/* <Link onClick={() => props.toogleHandler("/main")}> */}
            <button
              className="col-md-1"
              style={{ backgroundColor: "#85B91C", border: "none" }}
            >
              <Link onClick={() => props.toogleHandler("/main")}>
                <AiOutlineArrowLeft
                  style={{ width: "50px", height: "50px", color: "white" }}
                />
              </Link>
            </button>
            {/* </Link> */}
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
                  // class="form-control form-control-lg"
                  type="email"
                  value={email}
                  onChange={emailHandler}
                  placeholder="Enter your email"
                  class="form-control form-control-lg"
                  style={{ width: "100%" }}
                />
              </div>
            </div>
            <br />
            <div className="row" style={{ width: "100%" }}>
              <div className="col-md-4">
                <h3>Organizational Code:</h3>
              </div>
              <div className="col-md-8">
                <br />
                <input
                  class="form-control form-control-lg"
                  type="text"
                  onChange={codeHandler}
                  value={code}
                  placeholder="Enter orginizational code"
                  style={{ width: "100%" }}
                />
              </div>
            </div>
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
                    type="number"
                    onChange={numberHandler}
                    class="form-control form-control-lg"
                    placeholder=""
                    style={{ width: "100%", height: "35px" }}
                    value={props.usage}
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
              <div className="container" style={{ width: "100%" }}>
                <center>
                  <Link>
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
          </div>
        </Font>
      </div>
    </React.Fragment>
  );
};

export default Login;
