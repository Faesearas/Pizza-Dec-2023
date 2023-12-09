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

// UI logic
let orderPizzaBtn = document.getElementById("orderButton")
let sizeArray =  ["314cm²", "706cm²", "1256cm²", "1590cm²", "1962cm²"]

orderPizzaBtn.addEventListener("click", function() {
    event.preventDefault();
    let userName = document.getElementById("userNameInput").value;
    if (userName === ""){
        document.getElementById("nameWarning").innerText = "Please enter a name (it doesn't have to be yours)";
    }
    let size = document.getElementById("size").value;
    if (size === 0) {
        document.getElementById("sizeWarning").innerText = "Please choose a size";
    }
    let chosenToppings = document.querySelectorAll("input[name='toppings']:checked").value;
    debugger;
    let userPizza = new Pizza(chosenToppings, size);
    userPizza.price();
    let pizzaSizeString = sizeArray[userPizza.size - 1]
    
    document.getElementById("orderOutput").innerText = (userName + "'s" + " " + pizzaSizeString + " " + "with" + " " + (chosenToppings) + " " + "Cost:" + " " + "$" + userPizza.price )
});