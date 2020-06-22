import React from "react";
function SingleItem(props){
    return(
        <>
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
                        props.data && props.data.map((ele,index)=>{
                            return(
                                <tr key={index}>
                                    <th scope="row">{ele.id}</th>
                                    <td>{ele.name}</td>
                                    <td><img src={ele.image_url} height='100' className="img-fluid" alt={ele.name}/></td>
                                    <td>{ele.description}</td>
                                    <td>{ele.ibu}</td>
                                    <td><button onClick={()=>this.props.handleClick} className="btn btn-outline-warning">Add Item</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}
export default SingleItem;