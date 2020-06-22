import React, { Component } from 'react';
import { connect } from 'react-redux';
import {displayOrder} from '../../store/action';

class Orders extends Component{
    constructor(props){
        super(props)
        this.state={
            data:[]
        }
    }

    render(){
        console.log(this.props)
        return(
            <div className="container">
                {
                    this.props.orderConfirmed && this.props.orderConfirmed.map((ele,index)=>{
                   return(
                       <div key={index}>
                            <div>
                                <h5 className="card-title mr-2">Name : {ele.name}</h5>
                                <h5 className="card-title mr-2">Phone : {ele.phone}</h5>
                            </div>
                            <table className="table table-striped table-dark">
                                <thead>
                                    <tr>
                                        <th scope="col">Id</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Last</th>
                                        <th scope="col">Handle</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        ele.order && ele.order.map((item,index)=>{
                                            return(
                                                <tr key={index}>
                                                    <th scope="row">{item.id}</th>
                                                    <td>{item.name}</td>
                                                    <td><img src={item.image_url} height='100' className="img-fluid" alt={item.name}/></td>
                                                    <td>{item.description}</td>
                                                    <td>{item.qty}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                        )
                    })
                }
            </div>
        )
    }
}

const mapStateToProps=state=>{
    return{
        orderConfirmed:state.orderConfirmed
    }
}

export default connect(mapStateToProps,null)(Orders);