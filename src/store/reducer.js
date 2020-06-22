import { DISPLAY_DATA , ADD_TO_CART_ARRAY, IN_QUANTITY,OUT_QUANTITY,PLACE_ORDER,DISPLAY_ORDER,ADD_TO_PRODUCT_DATA} from './actionType';
import data from '../data.js';

// const data= async()=>{
//     await fetch(" https://api.punkapi.com/v2/beers")
//     .then((response)=>response.json())
//     .then((response)=>{ response
//     })
// }

const initialState={
    productData:data,
    cartArray:[],
    orderConfirmed:[]
}

const reducer = (state = initialState,action)=>{
    switch(action.type){
        case DISPLAY_DATA:{
        return{
                productData:state.productData,
            }
        }

        case ADD_TO_CART_ARRAY :{
            let item=state.productData.find(ele=>ele.id===action.payload)
            let cartArray=[...state.cartArray]
            let flag=false;
            for(let i=0;i<state.cartArray.length;i++){
                if(cartArray[i].id==Number(action.payload)){
                    flag=true
                    cartArray[i].qty++
                    break
                }
            }
            if(!flag){
                cartArray=[...cartArray, {...item,qty:1}]
            }
            return{
                ...state,
                cartArray:cartArray
            }
        }

        case IN_QUANTITY:{
            let id=action.payload;
            let cartArray=state.cartArray.map(item=>item.id==id?{...item, qty:item.qty +1}:item)
            return {
                ...state,
                cartArray:cartArray
            }
        }

        case OUT_QUANTITY:{
            let id=action.payload;
            let cartArray=state.cartArray.map(item=>item.id==id?{...item, qty:item.qty -1}:item)
            cartArray=cartArray.filter(item=>item.qty>0)
            return {
                ...state,
                cartArray:cartArray
            }
        }
        
        case PLACE_ORDER:{
            return{
                ...state,
                orderConfirmed:[...state.orderConfirmed, {...action.payload}]
            }
        }

        case DISPLAY_ORDER:{
            return{
                ...state.orderConfirmed
            }
        }

        case ADD_TO_PRODUCT_DATA:{
            return {
                ...state.productData
            }
        }

        default:{
         return{...state}
        }   
    }
}

export default reducer;