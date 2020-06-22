import React, { Component } from "react";
import { connect } from 'react-redux';
import { addToCart } from "../store/action";

class SingleItem extends Component{
    constructor(props){
        super(props)
        this.state={
            category:''
        }
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    render(){
        const { data}= this.props
        console.log(this.props)
        return(
            <>
                <div className="mt-2">
                    <select name="category" className="btn btn-secondary" onChange={(e)=>this.handleChange(e)}>
                        <option value="">select category</option>
                        {
                            data && data.map((ele,index)=>{
                                return(
                                    <option value={ele.name} className="dropdown-item" key={index}>{ele.name}</option>
                                )
                            })
                        }
                    </select>
                </div>
                <div className="d-flex justify-content-center">
                    <h5 className="card-title">Beer List</h5>
                </div>
                <table className="table table-striped table-dark">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">List</th>
                            <th scope="col">Image</th>
                            <th scope="col">Discription</th>
                            <th scope="col">Price</th>
                            <th scope="col">SelectProduct</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data && data.filter(item=>{
                                if(this.state.category==''){
                                    return true
                                }
                                else if(item.name===this.state.category)
                                    return true
                            }).map((ele,index)=>{
                                return(
                                    <tr key={index}>
                                        <th scope="row">{ele.id}</th>
                                        <td>{ele.name}</td>
                                        <td><img src={ele.image_url} height='100' className="img-fluid" alt={ele.name}/></td>
                                        <td>{ele.description}</td>
                                        <td>{ele.ibu}</td>
                                        <td><button onClick={()=>this.props.ADD_TO_CART_ARRAY(ele.id)} className="btn btn-outline-warning">Add Item</button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </>
        )
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        ADD_TO_CART_ARRAY:(payload)=>dispatch(addToCart(payload))
    }
}

export default connect(null,mapDispatchToProps)(SingleItem);