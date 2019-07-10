// Business Logic

// Pizza Constructor
function Pizza(size) {
  this.pizzasize = size;
  this.pizzatoppings = [];
};

// Price Prototype
Pizza.prototype.price = function() {
  var price = 10;

  if (this.pizzasize === "Medium") {
    price *= 2;
  } else if (this.pizzasize === "Large") {
    price *= 2.5;
  } else {
    price *= 1;
  }

  if (this.pizzatoppings.length === 0) {
    price *= 1;
  } else {
    price += this.pizzatoppings.length;
  }

  return price;
};