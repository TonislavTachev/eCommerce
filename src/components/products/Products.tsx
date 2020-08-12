import React, {useRef} from 'react'
import {product} from '../../types'
import {RootState} from '../../reducers'
import {useSelector, useDispatch} from 'react-redux'
import {getProducts, addToBasket2} from '../../actions/actions';
import "../../App.css"
import { Card, CardTitle, CardText, Col, CardBody, CardLink, CardSubtitle, Button} from 'reactstrap';
const Products: React.FC<{products:product}> = ({products}) => {
    const productState = useSelector((state: RootState) => state.user);
    const dispatch = useDispatch();
    const ref = useRef(null);

    const addToCart = () =>{
        const obj = {
            name:products.name,
            image:products.image,
            price:products.price
        }
        dispatch(addToBasket2(obj));
    }
    
    return (
        <Col md="4" style={{marginBottom:15}} >
           <Card className="product">
        <CardBody>
          <CardTitle><b>{products.name}</b></CardTitle>
        </CardBody>
        <img width="100%" style={{height:350}} src={products.image} alt="Card image cap" />
        <CardBody>
           <CardText style={{fontSize:18}}>Price: <b>{products.price}$</b></CardText>
            <Button color="danger" onClick={addToCart} block><img src="https://image.flaticon.com/icons/png/512/263/263142.png" style={{height:25, marginTop:-6, marginRight:10, color:'#fff'}}/>Add to cart</Button>
        </CardBody>
      </Card>
        </Col>
    )
}

export default Products;
