const express = require('express');
const app = express();
const fs = require('fs');
const uuid = require('uuid');
const port = process.env.port || 5000;

//to store the products from the given mock file
var dataOfJson = [];

//to store the products that the user wants to buy
var cart = [];

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


//sending the origina json file
app.get('/stuff', (req,res)=>{
    readFile();
    res.status(200).json({
        data: dataOfJson
    })
})

//Used for the add product page, it adds a new product to the mock json file
app.post('/add', (req,res)=>{
    console.log(req.body);
    writeToFile(req.body);
})

//for the displaying the counter on the top right of the navbar signifying how many products the user has chosen to buy
app.post('/add_to_cart', (req,res)=>{
   const numberOfItems = addToCart(req.body);
   res.json(numberOfItems).status(200);
   displayCart();
})


//this returns the user's order containing the whole price as well as the products he wishes to buy
app.get('/cart', (req,res)=>{
    const obj = displayCart();
    console.log(obj);
    res.json(obj).status(200);
})

//read from json file

const readFile = () =>{
    var eCommerceData = fs.readFileSync('../data/eCommerce.json');
    const data = JSON.parse(eCommerceData);
    dataOfJson = [...data];
}

//add to cart array

const addToCart = (data) =>{
    cart.push(data);
    return cart.length;
}

//add the product objects to the order json

const displayCart = () =>{
    var totalPrice = 0;
    cart.map((el)=>{
      totalPrice+= el.price
    })
    const cartObj = {
        id:66425,
        price:Math.round(totalPrice* 100) / 100,
        currency: "USD",
        items:cart,
        payment:"Payment",
        cartNum:cart.length
    }
    return cartObj
}


//write to the json file
const writeToFile = (objToAdd) =>{

    dataOfJson.push(objToAdd);
fs.writeFileSync('../data/eCommerce.json', JSON.stringify(dataOfJson, null, 4));

console.log('Writing to file');
}



app.listen(port, ()=>{
    console.log(`Server started on port ${port}`)
})