import React, { useState } from 'react'
import { useCart } from '../context/Context'
import { Button, ListGroup } from 'react-bootstrap'

const Cart = () => {
  const {
    state:{cart}}=useCart();

    const[total,setTotal]=useState()
  return (
  <div className='home'>
  <div className='productContainer'>
  <ListGroup>
    {
      cart.map(prod=>{
     <span>{prod.name}</span>

      })
    }
  </ListGroup>
  </div>
<div className='filters summary'>
  <span className='title'> Subtotal({cart.length})items</span>
  <span style={{fontWeight:700,fontSize:20}}>Total:${total}</span>
  <Button type='button' disabled={cart.length===0}>
    Proceed to checkout
  </Button>

</div>

  </div>
  )
}

export default Cart
