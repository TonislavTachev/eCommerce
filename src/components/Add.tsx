import React, { useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom';
import {addToBasket} from '../actions/actions';
import {RootState} from '../reducers';
import { Form, FormGroup, Label, Input, FormFeedback, FormText, Button, Container, Card, CardBody, Row, Col, Alert} from 'reactstrap';
import { product } from '../types';
import { stringify } from 'querystring';
import { type } from 'os';

const Add = () => {
    const productState = useSelector((state: RootState) => state.user);
    const dispatch = useDispatch();
    const [error, setError] = useState('')
    const [visible, setVisible] = useState(false);
    const onDismiss = () => {
        setVisible(false);
        setError('');
    }
    
    const history = useHistory();

    const [product, setProduct] = useState({
        name:"",
        price:0,
        image:""
    })

    const {name, price, image} = product

    const onText = (e: React.ChangeEvent<HTMLInputElement>) =>{
         const {name, value} = e.target;
         setProduct({...product,[name]:value});
    }

    const addToBask = () =>{
       
       const productToAdd = {
           name: product.name,
           price: product.price,
           image:product.image
       }

       if(name === '' || price === 0 || image === ''){
           console.log('wtf');
            setError("Please fill in the required fields");
            setVisible(true);
       } else {
         dispatch(addToBasket(productToAdd));
         history.push('/');
       }
    }



    return (
    <Container>
       <Alert color="danger" style={{marginTop:20}} isOpen={visible} toggle={onDismiss}>
        {error}
      </Alert>
        <Row style={{marginTop:50}}>
           <Col md="2"></Col>
           <Col md="8">
             <Card body className="product-add">
               <Form>
                 <FormGroup>
                     <Label for="exampleEmail"><b>Product name</b></Label>
                         <Input onChange={onText} name="name" value={name} />
                      <FormFeedback >Please specify a name for the product</FormFeedback>
                 </FormGroup>

                  <FormGroup>
                    <Label for="examplePassword"><b>Price</b></Label>
                         <Input onChange={onText}  name="price" value={price} />
                      <FormFeedback>Please specify a price for the product!</FormFeedback>
                 </FormGroup>

                <FormGroup>
                      <Label for="exampleEmail"><b>Image</b></Label>
                          <Input onChange={onText} name="image" value={image}/>
                          <FormFeedback>Please specify an Image for the product!</FormFeedback>
    
               </FormGroup>
         <Button block color="primary" onClick={addToBask}>Submit</Button>
       </Form>
       </Card>
       </Col>
       <Col md="2"></Col>
       </Row>
    </Container>
    )
}

export default Add;
