// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "brocoli",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 1.99,
		category: "vegetable"
	},
	{
		name: "bread",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 2.35
	},
	{
		name: "salmon",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 10.00
	},
	{
		name: "milk",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 5.00
	},
	{
		name: "egg",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		price: 3.00 
	},
	{
		name: "lamb",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 10.00
	},
	{
		name: "beef",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 12.00
	},
	{
		name: "spinach",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 4.00,
		category: "vegetable"
	},
	{
		name: "melon",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 2.99,
		category: "fruit"
	},
	{
		name: "potato",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 2.50
	}
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let restrictedProducts = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
			restrictedProducts.push(prods[i]);
		}
		else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
			restrictedProducts.push(prods[i]);
		}
		else if ((restriction == "Organic") && (prods[i].organic == true)) {
			restrictedProducts.push(prods[i]);
		}
		else if ((restriction == "Non-organic") && (prods[i].organic == false)) {
			restrictedProducts.push(prods[i]);
		}
		else if (restriction == "None"){
			restrictedProducts.push(prods[i]);
		}
	}
	return restrictedProducts;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(items) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		var productName = products[i].name;
		var price = products[i].price;
		var unit = items[productName];
		totalPrice += price * unit;
	}
	return totalPrice.toFixed(2);
}