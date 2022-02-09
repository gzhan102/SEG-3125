// This function is called when any of the tab is clicked
// It is adapted from https://www.w3schools.com/howto/howto_js_tabs.asp
var items = {
	"brocoli": 0,
	"bread": 0,
	"salmon": 0,
	"milk": 0,
	"egg": 0,
	"lamb": 0,
	"beef": 0,
	"spinach": 0,
	"melon": 0,
	"potato": 0
}

function openInfo(evt, tabName) {

	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " active";

}


	
// generate a checkbox list from a list of products
// it makes each product name as the label for the checkbos

function populateListProductChoices(slct2) {
    var diets = document.getElementsByName("dietSelect")
    var organicPerefence = document.getElementById("organic-preference")
    var s2 = document.getElementById(slct2)
	
	// s2 represents the <div> in the Products tab, which shows the product list, so we first set it empty
    s2.innerHTML = ""
		
	// obtain a reduced list of products based on restrictions
    var optionArray = []
    var flag = true
    for (i = 0; i < diets.length; i ++) {
        if (diets[i].checked) {
            restrictedProducts = restrictListProducts(products, diets[i].value)
            if (flag) {
                optionArray = restrictedProducts
                flag = false
            } else {
                optionArray = optionArray.filter(value => restrictedProducts.includes(value))
            }
        }
    }

    if (organicPerefence.value != "none") {
        restrictedProducts = restrictListProducts(products, organicPerefence.value)
        optionArray = optionArray.filter(value => restrictedProducts.includes(value))
    }

	// for each item in the array, create a checkbox element, each containing information such as:
	// <input type="checkbox" name="product" value="Bread">
	// <label for="Bread">Bread/label><br>
	var vegetable = document.getElementById("vegetable").checked;
	console.log(vegetable)
	var fruit = document.getElementById("fruit").checked;
	console.log(vegetable)
	if (vegetable) {
		optionArray = optionArray.filter(value => value["category"] == "vegetable")
	}
	if (fruit) {
		optionArray = optionArray.filter(value => value["category"] == "fruit")
	}
	
	optionArray.sort((a, b) => a.price - b.price)
	for (const product of optionArray) {
		// create the checkbox and add in HTML DOM
		var gallery = document.createElement("div");
		gallery.classList.add("gallery");
		var image = document.createElement("img");
		image.src = "images/" + product.name + ".webp";
		gallery.appendChild(image);

		var productNameDiv = document.createElement("div");
		productNameDiv.appendChild(document.createTextNode(product.name));
		var priceDiv = document.createElement("div");
		priceDiv.appendChild(document.createTextNode(product.price + "$"));
		gallery.appendChild(productNameDiv);
		gallery.appendChild(priceDiv);

		var removeBtn = document.createElement("button");
		removeBtn.appendChild(document.createTextNode("-"));
		var addBtn = document.createElement("button");
		addBtn.appendChild(document.createTextNode("+"));

		var unitDiv = document.createElement("div");
		unitDiv.classList.add("unit");
		unitDiv.id = product.name;
		unitDiv.innerHTML = items[product.name];
		removeBtn.onclick = function() {
			removeItem(product.name);
		}
		addBtn.onclick = function() {
			addItem(product.name);
		};
		gallery.appendChild(removeBtn);
		gallery.appendChild(unitDiv);
		gallery.appendChild(addBtn);

		s2.appendChild(gallery);

		// var checkbox = document.createElement("input");
		// checkbox.type = "checkbox";
		// checkbox.name = "product";
		// checkbox.value = product.name;
		// s2.appendChild(checkbox);
		
		// // create a label for the checkbox, and also add in HTML DOM
		// var label = document.createElement('label')
		// label.htmlFor = product.name;
		// label.appendChild(document.createTextNode(product.name + ", price: " + product.price));
		// s2.appendChild(label);
	}
}

function addItem(name) {
	var unit = items[name];
	unit ++;
	items[name] = unit;
	document.getElementById(name).innerHTML = unit;
	selectedItems();
}

function removeItem(name) {
	var unit = items[name];
	if (unit > 0) {
		unit --;
		items[name] = unit;
		document.getElementById(name).innerHTML = unit;
	}
	selectedItems();
}
	
// This function is called when the "Add selected items to cart" button in clicked
// The purpose is to build the HTML to be displayed (a Paragraph) 
// We build a paragraph to contain the list of selected items, and the total price

function selectedItems(){
	var c = document.getElementById('displayCart');
	c.innerHTML = "";
	
	// build list of selected item
	var para = document.createElement("P");
	para.innerHTML = "You selected : ";
	para.appendChild(document.createElement("br"));
	for (let name in items) {
		var unit = items[name]
		if (unit > 0) {
			para.appendChild(document.createTextNode(name + " x " + unit));
			para.appendChild(document.createElement("br"));
		}
	}		
	// add paragraph and total price
	c.appendChild(para);
	c.appendChild(document.createTextNode("Total Price is " + getTotalPrice(items) + "$"));
}

var accordion = document.getElementsByClassName("accordion");
console.log(accordion);
for (var i = 0; i < accordion.length; i++) {
	accordion[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}