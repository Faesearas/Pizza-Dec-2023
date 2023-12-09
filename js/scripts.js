// Business Logic

function Pizza(toppings, size){
    this.toppings = toppings;
    this.size = size;
}

Pizza.prototype.price = function () {
    let price = this.size * 5;
    for (let i=0; i <= this.toppings.length - 1; i++)
    price += 1;
    this.price = price;
};