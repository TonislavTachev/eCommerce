import {ADD_TO_PRODUCTS, UserActionTypes,UserState, GET_PRODUCTS, ADD_TO_BASKET, product, GET_CART} from '../types'

const initialState:UserState = {
    basket:[],
    numberOfItems: 0,
    cart:{
      id:'',
      currency:"USD",
      price:0,
      items:[],
      payment:"Payment"
    }
}


export function userReducer(
    state = initialState,
    action: UserActionTypes
  ): UserState {
    switch (action.type) {
      case ADD_TO_PRODUCTS:
        return {
          ...state,
          basket: [...state.basket, action.payload]
        }
      case GET_PRODUCTS:
        return{
          ...state,
          basket:action.payload
        }
      case ADD_TO_BASKET:
        return{
          ...state,
          numberOfItems:action.payload
        }
      case GET_CART:
        return{
          ...state,
          cart:action.payload
        }
      default:
        return state
    }
  }