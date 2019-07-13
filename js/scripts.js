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
    price += 3;
  } else if (this.pizzasize === "Large") {
    price += 5;
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

// User Interface Logic
$(document).ready(function() {
  $("form#pizza-order").submit(function(event) {
    event.preventDefault();

    var inputtedPizzaSize = $("select#pizza-size").val();
    var newPizza = new Pizza(inputtedPizzaSize);

    $.each($("input[name='toppings']:checked"), function() {
      newPizza.pizzatoppings.push($(this).val());
    });

    $("ul#pizza-list").append("<li><button type='submit' class='btn btn-success btn-margin'><span class='pizzaOrder'>" + newPizza.pizzasize + " Pizza Order" + "</button></span></li>");

    $("ul#pizza-list").click(function() {
      $("#pizza-details").show();
      $(".pizza-size").text(newPizza.pizzasize);
      $(".pizza-toppings").text(newPizza.pizzatoppings);
      $(".order-total").text(newPizza.price());

    });
  });
});