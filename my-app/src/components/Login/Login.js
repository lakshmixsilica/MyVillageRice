import React from 'react';
import './Login.css';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import Header from '../Header/Header';
import {Link} from 'react-router-dom';

class Login extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          modal: false,
          Firstname:'',Lastname:'',Email:'',Password:'',confirmpassword:'',email:'',password:'',sentemail:'',
          items: [],Url:'http://api.myvillagerice.com/'
        }
        this.handleChange=this.handleChange.bind(this);
        
      }
      toggle = () => {
        this.setState({
          modal: !this.state.modal
        });
      }
      handleChange(e) {
        const state=this.state
      state[e.target.id]=e.target.value;
      this.setState(state);
    }
    
    
   
    
    
   
    render(){
        return(
            <div className="ln">
     <Header/> 
      <div className="bg">
      <h1 className="heading">Sign In/Register</h1> 
      <div className="container" style={{backgroundColor:"white"}}>
      <section>
        <div className="row loginpage">
          <div className="col-sm-6 col-md-6">
            <form>
              <h2 className="txt">Sign In</h2>
              <div className="row">
                <div className="col-sm-12 col-md-12 form-group">
                  <input type="text" placeholder="Email" id="email" name="email" className="logintxt form-control" onChange={this.handleChange} value={this.state.email} />
                </div>
                <div className="col-sm-12 col-md-12 form-group">
                  <input type="password" placeholder="Password" id="password" name="password" className="maintxt form-control" onChange={this.handleChange} value={this.state.password} />
                </div>
                <div className="col-sm-12  col-md-12 form-group">
                  {/* <button className="btntxt">

                    Forgot your password?
                  </button> */}
                   <MDBContainer>
      {/* <MDBBtn onClick={this.toggle} size="sm" color="#0c4d6c" className="btntxt" >Forgot your Password?</MDBBtn> */}
      <MDBBtn onClick={this.toggle} size="sm" color="#0c4d6c" className="btntxt">Forgot your Password?</MDBBtn>
      <MDBModal isOpen={this.state.modal} toggle={this.toggle}  centered>
        <MDBModalHeader toggle={this.toggle}>Enter Email</MDBModalHeader>
        <MDBModalBody>
        <input type="text" placeholder="Email" id="sentemail" name="sentemail" className="maintxt form-control" onChange={this.handleChange} value={this.state.sentemail} />
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color="secondary" onClick={this.toggle}>Close</MDBBtn>
          <MDBBtn color="primary" onClick={this.sendmail}>Send</MDBBtn>
        </MDBModalFooter>
      </MDBModal>
      <button className="text" onClick={this.logindetails}>LOG IN <i className="fa fa-lock" aria-hidden="true"></i></button>
    </MDBContainer>

                 
                </div>
              </div>
            </form>
          </div>
          <div className="col-sm-6 col-md-6">
            <form>
              <h2 className="txt">Register a New Account</h2>
              <div className="row">
                <div className="col-sm-12 col-md-12 form-group">
                  <input type="text" id="Firstname" name="Firstname" placeholder="First Name" className="maintxt form-control" onChange={this.handleChange} value={this.state.FirstName}  />
                </div>
                <div className="col-sm-12 col-md-12 form-group">
                  <input type="text" id="Lastname" name="Lastname" placeholder="Last Name" className="maintxt form-control" onChange={this.handleChange} value={this.state.LastName} />
                </div>
                <div className="col-sm-12 col-md-12 form-group">
                  <input type="text" id="Email" name="Email" placeholder="Email" className="maintxt form-control" onChange={this.handleChange} value={this.state.Email} />
                </div>
                <div className="col-sm-12 col-md-12 form-group">
                  <input type="password" id="Password" name="Password" placeholder="Password" className="maintxt form-control" onChange={this.handleChange} value={this.state.Password} />
                </div>
                <div className="col-sm-12 col-md-12 form-group">
                  <input type="password" id="confirmpassword" name="confirmpassword" placeholder="Confirm Password" className="maintxt form-control" onChange={this.handleChange} value={this.state.ConfirmPassword} />
                </div>
                <div className="col-sm-12 col-md-12 form-group">
                  {/* <input type="checkbox" /> &nbsp; Recieve promotional emails */}
                </div>
                <div className="col-sm-12 col-md-12 form-group">
                  <button className="submit" onClick={this.Savedetails}>
                    Submit &nbsp;<i className="fa fa-arrow-right" aria-hidden="true"></i>
                  </button>
                </div>
                <Link to='/'>Back to home</Link>
              </div>
            </form>
          </div>
        </div>
      </section>
      </div>
      </div></div>
        )
    }
}

export default Login;