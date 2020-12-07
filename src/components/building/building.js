import React, { Component, useState } from 'react';
import { AiOutlineArrowLeft } from "react-icons/ai"
import { Link } from "react-router-dom";
import Logo from '../home/logo'
import Font, { Text } from 'react-font'
import classes from '../../style/building.module.css'
import App from '../horizontally_scrolable/horizontalscrol'
import Electricity from '../electricityusage/electricityusage';
import Fuel from '../fuelusage/fuelusage.page'
import Bioenergy from '../bioenergyusage/bioenergy'
import MaterialUse from '../material/material'
import Refrigrant from '../refrigrant/refrigrant.page'
import HeatnSteam from '../heatnsteam/heatnsteam'
import WaterSupply from '../watersupply/watersupplyy'
import WaterDisposal from '../waterdisposal/waterdisposal'
import WaterTreatment from '../watertreatment/watertreatment'
import ViewEmissions from '../viewEmissions/viewemissions'

const Building = (props) => {

    const [electricity, setElectricity] = useState(true);
    const [fuel, setFuel] = useState(false);
    const [bioenergy, setBioenergy] = useState(false);
    const [material, setMaterial] = useState(false);
    const [heatnsteam, setHeatnsteam] = useState(false);
    const [refrigrant, setRefrigrant] = useState(false);
    const [waterdisposal, setWaterdisposal] = useState(false);
    const [watersupply, setWatersupply] = useState(false);
    const [watertreatment, setWatertreatment] = useState(false);
    const [title, setTitle] = useState(false);
    const [titlee, setTitlee] = useState(false)

    const handleMenuItems = link => {
        console.log(link);
        if (link === "building") {
            setElectricity(true);
            setBioenergy(false);
            setFuel(false);
            setMaterial(false);
            setHeatnsteam(false);
            setRefrigrant(false);
            setWaterdisposal(false);
            setWatersupply(false);
            setWatertreatment(false);
        }
        else if (link === "fuel-usage") {
            setElectricity(false);
            setBioenergy(false);
            setFuel(true);
            setMaterial(false);
            setHeatnsteam(false);
            setRefrigrant(false);
            setWaterdisposal(false);
            setWatersupply(false);
            setWatertreatment(false);
        }
        else if (link === 'bio-usage') {
            setElectricity(false);
            setBioenergy(true);
            setFuel(false);
            setMaterial(false);
            setHeatnsteam(false);
            setRefrigrant(false);
            setWaterdisposal(false);
            setWatersupply(false);
            setWatertreatment(false);
        }
        else if (link === 'reFrigrant-usage') {
            setElectricity(false);
            setBioenergy(false);
            setFuel(false);
            setMaterial(false);
            setHeatnsteam(false);
            setRefrigrant(true);
            setWaterdisposal(false);
            setWatersupply(false);
            setWatertreatment(false);
        }
        else if (link === 'heatnSteam-usage') {
            setElectricity(false);
            setBioenergy(false);
            setFuel(false);
            setMaterial(false);
            setHeatnsteam(true);
            setRefrigrant(false);
            setWaterdisposal(false);
            setWatersupply(false);
            setWatertreatment(false);
        }
        else if (link === 'material-usage') {
            setElectricity(false);
            setBioenergy(false);
            setFuel(false);
            setMaterial(true);
            setHeatnsteam(false);
            setRefrigrant(false);
            setWaterdisposal(false);
            setWatersupply(false);
            setWatertreatment(false);
        }
        else if (link === 'waterDisposal') {
            setElectricity(false);
            setBioenergy(false);
            setFuel(false);
            setMaterial(false);
            setHeatnsteam(false);
            setRefrigrant(false);
            setWaterdisposal(true);
            setWatersupply(false);
            setWatertreatment(false);
        }
        else if (link === 'waterSupply') {
            setElectricity(false);
            setBioenergy(false);
            setFuel(false);
            setMaterial(false);
            setHeatnsteam(false);
            setRefrigrant(false);
            setWaterdisposal(false);
            setWatersupply(true);
            setWatertreatment(false);
        }
        else if (link === 'waterTreatment') {
            setElectricity(false);
            setBioenergy(false);
            setFuel(false);
            setMaterial(false);
            setHeatnsteam(false);
            setRefrigrant(false);
            setWaterdisposal(false);
            setWatersupply(false);
            setWatertreatment(true);
        }
        else {
            setElectricity(false);
            setBioenergy(false);
            setFuel(false);
            setMaterial(false);
            setHeatnsteam(false);
            setRefrigrant(false);
            setWaterdisposal(false);
            setWatersupply(false);
            setWatertreatment(false);
            <center>
                <h1>Page Not Found</h1>
            </center>
        }


    }
    const handleTitle = () => {
        const char = true;
        return char;
    }
    return (
        <React.Fragment>
            <div className={["container", classes.mainBody].join(" ")} >
                <Font family="Georgia">

                    <div className={["row", classes.innerDiv].join(" ")} style={{ textAlign: 'left', width: '100%' }}>
                        <button className='col-md-1' style={{ backgroundColor: '#85B91C', border: 'none' }}>
                            <AiOutlineArrowLeft style={{ width: '50px', height: '50px', color: 'white' }} />
                        </button>
                        <p style={{ fontSize: '30px', marginLeft: '5px', marginTop: '12px' }}>Previous Page</p>


                        <div className="col-md-12">
                            <center><Logo /><br />
                                <h1>Company building and direct operations</h1><br />
                            </center>
                        </div>


                        <br />

                        <div className={classes.div1} >
                            <App handleMenuItems={handleMenuItems} />
                        </div>
                        {electricity ?
                            <Electricity />
                            : fuel ?
                                <Fuel />
                                : bioenergy ?
                                    <Bioenergy />
                                    : material ?
                                        <MaterialUse />
                                        : heatnsteam ?
                                            <HeatnSteam />
                                            : refrigrant ?
                                                <Refrigrant />
                                                : waterdisposal ?
                                                    <WaterDisposal />
                                                    : watersupply ?
                                                        <WaterSupply />
                                                        : watertreatment ?
                                                            <WaterTreatment />
                                                            : null

                        }
                        <div className="container" style={{ width: '100%' }}>
                            <center>
                                <button className='btn btn-success btn-lg' style={{ backgroundColor: '#85B91C', color: 'white' }}>
                                    Add to total emissions
                        </button>
                                <br />
                                <br />
                                <button className='btn btn-danger btn-md'>
                                    Clear
                        </button>
                            </center>
                        </div>
                        <br />
                        <br />

                        <div className={[classes.div2, "footer"].join(" ")} >
                            <center>
                                <a style={{ fontSize: '20px', marginTop: '5px', }}>All activities</a>
                                <Link onClick={() => props.toogleHandler("/view-emissions")}>
                                    <button className='btn btn-success btn-lg' style={{ marginLeft: '3px', backgroundColor: '#85B91C', color: 'white' }}>
                                        View my emissions
                                    </button></Link>
                                <a style={{ fontSize: '20px', marginTop: '5px', marginLeft: '10px' }}>Next Tab</a>
                            </center>
                        </div>

                    </div>
                </Font>
            </div>

        </React.Fragment>

    );
}

export default Building;