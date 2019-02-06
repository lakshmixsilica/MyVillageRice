
import React,{Component} from 'react';
import Header from '../Header/Header';
import './Products.css';
import logo from '../../images/logo.jpg';
import Basmati from '../../images/Basmati.jpg';
import matta from '../../images/matta.jpg';
import Ponni from '../../images/Ponni.jpg';
import Rice from '../../images/Rice.jpg';

class Products extends Component{

    constructor(props)
    {
        super(props);
        this.state={
            productdetails:[],
            id:'',ProductId:'', Productname:'',Price:'',Quantity:'',weight:'',ShortDescription:'',LongDescription:'',Remarks:'',Available:'',HSNcode:'',SGST:'',CGST:'',Discount:'',
            brand:'',Image:'',Manfacturedate:'',Expirydate:'',createdate:'',Updateddate:'',cartlist:[]

        }
        // this.getproductdetails=this.getproductdetails.bind(this);
        this.AddtoCart=this.AddtoCart.bind(this);
        
    }
    componentDidMount()
    {
       this.getproductdetails();
    } 
    getproductdetails()
    { var Available1= "Available";
        fetch('http://localhost:64017/api/Product/Productsavailabe?Available='+Available1).then((res)=>res.json()).then((res)=>{
         this.setState({
            productdetails:res
         });
      })
    }


    AddtoCart(val){

    // alert(val);
        var cartno = localStorage.getItem('cartno');
        localStorage.removeItem('cartno')
        
        var cartno1;
       
        if (cartno != null) {
            if(cartno.includes(val) == false){
           cartno1 = cartno +','+ val;}
        else{
            cartno1 = cartno;
            alert("item is already added to cart")}
       localStorage.setItem('cartno',cartno1);
       alert(localStorage.getItem('cartno'));
    }
    else{
        localStorage.setItem('cartno',val);
    }}
    
render(){
    return(
        <div>
         <Header/>
         <div className="bg">
              <h1 className="heading">All Products</h1>
              <div className="container" style={{backgroundColor:"white",paddingTop:"3%"}}>
        <div className="row">
          <div className="col-sm-3 col-md-3"  style={{paddingTop:"3%"}}>
          
             <h5 className="txt">CATEGORIES</h5>
             <ul className="list-group">
                          <li className="list-group-item box"><a href='\'><span className="badge">4</span></a>Red Rice
                       </li>
                         <li className="list-group-item box">
                          <a href='\'><span className="badge">4</span></a>Basmathi</li>
                            <li className="list-group-item box" > <a href='\'><span className="badge">4</span></a>Idly Rice</li>
             </ul>
            </div>
            <div className="col-sm-9 col-md-9">
                 <div className="row">
                 {
              this.state.productdetails.map((item,index)=>(<div className="col-sm-4 col-md-4 cimg" key={index}>
                          <a href='\'>
                           <img style={{ height: "130px" }} src={Basmati} />
                           </a>
                           <div className="details">
                              <div><a href='\'>{item.Productname}</a></div> 
                               <div><span>₹{item.Price}</span></div>
                           </div>
                           <div>
                           <button className="btn btn-sm add" onClick={(e)=>this.AddtoCart(item.id)} >Add To Cart</button>
                           </div>
                      </div>
                ))}
                    
                 </div>
            </div>
        </div>
       </div>
        </div>
        </div> 
    );
}
}
export default Products;
