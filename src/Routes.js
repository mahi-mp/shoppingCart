import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Home from "./routeComponent/Home/Home";
import Addproducts from "./routeComponent/Addproducts/Addproducts";
import Cart from "./routeComponent/Cart/Cart";
import Orders from "./routeComponent/Orders/Orders";
import ProductId from "./components/ProductId";

function App() {
  return (
      <div>
         <Navbar />
        <Switch>
          <Route path="/" exact render={() =>   <Home  />} />
          <Route path="/products" exact render={() =>   <Addproducts />} />
          <Route path="/products/:id" exact render={(props) =>   <ProductId {...props} />} />
          {/* <Route path="/products/:id/edit" exact render={(props) =>   <Addproducts {...props} />} /> */}
          <Route path="/cart" exact render={() =>   <Cart />} />
          <Route path="/orders" exact render={() =>   <Orders />} />
        </Switch>
      </div>
  );
}

export default App;