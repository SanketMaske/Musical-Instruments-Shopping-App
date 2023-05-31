
import './App.css';
//import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link, Route, Routes } from 'react-router-dom';
import LoginCom from './Components/LoginCom';

import AdminHome from './Components/AdminHome';
import { useSelector } from 'react-redux';
import LogoutComp from './Components/LogoutComp';
import UserHome from  './Components/UserHome';
import SellerHome from  './Components/SellerHome';
import ViewProducts from './Components/ViewProducts';
import UserReg from './Components/Registration';
import AddProducts from './Components/AddProducts';
import ViewCart from './Components/ViewCart';
//import ApproveSeller from './Components/ApproveSeller';
import Home from './Components/Home';
import allImg from './images/all1.jpg';
import approveseller from './Components/SellerApproval';
import SellerApproval from './Components/SellerApproval';
import ViewProductsBySeller from './Components/ViewProductsBySeller';
import AboutUs from './Components/AboutUs';
import ContactUs from './Components/ContactUs';




function App() {
const mystate=useSelector((state)=>state.logged);

  return (
    <div className="App">
      <div style={{display:mystate.loggedIn ? "none":"block"}}>
         <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/login">MISA</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/home">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="userreg"> Registration</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="aboutus"> About us</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="contactus"> Contact us</Link>
                </li>
               
              </ul>
            </div>
           </nav>
       <h1 className="bg-dark text-white"> Musical Instruments Shopping App</h1>
       <img  width={1275} height={400} src={allImg}/>
       <h3 className="bg-danger text-white">Click On Login if already registered..Register first if not registered</h3>

      </div>
      <Routes>
      <Route path="/login" element={<LoginCom/>}/>

      
      <Route path="/userreg" element={<UserReg/>}/>
      <Route path="/admin_home" element={<AdminHome/>}>
        <Route path="approveseller" element={<SellerApproval/>}/>
        <Route path="view_products" element={<ViewProductsBySeller/>}/>
      </Route>
      <Route path="/user_home" element={<UserHome/>}>
          <Route path="view_products" element={<ViewProducts/>}/>
          <Route path="view_cart" element={<ViewCart/>}/>
      </Route>
      <Route path="/seller_home" element={<SellerHome/>}>
         <Route path="addproducts" element={<AddProducts/>}/>
         <Route path="view_products" element={<ViewProductsBySeller/>}/>
      </Route>
      <Route path="/home" element={<LoginCom/>}/>
      <Route path="/aboutus" element={<AboutUs/>}/>
      <Route path="/contactus" element={<ContactUs/>}/>
      
    </Routes>
    </div>
  );
}

export default App;
