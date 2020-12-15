import "./App.css";
import Main from "./components/home/main";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/login/login";
import Activity from "./components/activity/activity.page";
import Logiin from "./components/FamilyNextScreen/login";
import Building from "./components/building/building";
import Fuel from "./components/fuelusage/fuelusage.page";
import ViewEmissions from "./components/viewEmissions/viewemissions";
import Title from "./components/title/title";
import AddActivity from "./components/FamilyNextScreen/addActivity";
import TotalEmissions from "./components/totalemissions/totalemissions";
import Transport from "./components/transport/transport";
import Hotel from "./components/events/events";
import Freight from "./components/freight/freight";
import Construction from "./components/construction/construction";
import Home from "./components/FamilyNextScreen/home/home";
import Travel from "./components/FamilyNextScreen/travel/travel";
import Hotelstay from "./components/FamilyNextScreen/hotelstay/hotelstay";
import { useState } from "react";

function App() {
  const [toogle, setToogle] = useState(" ");
  const [back, setBack] = useState("");
  const toogleHandler = (val) => {
    setBack(toogle);
    setToogle(val);
  };
  const renderSwitch = () => {
    switch (toogle) {
      case "/organisation/sign-in":
        return <Login toogleHandler={toogleHandler} />;
      case "/familyNextScreen/sign-in":
        return <Logiin toogleHandler={toogleHandler} />;
      case "/activity":
        return <Activity toogleHandler={toogleHandler} />;
      case "/addActivity":
        return <AddActivity toogleHandler={toogleHandler} />;
      case "/family/add-activity":
        return <AddActivity toogleHandler={toogleHandler} />;
      case "/building":
        return <Building toogleHandler={toogleHandler} />;
      case "/view-emissions":
        return <Title toogleHandler={toogleHandler} back={back} />;
      case "/back-totalEmissions":
        return <Title toogleHandler={toogleHandler} />;
      case "/calculate-emissions":
        return <TotalEmissions toogleHandler={toogleHandler} />;
      case "/transport-and-travel":
        return <Transport toogleHandler={toogleHandler} />;
      case "/freight":
        return <Freight toogleHandler={toogleHandler} />;
      case "/hotel-stay":
        return <Hotel toogleHandler={toogleHandler} />;
      case "/construction":
        return <Construction toogleHandler={toogleHandler} />;
      case "/home":
        return <Home toogleHandler={toogleHandler} />;
      case "/travel":
        return <Travel toogleHandler={toogleHandler} />;
      case "/hotelstay":
        return <Hotelstay toogleHandler={toogleHandler} />;
      case "/main":
        return <Main toogleHandler={toogleHandler} />;
      case "/back-activity":
        return <Login toogleHandler={toogleHandler} />;
      case "/organization-back-event":
        return <Activity toogleHandler={toogleHandler} />;
      case "/organization-back-construction":
        return <Activity toogleHandler={toogleHandler} />;
      case "/organization-back-freight":
        return <Activity toogleHandler={toogleHandler} />;
      case "/organization-back-transport":
        return <Activity toogleHandler={toogleHandler} />;
      case "/organization-back-business":
        return <Activity toogleHandler={toogleHandler} />;
      case "/back-addactivity":
        return <Logiin toogleHandler={toogleHandler} />;
      case "/family-back-login":
        return <Main toogleHandler={toogleHandler} />;
      case "/family-back-home":
        return <AddActivity toogleHandler={toogleHandler} />;
      case "/family-back-hotel":
        return <AddActivity toogleHandler={toogleHandler} />;
      case "/family-back-travel":
        return <AddActivity toogleHandler={toogleHandler} />;
      default:
        return <Main toogleHandler={toogleHandler} />;
    }
  };

  return (
    <div className="App">
      <Router>
        <div className="auth-wrapper">
          <div className="auth-inner">
            {renderSwitch()}
            {/* <Route exact path='/' component={Main} />
            <Route path="/organisation/sign-in" component={Login} />
            <Route path="/activity" component={Activity} />
            <Route path="/family/add-activity" component={AddActivity}  />
            <Route path="/building" component={Building} />  
            <Route path="/building/:var" component={Building} />   
            <Route path="/view-emissions" component={Title} />
            <Route path="/calculate-emissions" component={TotalEmissions} />   */}
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
