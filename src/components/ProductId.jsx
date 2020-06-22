import React from "react";
import { connect } from "react-redux";

 function ProductId(props){
    let {id}=props.match.params;
    let data=props.productData.filter(ele=>ele.id==id)
    return(
        <div className="container mt-5">
            <table className="table table-striped table-dark">
                <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Image</th>
                    <th scope="col">Discription</th>
                    <th scope="col">price</th>
                </tr>
                </thead>
                <tbody>
                    {
                        data && data.map((ele,index)=>{
                            return(
                                <tr key={index}>
                                    <th scope="row">{ele.id}</th>
                                    <td>{ele.name}</td>
                                    <td><img src={ele.image_url} width='100' height='100' alt={ele.name}/></td>
                                    <td>{ele.description}</td>
                                    <td>{ele.ibu}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

const mapStateToProps=state=>{
    return{
        productData:state.productData,
    }
}
export default connect(mapStateToProps,null) (ProductId);
