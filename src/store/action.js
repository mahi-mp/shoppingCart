import { ADD_QUANTITY , CART_ARRAY} from './actionType';

export const addQuantity=(payload)=>{
    return{
        type:ADD_QUANTITY,
        payload:payload
    }
}

export const addToCart=(payload)=>{
    return{
        type:CART_ARRAY,
        payload:payload
    }
}