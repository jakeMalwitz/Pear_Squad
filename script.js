$(document).ready(function(){

console.log(randomNumber(1,9.99));
fruit.forEach(appendDom);
priceFlux();
/*function appendDom(fruit){
	$(".container").append('<div class="cornucopia"></div>');
	var $el = $(".container").children().last();
	$el.append('<p>' + fruit.name +'</p>');

}
*/


});

function appendDom(fruit){
	$(".container").append('<div class="cornucopia '+ fruit.name + '"></div>');
	var $el = $(".container").children().last();
	$el.append('<p>' + fruit.name + '</p>');
	$el.append('<p class="priceTOT">' + fruit.price + '</p>');
	$el.data("price", 2);
}
//appendDom(fruit);

function FruitCreator(name, price){
	this.name = name;
	this.price = price;
}

var apples = new FruitCreator("apples", 2.00);
var oranges = new FruitCreator("oranges", 2.00);
var bananas = new FruitCreator("bananas", 2.00);
var pears = new FruitCreator("pears", 2.00);

var fruit = [];

fruit.push(apples, oranges, bananas, pears);

function priceFlux(){
	for(var i = 0; i < fruit.length; i++) {
      if((fruit[i].price >= .5) && (fruit[i].price <= 9.99)){
			var increase = adjustPrice();
				if(increase == 0){
					increase = adjustPrice();
				}
				 var fruit1 = (fruit[i].price + increase);

				console.log(fruit[i]);

				console.log(fruit1);

				fruit[i].price = fruit1;
				console.log($('.' + fruit[i].name));
				$('.' + fruit[i].name).data('price', fruit[i].price );
				$('.' + fruit[i].name).children().last().text(fruit1);

			}
	}//for loop

}//priceFlux

function adjustPrice() {
	var increase = randomNumber(-50, 50);
	increase = (increase * 0.01);
	//increase = Number(increase);
	return +(increase.toFixed(2));
}

function randomNumber(min, max) {
	var num = +((Math.random() * (1 + max - min) + min).toFixed(2));
	return num;
}

//setInterval(priceFlux, 3000);



//);
