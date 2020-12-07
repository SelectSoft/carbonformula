import React, { Component } from 'react';
import logo from '../Images/logo.png'
import classes from '../../style/logo.module.css'
const Logo = () => {
    return ( 
        <center>
            <img src={logo} className={classes.logo} />
            </center>
     );
}
 
export default Logo;