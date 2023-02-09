import React from 'react';
import { BrowserRouter as Router,Routes as Switch,Route } from 'react-router-dom'
import Navbar from './components/layouts/Navbar';
import Register from './components/authentications/Register'
import Login from './components/authentications/Login'
import ViewPrediction from './components/predictions/ViewPredictions'
import CreatePrediction from './components/predictions/CreatePrediction'
import Home from './components/Home';
import Error from './components/layouts/Error';


const Routing = () => {
  return (
    <div>
      <Router>
        <Navbar/>
        <Switch>
            <Route element={<Home/>} path={'/'} />
            <Route element={<Login/>} path={'/login'} />
            <Route element={<Register/>} path={'/register'} />
            <Route element={<CreatePrediction/>} path={'/predict'} />
            <Route element={<ViewPrediction/>} path={'/results'} />
            <Route element={<Error/>} path={'#'} />
        </Switch>
      </Router>
    </div>
  )
}

export default Routing
