import React,{Component} from 'react';
import Header from '../Header/Header';
import { MDBCol, MDBContainer, MDBRow } from 'mdbreact';
import './Login.css';
class Login extends Component{
render(){
  return(
    <div className="ln">
       <Header/>
       <div className="bg">
          <h1 className="heading">Sign In/Register</h1>
          <MDBContainer style={{ backgroundColor: "white" }}>
             
                 <MDBRow className="loginpage">
                    <MDBCol md="6" sm="6">
                   
                      <h2 className="txt">Sign In</h2>
                      <MDBCol md="12" sm="12">
                      <form>
                      <input
              type="text"
              id="defaultFormRegisterNameEx"
              className="ftext form-control"
            /></form>
                      </MDBCol>
                    
                    </MDBCol>             
                 </MDBRow>
             
          </MDBContainer>
       </div>
    </div>
  );
}
}
export default Login;