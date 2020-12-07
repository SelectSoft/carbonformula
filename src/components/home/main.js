import React, { Component } from 'react';
import Logo from './logo'
import classes from '../../style/home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { VscOrganization } from "react-icons/vsc"
import { GiFamilyHouse } from "react-icons/gi"
import Font, { Text } from 'react-font'
import image1 from '../Images/mainicon1.png'
import image2 from '../Images/mainicon2.png'
import { Link } from 'react-router-dom'
import { propTypes } from 'react-bootstrap/esm/Image';
const Main = (props) => {
    return (
        <React.Fragment>

            <div className={[classes.mainBody, "container"].join(" ")} >
                <div className="row">
                    <div className={[classes.innerDiv, "col-md-12 col-sm-12"].join(" ")} >
                        <Logo />
                        <Font family="Georgia">
                            <b>
                                <h1>Carbon Emission Calculator</h1>
                                <h2 style={{ color: '#99d41f' }}>Welcome</h2>
                            </b>

                            <div className='row' style={{ marginTop: '100px' }}>
                                <div className='col-md-6 col-sm-12' >
                                    <Link onClick={() => props.toogleHandler("/organisation/sign-in")}>
                                        <img src={image1} className={classes.organization} />
                                    </Link>
                                    <b><h2>Organisation</h2></b>
                                </div>

                                <div className='col-md-6 col-sm-12' >
                                    <Link onClick={() => props.toogleHandler('/family/add-activity')}>
                                        <img src={image2} className={classes.organization} />
                                    </Link>
                                    <b><h1>Individuals/Family</h1></b>
                                </div>

                            </div>
                        </Font>
                    </div>
                </div>
            </div>

        </React.Fragment>
    );
}

export default Main;