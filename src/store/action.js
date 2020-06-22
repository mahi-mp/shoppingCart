import { DISPLAY_DATA , ADD_TO_CART_ARRAY, IN_QUANTITY,OUT_QUANTITY,PLACE_ORDER, DISPLAY_ORDER,ADD_TO_PRODUCT_DATA} from './actionType';

export const addQuantity=(payload)=>{
    return{
        type:DISPLAY_DATA,
        payload:payload
    }
}

export const addToCart=(payload)=>{
    return{
        type:ADD_TO_CART_ARRAY,
        payload:payload
    }
}

export const inQuantity=(payload)=>{
    return{
        type:IN_QUANTITY,
        payload:payload
    }
}

export const outQuantity=(payload)=>{
    return{
        type:OUT_QUANTITY,
        payload:payload
    }
}

export const placeOrder=(payload)=>{
    return{
        type:PLACE_ORDER,
        payload:payload
    }
}

export const displayOrder=(payload)=>{
    return{
        type:DISPLAY_ORDER,
        payload:payload
    }
}

export const addProduct=(payload)=>{
    return{
        type:ADD_TO_PRODUCT_DATA,
        payload:payload
    }
}