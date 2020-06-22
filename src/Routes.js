import React from 'react';
import {
  BrowserRouter ,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Home from "./routeComponent/Home/Home";
import Addproducts from "./routeComponent/Addproducts/Addproducts";
import Cart from "./routeComponent/Cart/Cart";
import Orders from "./routeComponent/Orders/Orders";

function App() {
  return (
      <div>
         <Navbar />
        <Switch>
          <Route path="/" exact render={() =>   <Home  />} />
          <Route path="/addproducts" exact render={() =>   <Addproducts />} />
          <Route path="/addproducts/:id" exact render={(props) =>   <Addproducts {...props} />} />
          <Route path="/addproducts/:id/edit" exact render={(props) =>   <Addproducts {...props} />} />
          <Route path="/cart" exact render={() =>   <Cart />} />
          <Route path="/orders" exact render={() =>   <Orders />} />
        </Switch>
      </div>
  );
}

export default App;