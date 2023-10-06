import React from 'react'
import { Badge, Button, Container, FormControl, Navbar } from 'react-bootstrap'
import {Dropdown} from'react-bootstrap'
import {BsFillCartFill} from 'react-icons/bs'
import { useCart } from '../context/Context'
import { AiFillDelete } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Header = () => {
  const {state:{cart},
dispatch }=useCart()
  return (
    <div>
      <Navbar bg='dark' variant='dark' style={{height:80}}>
    <Container>
      <Navbar.Brand >
      <a href='/home'> Shopping Cart </a> 
      </Navbar.Brand>
      <Navbar.Text className='search'>
      <FormControl placeholder='search a product'
      className='m-auto' style={{width:500}}/>
      </Navbar.Text>

      <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        <BsFillCartFill color='white' fontSize='250=px'/>
        <Badge>{cart.length}</Badge>
      </Dropdown.Toggle>

      <Dropdown.Menu style={{minWidth:370}}>
      {cart.length > 0 ? (
                <>
                  {cart.map((prod) => (
                    <span className="cartitem" key={prod.id}>
                      <img
                        src={prod.image}
                        className="cartItemImg"
                        alt={prod.name}
                      />
                      <div className="cartItemDetail">
                        <span>{prod.name}</span>
                        <span>₹ {prod.price.split(".")[0]}</span>
                      </div>
                      <AiFillDelete
                        fontSize="20px"
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: prod,
                          })
                        }
                      />
                    </span>
                  ))}
         <Link to='/cart'>
          <Button style={{width:'95%', margin:"0 10px"}}>
            Go to Cart
          </Button>
         </Link>
        </>
      
        ) : ( <span style={{padding:10}}>Cart is Empty</span>)}
        
      </Dropdown.Menu>
    </Dropdown>

    </Container>
      </Navbar>
    </div>
  )
}

export default Header
