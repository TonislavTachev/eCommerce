const express = require('express');
const app = express();
const fs = require('fs');
const uuid = require('uuid');
const port = process.env.port || 5000;
var dataOfJson = [];
var cart = [];

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.get('/stuff', (req,res)=>{
    readFile();
    res.status(200).json({
        data: dataOfJson
    })
})

app.post('/add', (req,res)=>{
    console.log(req.body);
    writeToFile(req.body);
})

app.post('/add_to_cart', (req,res)=>{
    console.log("API called")
   const numberOfItems = addToCart(req.body);
   console.log(numberOfItems);
   res.json(numberOfItems).status(200);
   displayCart();
})

app.get('/cart', (req,res)=>{
    const obj = displayCart();
    console.log(obj);
    res.json(obj).status(200);
})

const readFile = () =>{
    var eCommerceData = fs.readFileSync('../data/eCommerce.json');
    const data = JSON.parse(eCommerceData);
    dataOfJson = [...data];
}

const addToCart = (data) =>{
    cart.push(data);
    return cart.length;
}

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
        payment:"Payment"
    }
    return cartObj
}


const writeToFile = (objToAdd) =>{

    dataOfJson.push(objToAdd);
fs.writeFileSync('../data/eCommerce.json', JSON.stringify(dataOfJson, null, 4));

console.log('Writing to file');
}



app.listen(port, ()=>{
    console.log(`Server started on port ${port}`)
})