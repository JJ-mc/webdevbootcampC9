var faker = require("faker");
console.log("==================");
console.log("WECOME TO MY SHOP");
console.log("==================");
for(var i=0; i<10; i++) {
    console.log(i+1 +". " +faker.commerce.productName() + " - $" + faker.commerce.price());
}
