import React from "react";

function CartItem(props){
    return(
        <>
            <div className="d-flex justify-content-center">
            </div>
            <table className="table table-striped table-dark">
                <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">image</th>
                    <th scope="col">Discription</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                </tr>
                </thead>
                <tbody>
                    {
                        props.cartArray && props.cartArray.map((ele,index)=>{
                            return(
                                <tr key={index}>
                                    <th scope="row">{ele.id}</th>
                                    <td>{ele.name}</td>
                                    <td><img src={ele.image_url} width='100' height='100' alt={ele.name}/></td>
                                    <td>{ele.description}</td>
                                    <td>{ele.qty}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default CartItem;