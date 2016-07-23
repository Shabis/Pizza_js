//backend logic
////pizza constructor
function Pizza(size, meat, meat2, toppings) {
  this.big = size;
  this.meat = meat;
  this.meat2 = meat2;
  this.toppings = toppings;
}

////total pizza cost prototype
Pizza.prototype.price = function() {
  return (this.big + this.meat + this.meat2 + this.toppings);
}

//frontend logic
$(document).ready(function() {
  $("form#pizza-order").submit(function(event) {
    event.preventDefault();

    var sizeInput = parseInt($("input:radio[name=size]:checked").val());
    var meatInput = parseInt($("#meat").val());
    var meat2Input = parseInt($("#meat2").val());
    var toppingsInput = new Array();
    $('input[name="topping"]:checked').each(function() {
      toppingsInput.push(parseInt(this.value));
    });

    ////determines total cost of all toppings
    var toppingCost = (toppingsInput.length * 1)

    var newPizza = new Pizza(sizeInput, meatInput, meat2Input, toppingCost);
    newPizza.cost = newPizza.price();

    $("form#pizza-order").hide();
    $("div#thanks").show();
    $("div#thanks").append("<h2>Your total comes to $" + (newPizza.cost) + ".");
  });
});
