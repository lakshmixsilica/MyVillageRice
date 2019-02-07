import React, { Component } from 'react';
import logo from '../../images/logo.jpg';
import { Link } from 'react-router-dom';
import {MDBIcon} from 'mdbreact';
import './Header.css';

class Header extends React.Component {
    constructor (){
        super();
        this.state = { name:'',
          location : '',eventtype:'',guests:'',eventdate:'',result:'', modal2: false,
        };
        }
        toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });
    renderButton1() {
 if (this.state.name !== '' && this.state.name !== null) {
return (
 <div>
   <div className="dropdown">
<div className="row">
  <div className="col-sm-3 col-md-3">
    <button className="dropdown-item" type="button" id="dropdownMenuButton" aria-haspopup="true" aria-expanded="false">
      {this.state.name}
    </button>
  </div>
  {/* <div className="col-sm-3 col-md-3"> <Link to="/Login"><strong className="black-text">Login <i className="fa fa-lock" aria-hidden="true"></i> </strong></Link></div> */}
  <div className="col-sm-3 col-md-3"><button className="dropdown-item" href="/Userdetails">Profile</button></div> 
  {/* <div className="col-sm-3 col-md-3"> <Link to="/"><strong className="black-text">Logout <i className="fa fa-lock" aria-hidden="true"></i></strong></Link></div> */}
  <div className="col-sm-3 col-md-3"> <button className="dropdown-item" href="#" onClick={this.logout}>Logout</button></div> 
</div>
</div>
</div>
      );
    } else {
      return (
        <div>

          <Link to="/Login"><strong className="black-text">Login <i className="fa fa-lock" aria-hidden="true"></i></strong></Link>

        </div>
      )

    }
  }

    render(){
        return(
            <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-white">
              <a href='/'>
                <img style={{ height: "27px" }} src={logo} />
                <strong className="black-text">My Village Foods</strong></a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
    
              <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ marginLeft: "10%" }}>
                <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                <Link  className="nav-link" to="/Products">Shop</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">BLOG</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#">CONTACT</a>
              </li>
            </ul>

            <form className="form-inline my-2 my-lg-0">
              {this.renderButton1()}
              <div>
                {this.state.cartno}Items
</div>
              {/* <a href="/Shopingcart" style={{ color: 'black' }}> <i className="fa fa-shopping-cart fa-2x" aria-hidden="true"></i> </a> */}
              <Link style={{ color: 'black' }}  to='/Cart'><i className="fa fa-shopping-cart fa-2x" aria-hidden="true"></i></Link>
              </form>
          </div>
        </nav>
      </div>
        )
    }

}

export default Header;