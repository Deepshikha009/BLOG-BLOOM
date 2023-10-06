import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useCart } from '../context/Context'
import Rating from './Rating'

const SingleProduct = ({prod}) => {
    //console.log(prod.name);

   const{state:{cart},dispatch}=useCart()
   console.log(cart);
   
  return <div className='products'>
  <Card>
  <Card.Img variant='top' src={prod.image} alt={prod.name}/>
  <Card.Body>
 <Card.Title>{prod.name}</Card.Title>
<Card.Subtitle style={{paddingBottom:10}}>
<span>${prod.price.split(".")[0]}</span>
{prod.fastDelivery?(
    <div>Fast Delivery</div>
):(
    <div>4 Days Delivery</div>
)}
<Rating rating={prod.ratings}/>
</Card.Subtitle>
{
    cart.some(p=>p.id===prod.id)?(<Button variant='danger' style={{marginRight:10}}
    onClick={()=>{
        dispatch ({
            type: "REMOVE_FROM_CART",
            payload: prod,
        })
        }}>
    Remove from cart
    </Button>):(<Button onClick={()=>{
    dispatch ({
        type: "ADD_TO_CART",
        payload: prod,
    })
    }}
    disabled={!prod.inStock}>
    {!prod.inStock ?"Out Of Stock":"Add To Cart"}
    </Button>)
}
  </Card.Body>

  </Card>
  </div>
}

export default SingleProduct
