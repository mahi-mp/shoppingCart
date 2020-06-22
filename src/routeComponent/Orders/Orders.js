import React, { Component } from 'react';

class Orders extends Component{
    constructor(props){
        super(props)
        this.state={
            data:[]
        }
    }

    componentDidMount(){
        fetch(" https://api.punkapi.com/v2/beers")
        .then((response)=>response.json())
        .then((response)=>{
            this.setState({
                data:response
            });
        })
    }

    render(){
        return(
            <div className="container">
                <div className="d-flex justify-content-center">
                    <h5 className="card-title">Beer List</h5>
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
                            this.state.data && this.state.data.map((ele,index)=>{
                                return(
                                    <tr key={index}>
                                        <th scope="row">{ele.id}</th>
                                        <td>{ele.name}</td>
                                        <td><img src={ele.image_url} height='100' className="img-fluid" alt={ele.name}/></td>
                                        <td>{ele.description}</td>
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

export default Orders;