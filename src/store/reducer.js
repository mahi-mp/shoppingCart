import { ADD_QUANTITY, CART_ARRAY } from './actionType';
import data from '../data.json';

// const data= async()=>{
//     await fetch(" https://api.punkapi.com/v2/beers")
//     .then((response)=>response.json())
//     .then((response)=>{ response
//     })
// }

const initialState={
    productData:data,
    cartArray:[]

}

const reducer = (state = initialState,action)=>{
    switch(action.type){
        case ADD_QUANTITY:{
        return{
            productData:state.productData,
            }
        }

        case CART_ARRAY :{
            return{
                cartArray:state.cartArray
            }
        }

        default:{
         return{...state}
        }   
    }
}

export default reducer;