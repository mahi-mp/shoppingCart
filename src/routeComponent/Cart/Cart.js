import React, { Component } from 'react';
import { connect } from 'react-redux';
import CartItem from "../../components/CartItem";
import { placeOrder, inQuantity,outQuantity } from "../../store/action";
class Cart extends Component{
    constructor(props){
        super(props)
        this.state={
            cartArray:this.props.cartArray,
            name:'',
            phone:''
        }
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    render(){
        return(
            <div className="container mt-4">
                {
                    this.state.cartArray && this.state.cartArray.length>0?
                    <div className="my-3">
                        <label>Enter Name</label>
                        <input className="mr-2" name="name"  onChange={(e)=>this.handleChange(e)}  type="text" />
                        <label>Enter Phone</label>
                        <input className="mr-2" name="phone"  onChange={(e)=>this.handleChange(e)} type="text" />
                        <button onClick={()=>this.props.pOrder({name:this.state.name,phone:this.state.phone, order:this.props.cartArray})} className="btn btn-outline-primary">Place Order</button>
                    </div>
                    :''
                }
                {
                    this.props.cartArray.length>0?
                        <CartItem handleAdd={this.props.inQuantity} handleRemove={this.props.outQuantity} cartArray={this.props.cartArray} />
                    :'No Items in the cart'
                }
            </div>
        )
    }
}

const mapStateToProps=state=>{
    return{
        cartArray:state.cartArray
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        inQuantity:(id)=>dispatch(inQuantity(id)),
        outQuantity:(id)=>dispatch(outQuantity(id)),
        pOrder:(payload)=>dispatch(placeOrder(payload))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart);