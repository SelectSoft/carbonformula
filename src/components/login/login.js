import React, { Component } from 'react';
import classes from '../../style/login.module.css'
import { AiOutlineArrowLeft } from "react-icons/ai"
import Font, { Text } from 'react-font'
import Logo from '../home/logo'
import { Link } from 'react-router-dom'
const Login = (props) => {
    return (
        <React.Fragment>
            <div className={["container", classes.mainBody].join(" ")} >
                <Font family="Georgia">
                    <div className={["row", classes.innerDiv].join(" ")} style={{ textAlign: 'left', width: '100%' }}>

                        <button className='col-md-1' style={{ backgroundColor: '#85B91C', border: 'none' }}>
                            <Link to='/'><AiOutlineArrowLeft style={{ width: '50px', height: '50px', color: 'white' }} /></Link>
                        </button>

                        <p style={{ fontSize: '30px', marginLeft: '5px', marginTop: '12px' }}>Previous Page</p>
                        <div className="col-md-12">
                            <center><Logo /><br />
                                <h1>Login</h1><br /></center></div><br />
                        <div className='row' style={{ width: '100%' }}>
                            <div className="col-md-4">
                                <h3>Email Address:</h3>
                            </div>
                            <div className="col-md-8">
                                <br />
                                <input class="form-control form-control-lg" type="text" placeholder="Enter your email" style={{ width: '100%' }} />
                            </div>
                        </div>
                        <br />
                        <div className='row' style={{ width: '100%' }}>
                            <div className="col-md-4">
                                <h3>Organizational Code:</h3>
                            </div>
                            <div className="col-md-8">
                                <br />
                                <input class="form-control form-control-lg" type="text" placeholder="Enter orginizational code" style={{ width: '100%' }} />
                            </div>
                        </div>
                        <div className='row' style={{ width: '100%' }}>
                            <div className="container " style={{ width: '100%', padding: '0px' }}>
                                <div className="col-md-4">
                                    <h3>What period of time are you calculating emmission over?</h3>
                                </div>

                                <div class="dropdown col-md-3">
                                    <br />
                                    <button class="btn dropdown-toggle" type="button" data-toggle="dropdown" style={{ border: '1px solid black' }}>Dropdown Example
                                {/* <span class="caret"></span> */}
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li><a href={{}}>HTML</a></li>
                                        <li><a href={{}}>CSS</a></li>
                                        <li><a href={{}}>JavaScript</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="container" style={{ width: '100%' }}>
                            <center>
                                <Link onClick={() => props.toogleHandler("/activity")} >
                                    <button className='btn btn-lg' style={{ backgroundColor: '#85B91C', color: 'white' }} >
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
}

export default Login;