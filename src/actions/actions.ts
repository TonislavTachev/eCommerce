import {product, ADD_TO_PRODUCTS,GET_PRODUCTS,UserActionTypes, ADD_TO_BASKET, GET_CART} from '../types';
import {Dispatch} from 'redux';
import axios from 'axios';
import data_json from '../data/eCommerce.json';


export const getProducts = () => async(dispatch: Dispatch<UserActionTypes>) =>{
      try{
          const res = await axios.get('/stuff');
          console.log(res);
          dispatch({type:"GET_PRODUCTS", payload:res.data.data});
      } catch(e){
          
      }
}

export const addToBasket = (newProduct: product) => async(dispatch: Dispatch<UserActionTypes>) =>{
    try{
        const config ={
            'Content-Type':'application/json'
        }

        const res = await axios.post('/add', newProduct, {
            headers:{
                'Content-Type':'application/json'
            }
        });
        console.log(res);
        dispatch({type:"ADD_TO_PRODUCTS", payload:res.data.data});
    } catch(e){
        
    }
}

export const addToBasket2 = (newProduct: product) => async(dispatch: Dispatch<UserActionTypes>) =>{
    try{
        const config ={
            'Content-Type':'application/json'
        }

        const res = await axios.post('/add_to_cart', newProduct, {
            headers:{
                'Content-Type':'application/json'
            }
        });
        console.log(res.data);
        dispatch({type:"ADD_TO_BASKET", payload:res.data});
    } catch(e){
        
    }
}

export const getCart = () => async(dispatch: Dispatch<UserActionTypes>) =>{
    try{
        const res = await axios.get('/cart');
        console.log(res.data);
        dispatch({type:"GET_CART", payload:res.data});
    } catch(e){
        
    }
}

