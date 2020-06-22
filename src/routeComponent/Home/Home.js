import React, { Component }  from 'react';
import SingleItem from "../../components/singleItem";
import { connect } from 'react-redux';
import CartItem from "../../components/CartItem";

class Home extends Component {
    constructor(props){
        super(props)
        this.state={
            productData:[]
        }
    }
    
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-8">
                        <SingleItem data={this.props.productData} />
                    </div>
                    <div className="col w-10">
                        <label>Cart</label>
                        <CartItem cartArray={this.props.cartArray} />
                    </div>
                </div>
            </div>
        )
    }
}

const MapStateToProps=state=>{
    return{
        productData:state.productData,
        cartArray:state.cartArray
    }
}

export default connect(MapStateToProps,null)(Home);