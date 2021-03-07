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

function App() {
  return (
    <div>
      <Header></Header>
     
     <Router>
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
       <Route path="/manage">
         <Manage></Manage>
       </Route>
      <Route path="/product/:productKey">
        <ProductDetails></ProductDetails>
      </Route>
       <Route path="*">
         <Nomatch></Nomatch>
       </Route>
       </Switch>
       
     </Router>
    </div>
  );
}

export default App;
