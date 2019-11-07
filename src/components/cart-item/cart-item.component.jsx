import React from 'react'
import './cart-item.styles.scss'
import { removeItem } from '../../redux/cart/cart.actions'
import {connect} from 'react-redux';

const CartItem = ({item : {imageUrl, price , name, quantity, id} ,removeItem }) => {
    return (
        <div className="cart-item">
            <img src={imageUrl} alt=""/>
            <div className="item-details">
                <span className="name">{name}</span>
                <span className="price">{quantity} X ${price}</span>
                
            </div>
            <span className="delete" onClick={() => removeItem(id)}>&#10005;</span>
        </div>
    )
}
const mapDispatchToProps = dispatch => ({
    removeItem: item => dispatch(removeItem(item)),
})
export default connect(null, mapDispatchToProps)(CartItem);