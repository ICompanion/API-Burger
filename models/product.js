const productModel = function(name, type, price, calories, veg, disponibility, promotion) {
  this.name = name;
  this.type = type;
  this.price = price;
  this.calories = calories;
  this.veg = veg;
  this.disponibility = disponibility;
  this.promotion = promotion;
};

module.exports = productModel;
