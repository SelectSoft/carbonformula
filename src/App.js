import './App.css';
import Main from './components/home/main'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from './components/login/login'
import Activity from './components/activity/activity.page'
import Building from './components/building/building'
import Fuel from './components/fuelusage/fuelusage.page'
import ViewEmissions from './components/viewEmissions/viewemissions'
import Title from './components/title/title'
import AddActivity from './components/FamilyNextScreen/addActivity'
import TotalEmissions from './components/totalemissions/totalemissions'
import { useState } from 'react';

function App() {
  const [toogle, setToogle] = useState(" ");
  const toogleHandler = (val) => {
    setToogle(val);
  }
  const renderSwitch = () => {
    switch (toogle) {
      case '/organisation/sign-in':
        return <Login toogleHandler={toogleHandler} />;
      case '/activity':
        return <Activity toogleHandler={toogleHandler} />;
      case '/family/add-activity':
        return <AddActivity toogleHandler={toogleHandler} />;
      case '/building':
        return <Building toogleHandler={toogleHandler} />;
      case '/view-emissions':
        return <Title toogleHandler={toogleHandler} />;
      case '/calculate-emissions':
        return <TotalEmissions toogleHandler={toogleHandler} />;
      default:
        return <Main toogleHandler={toogleHandler} />;
    }
  }

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
