//Object Data Type
//Objects are collections of key-value pairs. Keys are strings (or Symbols), and values can be of any type.
//understood by the JS engine as a single entity.
var userData = {
    name: "Alice",
    age: 30,
    isAdmin: false
};
console.log("User Data: ", userData);
//define by user
var product = {
    id: "p101",
    productName: "Laptop",
    price: 799.99,
    inStock: true,
    customerRating: undefined
};
product.price = 749.99; //updating price
console.log("Product Details: ", product);
product.customerRating = 4; //adding new property'
console.log("Updated Product Details: ", product);
product['warranty'] = "2 years"; //adding property using index signature
console.log("Final Product Details: ", product);
//Nested Objects
var order = {
    orderId: "o5001",
    user: {
        name: "Alice",
        age: 30,
        isAdmin: false
    },
    products: [
        {
            id: "p101",
            productName: "Laptop",
            price: 749.9
        },
        {
            id: "p102",
            productName: "Mouse",
            price: 19.99
        }
    ],
    totalAmount: 769.89
};
console.log("Order Details: ", order);
