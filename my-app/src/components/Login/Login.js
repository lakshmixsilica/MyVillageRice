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
        this.Savedetails = this.Savedetails.bind(this);
        this.logindetails = this.logindetails.bind(this);
        this.sendmail = this.sendmail.bind(this);
        
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
    sendmail(e) {
      e.preventDefault();
      const { sentemail } = this.state;
      alert(sentemail)
      fetch(this.state.Url+'api/Customer/SendPasswordmail?email=' + sentemail, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      }).then((response) => response.json()).then((responseJson) => {
        // window.location.reload();
        this.toggle();
        this.setState({ sentemail: '' });
        return responseJson.success;
      })
  
    }
    logindetails(e) {
      var url = document.referrer;
      alert(url);
      var url1 = url.split('://')[1].split('/')[1]
      const { email, password, Firstname, Lastname, Email, Password, confirmpassword, items } = this.state
      e.preventDefault();
      if (email != '', password != '') {
        fetch(this.state.Url+'api/Customer/UserLogin?email='+email+'&&password='+password,{
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        }).then((response) => response.json())
          .then((response) => {
            if (response.Firstname != null && response.Email != null) {
              localStorage.setItem('Firstname', response.Firstname);
              localStorage.setItem('Email', response.Email);
              this.props.history.push("/" + url1);
              alert('Login Successfully');
            this.setState({email:'',password:''});
            }
            else { alert("Please Login with valid Email and Password"); }
            return response.success;
          }).catch((error) => {
            console.error(error);
            alert('Please Login with valid Email and Password');
          });
      }
    }
    Savedetails(e) {
      const { Firstname, Lastname, Email, Password, confirmpassword } = this.state;
      e.preventDefault();
      fetch(this.state.Url+'api/Customer/UserRegister', {
        method: 'POST',
        body: JSON.stringify({ Firstname: Firstname, Lastname: Lastname, Email: Email, Password: Password, confirmpassword: confirmpassword }),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      }).then((response) => response.json())
        .then((responseJson) => {
  
          window.location.reload();
  
          this.setState({ Firstname: '', Lastname: '', Email: '', Password: '', confirmpassword: '' });
          alert('Registered Successfully');
          return responseJson.success;
  
        })
        .catch((error) => {
          console.error(error);
          alert('failed');
        });
  
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
                  <input type="text" className="maintxt form-control" placeholder="Email" id="email" name="email"  onChange={this.handleChange} value={this.state.email} />
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
      <MDBBtn onClick={this.toggle} size="sm" color="#0c4d6c" className="btntxt1">Forgot your Password?</MDBBtn>
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