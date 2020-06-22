import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addQuantity, addProduct } from "../../store/action";
import SingleItem from '../../components/singleItem';
import { Link } from 'react-router-dom';

class Addproducts extends Component{
    constructor(props){
        super(props)
        this.state={
            data:[]
        }
    }

    render(){
        const {productData}=this.props
        return(
            <div className="container mt-5">
                {/* <div className="my-5">
                    <Link><label className="btn btn-outline-success">Add ProductData</label></Link>
                    <Link><label className="btn btn-outline-success">Edit Product</label></Link>
                </div> */}
                <table className="table table-striped table-dark">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">List</th>
                            <th scope="col">Image</th>
                            <th scope="col">Discription</th>
                            <th scope="col">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            productData && productData.map((ele,index)=>{
                                return(
                                    <tr key={index}>
                                        <th scope="row"><Link to={`/products/${ele.id}`} >{ele.id} </Link></th>
                                        <td>{ele.name}</td>
                                        <td><img src={ele.image_url} height='100' className="img-fluid" alt={ele.name}/></td>
                                        <td>{ele.description}</td>
                                        <td>{ele.ibu}</td>
                                        {/* <td><button onClick={()=>this.props.ADD_TO_CART_ARRAY(ele.id)} className="btn btn-outline-warning">Add Item</button></td> */}
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps=state=>{
    return{
        productData:state.productData,
    }
}
export default connect(mapStateToProps,null)(Addproducts);