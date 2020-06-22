import React, { Component }  from 'react';
import SingleItem from "../../components/singleItem";
import { connect } from 'react-redux';
import { addToCart } from "../../store/action";

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
                    {
                        this.props.cartArray.length>0?
                            <div className="col w-10 mt-4">
                                <div className="d-flex justify-content-center">
                                    <h5 className="card-title">Shopping Cart</h5>
                                </div>
                                <table className="table table-striped table-dark">
                                    <thead>
                                    <tr>
                                        <th scope="col">Id</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Quantity</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            this.props.cartArray && this.props.cartArray.map((ele,index)=>{
                                                return(
                                                    <tr key={index}>
                                                        <th scope="row">{ele.id}</th>
                                                        <td>{ele.name}</td>
                                                        <td>{ele.ibu}</td>
                                                        <td>{ele.qty}</td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        :''
                    }
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

const mapDispatchToProps=dispatch=>{
    return{
        addToCart:(payload)=>dispatch(addToCart(payload))
    }
}

export default connect(MapStateToProps,mapDispatchToProps)(Home);