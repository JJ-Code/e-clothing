import React from 'react';
import CustomButton, { } from "../custom-button/custom-button.component";
import './cart-dropdownstyles.scss';

const Cart = () => (
  <div className='cart-dropdown'>
    <div className='cart-items' />
    <CustomButton>GO TO CART</CustomButton>
  </div>
);

export default Cart;