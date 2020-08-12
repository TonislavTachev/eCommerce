import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import '../App.css'
import {addToBasket, getProducts} from '../actions/actions';
import Products from './products/Products'
import {Row, Container} from 'reactstrap'
import {RootState} from '../reducers';
const Home = () => {
    const productState = useSelector((state: RootState) => state.user);
    const dispatch = useDispatch();

    useEffect(()=>{
      dispatch(getProducts());
    },[getProducts])
  
    return (
        <Container>
        <Row style={{marginTop:25}}>
        {productState.basket.map((el,i) => <Products products={el}/>)}
        </Row>
        </Container>
    )
}

// const mapStateToProps = (state:UserState) =>{
//     user:state.user
// }
export default Home;
