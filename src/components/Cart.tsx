import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {getCart} from '../actions/actions';
import {Container, Row, Col,  ListGroup, ListGroupItem, Table} from 'reactstrap';
import {RootState} from '../reducers'
const Cart = () => {
    const productState = useSelector((state: RootState) => state.user);
    const dispatch = useDispatch();
    

    //getting the cart of each user and displaying it
    useEffect(()=>{
       dispatch(getCart());
    },[])

    return (
      <Container>
        <div style={{background:'red', padding:10, marginTop:20, color:'white', width:'100%'}}>
            <h5>My orders</h5>
        </div>
        <Row style={{marginTop:20, padding:10, border:'1px solid grey'}}>
            <Col md="3">
               <p>Order# {productState.cart.id}</p>
            </Col>
            <Col md="6">
                <ul>
                  {productState.cart.items.map(el =>{return <li>{el.name}</li>})}
                </ul>
            </Col>
            <Col md="2">
                <p>{productState.cart.price} {productState.cart.currency}</p>
            </Col>
            <Col md="1">
            <p>{productState.cart.payment}</p>
            </Col> 
        </Row>
     </Container>
    )
}

export default Cart;
