# Squared π's Pizza
###### By: Amy Hruska
[r²*π](https://github.com/AmyHruska/Pizza-Dec-2023.git) is a pizza parlor which only displays the pizza size in square centimeters; from the personal 314cm² to the massive 1962cm²!
### Installation
#### First method (remotely hosted)
* Open the web browser of your choice. 
* Navigate [here](https://amyhruska.github.io/Pizza-Dec-2023).
#### 2nd method (locally hosted <advanced> )
* Run the below command in the terminal: 
````bash
$ git clone https://github.com/AmyHruska/Pizza-Dec-2023.git
````
* Host the folder in a web server of your choice.
* Navigate to the locally hosted index.html webpage.
### Technologies Used:
* HTML
* JavaScript
* CSS
* Test Driven Development
### Known Issues
* CSS is kind of ~~needs work~~ ~~rough still~~ empty.
* README.md could use the [alot](https://knowyourmeme.com/memes/the-alot)'s attention.
### License:
[MPL 2.0](https://www.mozilla.org/en-US/MPL/2.0/)
### Test Cases:
```js
Describe: Pizza();

Test: "It should return a new pizza object with any array for toppings, a property for size, default price and order number"
Code: let userPizza = new Pizza(["potatoes", "celery"], "314cm²");
Expected Output: userPizza {
    toppings: ["potatoes", "celery"]
    size: "314cm²"
}

Describe: Pizza.price();
Test "Pizza method for price calculation should take the size and toppings of the pizza object and add a new property to the object for a total"
Code: let userPizza = new Pizza(["potatoes", "celery"], 1);
userPizza.price();
Expected Output: userPizza {
    toppings: ["potatoes", "celery"]
    size: 1
    price: 7
}
```