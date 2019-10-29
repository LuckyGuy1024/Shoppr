import { CartActionTypes } from "./cart.types"
import { addItemToCart, clearItemFromCart } from "./cart.utils"

const initialState = {
    hidden:true,
    cartItems:[]
}

const cartReducer = (state = initialState, action) => {
    switch (action.type){
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return{
                ...state,
                hidden: !state.hidden
            }
        case CartActionTypes.ADD_ITEM:
            return{
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        case CartActionTypes.REMOVE_ITEM:
            return{
                ...state,
                cartItems: state.cartItems.filter(item => item.id !== action.payload)
            }
        case CartActionTypes.CLEAR_ITEM:
            return{
                ...state,
                cartItems: clearItemFromCart(state.cartItems, action.payload)
            }
        default:
            return state
    }
}

export default cartReducer