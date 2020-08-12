export interface UserState {
    basket: product[];
    numberOfItems: number,
    cart:cartProducts
 }
 
export interface product{
     name: string,
     price: number,
     image: string
}

export interface cartProducts{
    id:string,
    price:number,
    currency:string,
    items:product[],
    payment:string
}

export const ADD_TO_PRODUCTS = "ADD_TO_PRODUCTS";
export const GET_PRODUCTS = "GET_PRODUCTS";
export const ADD_TO_BASKET = "ADD_TO_BASKET";
export const GET_CART = "GET_CART";

interface addToBasket {
    type: typeof ADD_TO_PRODUCTS,
    payload: product
}

interface getCart{
    type: typeof GET_CART,
    payload:cartProducts
}

interface getProducts {
    type: typeof GET_PRODUCTS,
    payload:product[]
}

interface addToBasket2{
    type: typeof ADD_TO_BASKET,
    payload:number
}

export type UserActionTypes = addToBasket | getProducts | addToBasket2 | getCart;