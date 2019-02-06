import React from 'react';
import {Link} from 'react-router-dom';
import './Home.css';
import convention1 from '../../images/convention1.jpg';
import { MDBContainer, MDBRow, MDBCol, Button, Modal, ModalBody,  ModalFooter  } from 'mdbreact';
import Header from '../Header/Header';

class Home extends React.Component{
    render(){
        return(
            <div>
                {/* <h1>Home Page</h1>
                <Link to="/Login">Redirect To Login</Link> */}
               <Header/>
                 <div className="row imageconvention">
          <section style={{
            backgroundImage: 'url(' + convention1.png + ')', width: '100%',
            height: '300px'
          }}> 
            <div className="mask  d-flex justify-content-center align-items-center">
            <p>
           For Get quality food for good health at
              
              </p></div> <div className="mask  d-flex justify-content-center align-items-center">
              <p> My Village foods!</p>
            </div>
           </section> 
        </div>
        <div className="displayimages" style={{ justifyContent: 'center' }}>
          <div className="row eximages">
          <p className="pad"> Purity promised </p>
          </div>
        </div>
        <div className="row maintxt">
          <MDBCol md="12">
            <div className="row maintitle">
              <h1>HOW IT WORKS
            <p className="ptxt">Get quality food for every meal</p>
              </h1>
            </div>
          </MDBCol>
        </div>
        <div className="row cardtxt" style={{ justifyContent: 'center' }}>
          <div className="row txtcard">
            <div className="col-md-4">
              <a className="cardimgtxt">
                <img src={require('../../images/1circle.png')} />
                <p className="cardstxt">Select a Product &amp; Quntity Of Product</p>
              </a>
            </div>
            <div className="col-md-4">
              <a className="cardimgtxt">
                <img src={require('../../images/2circle.png')} />
                <p className="cardstxt">Fill your basic details of the address to deliver</p>
              </a>
            </div>
            <div className="col-md-4">
              <a className="cardimgtxt">
                <img src={require('../../images/3circle.png')} />
                <p className="cardstxt">Pay the final amount &amp; Get Your poduct delivered</p>
              </a>
            </div>
          </div>
        </div>
        <div className="row txtcard">
          <h1> About Us</h1>
<p>My Village Foods established in 2009. Since its inception, the company has developed into a professional organization that has gained a wide reputation of being a reliable and most successful in the agricultural product arena.

Backed with a strong technical support from the most qualified professionals in the industry, My Village Foods, with its core team of young professionals make a perfect blend of young vigor and vast experience. Our products are customized to individual clients’ specific requirements. We understand the customer’s business thoroughly & our client engagement system allows us to become an extension of your staff and driving you to complete satisfaction. We thrive on our clients’ success and seek partnerships that nurture a long lasting relationship.

My Village Foods is one of our brands has already established in US market.</p>

        </div>
        <div className="row maintitle">
          <h1><section className="letstxt" style={{ marginLeft: '35%' }}>LET'S TALK</section>
            <p className="ptxt">Get Personalized assistance to help you discover, Request sample and supervise your Order.</p>
          </h1>
        </div>
        <MDBContainer className="frmtxt">
          <MDBRow style={{ justifyContent: 'center' }}>
            <MDBCol md="5">
              <form>
                <input
                  type="text"
                  id="defaultFormContactNameEx"
                  className="form-control" placeholder="Your name"
                />
                <br />
                <MDBRow>
                  <MDBCol md="6">
                    <input
                      type="text"
                      id="defaultFormContactEmailEx"
                      className="form-control"
                      placeholder="Mobile"
                    />
                  </MDBCol>
                  <MDBCol md="6">
                    <input
                      type="email"
                      id="defaultFormContactEmailEx"
                      className="form-control"
                      placeholder="City"
                    />
                  </MDBCol>
                </MDBRow>
                <br />
                <MDBRow>
                  <MDBCol md="6">
                    <input
                      type="text"
                      id="defaultFormContactEmailEx"
                      className="form-control"
                      placeholder="Event Type"
                    />
                  </MDBCol>
                  <MDBCol md="6">
                    <input
                      type="text"
                      id="defaultFormContactEmailEx"
                      className="form-control"
                      placeholder="Date ?"
                    />
                  </MDBCol>
                </MDBRow>
                <br />
                <textarea
                  type="text"
                  id="defaultFormContactMessageEx"
                  className="form-control"
                  rows="5"
                  placeholder="Enter Your Requirements"
                />
                <br />
                <p className="text-center" >
                  <button type="submit" name="command" className="btn btn-danger">Request Call Back</button>
                  <a href="#" className="btn btn-danger">Explore More &emsp;<i className="fa fa-arrow-right"></i></a>
                  <br />
                  <br />
                  <span className="txtex" style={{ justifyContent: 'center' }}> Whatsapp or Call myvillagerice.com at 7702053510 </span>
                  <br /><br />
                  <span className="txtex1"> (OR)</span>
                  <br /><br />
                  <span className="txtex2"> Want to Order our products? <a href="/products">Order Now</a></span>
                </p>
              </form>
            </MDBCol>
          </MDBRow>
        </MDBContainer> 
            </div> 
        )
    }
}

export default Home;