import React from 'react'
import { useCart } from '../context/Context'
import SingleProduct from './SingleProduct';
import './style.css'
import Filters from './Filters'

const Home = () => {
 const {state:{products}}= useCart()
 console.log(products);
  return (
    <div className='home'>
    <Filters></Filters>    
    <div className='productContainer'>
      {
        products.map((prod)=>{
        return <SingleProduct prod={prod} key={prod.id}/>
        })
      }
    </div>
    </div>
  )
}

export default Home
