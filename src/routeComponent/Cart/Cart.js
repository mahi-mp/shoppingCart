import React, { Component } from 'react';
import { connect } from 'react-redux';
import CartItem from "../../components/CartItem";

class Cart extends Component{
    constructor(props){
        super(props)
        this.state={
            data:this.props.cartArray,
        }
    }
    render(){
        return(
            <div className="container mt-4">
                {
                    this.state.cartArray && this.state.cartArray.length>0?
                    <div className="my-3">
                        <label>Enter Name</label>
                        <input  type="text" />
                        <label>Enter Phone</label>
                        <input type="text" />
                        <button className="btn btn-outline-primary">Place Order</button>
                    </div>
                    :''
                }
            <CartItem cartArray={this.state.cartArray} />
            </div>
        )
    }
}

const MapStateToProps=state=>{
    return{
        cartArray:state.cartArray
    }
}

export default connect(MapStateToProps,null)(Cart);