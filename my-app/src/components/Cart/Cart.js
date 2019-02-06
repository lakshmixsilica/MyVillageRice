import React, { Component } from 'react';
import './Cart.css';
import Header from '../Header/Header'
import Basmati from '../../images/Basmati.jpg';


class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 1, price1: 80, result: '', productdetails: [],
            id: '', ids: '', ProductId: '', Productname: '', Price: '', Quantity: '', weight: '', ShortDescription: '', LongDescription: '', Remarks: '', Available: '', HSNcode: '', SGST: '', CGST: '', Discount: '',
            brand: '', Image: '', Manfacturedate: '', Expirydate: '', createdate: '', Updateddate: '', cartlist: []
        };
        this.state.ids = localStorage.getItem('cartno')
         this.increment = this.increment.bind(this);
         this.decrement = this.decrement.bind(this);
        this.remove = this.remove.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.checkout = this.checkout.bind(this);
    }
    handleChange(e) {
        const state = this.state
        state[e.target.className] = e.target.value;
        this.setState(state);
    }
    componentWillMount() {
        this.getitems();
    }

    getitems() {
        fetch('http://localhost:64017/api/Product/GetProductlistbyid?id=' + this.state.ids).then(res => res.json()).then(details => {
            this.setState({
                productdetails: details
            });

        })
    }
    increment() {
        this.setState({
            counter: this.state.counter + 1
        });
        // const cal=this.state.counter * this.state.Price
        //     this.setState({
        //       result:cal
        //       });
    }
    decrement() {
        if (this.state.counter > 0) {
            this.setState({
                counter: this.state.counter - 1
            });
            //    const cal=this.state.counter * this.state.Price
            //  this.setState({
            //  result:cal
            //  });
        }
    }
  
    remove(val) {

        var idss = localStorage.getItem('cartno');
        alert(idss);

        var n = idss.replace('undefined', '').split(',');
        var j;
        //   alert(j);
        for (var i = 0; i < n.length; i++) {

            if (n[i] == val) {
                n[i] = null;
                j = n[i] + ',' + j

            }
            else {
                j = n[i] + ',' + j
            }

        }
        var y = j.replace(null, '');
        var w = y.replace('undefined', '');
        localStorage.removeItem('cartno');
        localStorage.setItem('cartno', w.replace('null', ''));
        window.location.reload();
    }
    checkout() {
        if (localStorage.getItem('Firstname') != null && localStorage.getItem('Email') != null) {
            this.props.history.push("/checkout")

        }
        else { this.props.history.push("/cosign") }
    }
    render() {
        return (
            <div>
                <Header />
                <div className="bg">
                    <h1 className="heading">Shopping Cart</h1>
                    <div className="container" style={{ backgroundColor: "white" }}>
                        <div className="row shopping">
                            <div className="col-sm-9 col-md-9">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>Item</th>
                                            <th>Quantity</th>
                                            <th>Item total</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            this.state.productdetails.map((item, index) => (<tr key={index}>
                                                <td>
                                                    <div className="col-sm-12 col-md-12">
                                                        <div className="img">
                                                            <img style={{ height: "130px" }} src={Basmati} />
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="col-sm-12 col-md-12">
                                                        <div className="h6">
                                                            <a href="/">PURPLE FITNESS TRACKER</a>
                                                            <p><small>₹{item.Price}</small></p>
                                                        </div>
                                                        <p>Bulk Pricing</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="col-sm-12 col-md-12">
                                                        <div className="num">
                                                            <div className="selectnumber">
                                                                {/* <input type="number"  name="quantity" min="1" max="100"  onChange={this.handleChange} /> */}
                                                                <button onClick={this.decrement} className="fa fa-minus dec"></button>&nbsp;
                                                <input type="text" className="number" id={item.id} value={this.state.counter} onChange={this.handleChange} />&nbsp;
                                                <button onClick={this.increment} className="fa fa-plus dec"></button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    {this.state.counter * item.Price}
                                                </td>
                                                {/* <td><button onClick={(e)=>this.remove(item.id)} ><i className="fa fa-times fa-1x" aria-hidden="true" ></i></button></td> */}
                                                <td><i className="fa fa-times fa-1x" aria-hidden="true" onClick={(e) => this.remove(item.id)} ></i></td>
                                            </tr>))}
                                    </tbody>
                                </table>
                                <div className="row">
                                    <div className="col-sm-4 col-md-4">
                                        <a href='/products'> <button className="updatebtn">
                                            <i className="fa fa-arrow-left" aria-hidden="true"></i>&nbsp;Continue Shopping
                        </button></a>
                                    </div>
                                    <div className="col-sm-4 col-md-4">
                                        <input type="text" id="Coupon code" name="Coupon code" placeholder="Coupon code" className="form-control" />
                                    </div>
                                    <div className="col-sm-4 col-md-4">
                                        <button className="updatebtn">
                                            Update cart &nbsp;<i className="fa fa-refresh" aria-hidden="true"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3 col-md-3">
                                <h3 className="txt">Order Summary  </h3>
                                <p className="h6 info">SHIPPING COSTS AND TAXES WILL BE EVALUATED DURING CHECKOUT</p>
                                <ul className="list-group">
                                    <li className="list-group-item"> Subtotal:
                        <span className="rupee" style={{ float: "right" }}> ₹79.00</span>
                                    </li>
                                    <li className="list-group-item">Total:
                           <span className="rupee" style={{ float: "right" }}> ₹79.00</span>
                                    </li>
                                </ul>
                                <div className="chckot">
                                    <button onClick={this.checkout} className="c" >Checkout</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );

    }
}
export default Cart;