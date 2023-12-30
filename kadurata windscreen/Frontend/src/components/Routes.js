import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
// import Home from './Home';
import Details from './Details';
import AdminControl from './AdminControl';
import PrivateRoute from './PrivateRoute';
import Reset from './Reset';
import  SetPassword from './SetPassword'
import ShowData from './ShowData';
import four  from './four'
import Home from './home/HomeIndex';
import About from './about/AboutIndex';
import Navbar from './navbar/NavBar';
import Contact from './contact/ContactIndex';
import Service from './service/ServiceIndex';
import Addver from './advetesment/add';
import Footer from './footer/Footer';
const Routes = () => {
    return (
        <>
        <Navbar />
            <Switch>
              
                <Route exact path="/" > <Home />  </Route>
                <Route exact path="/about" > <About />  </Route>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/signup" ><Signup /></Route>
                <Route exact path="/contact" ><Contact />  </Route>
                <Route exact path="/service" > <Service /> </Route>
                <Route exact path="/Add" ><Addver /> </Route>
                {/* <PrivateRoute exact path="/detail" component={Details}/> */}
                {/* <Route exact path="/admin"><Admin /></Route> */}
                {/* <PrivateRoute exact path='/all-details' component={AdminControl}/> */}
                <Route exact path="/reset" component={Reset}/>
                <Route exact path="/set-password/:token" component={SetPassword}/>
                <PrivateRoute exact path="/showdata" component={ShowData}/>
                <Route path="*" component={four}/>
                {/* <Route exact path="/deatails" > <Details />  </Route> */}
            </Switch>
            <Footer />
        </>
    )
}
export default Routes;