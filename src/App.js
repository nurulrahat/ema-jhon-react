import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import Order from './components/Order/Order';
import Manage from './components/Manage/Manage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Nomatch from './components/Nomatch/Nomatch';
import ProductDetails from './components/ProductDetail/ProductDetails';
import LogIn from './components/LogIn/LogIn';
import Shipment from './components/Shipment/Shipment';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext=createContext() ;
function App() {
const [loggedInUser,setLoggedInUser]= useState({})
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
      <h2>Logged In from: {loggedInUser.email}</h2>
    
     
     <Router>
     <Header></Header>
       <Switch>
       <Route exact path="/">
         <Shop></Shop>
       </Route>
       <Route path="/shop">
         <Shop></Shop>
       </Route>
       <Route path="/order">
         <Order></Order>
       </Route>
       <PrivateRoute path="/manage">
         <Manage></Manage>
       </PrivateRoute>
      <Route path="/product/:productKey">
        <ProductDetails></ProductDetails>
      </Route>
      <PrivateRoute path="/shipment">
         <Shipment></Shipment>
       </PrivateRoute>
       <Route path="/login">
         <LogIn></LogIn>
       </Route>
       <Route path="*">
         <Nomatch></Nomatch>
       </Route>
       </Switch>
       
     </Router>
    </UserContext.Provider>
  );
}

export default App;
