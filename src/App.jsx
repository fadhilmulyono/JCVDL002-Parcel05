import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import ProductDetail from './pages/ProductDetail';
import MyNavbar from "./components/MyNavbar";
import Footer from "./components/Footer";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <MyNavbar/>  
          <Switch>
            <Route component={Login} path="/login" />
            <Route component={Register} path="/register" />
            <Route component={Admin} path="/admin" />
            <Route component={ProductDetail} path="/product-detail/:productId" />
            <Route component={Home} path="/" />
          </Switch>
        <Footer/>
      </BrowserRouter>
    );
  }
}

export default App;
