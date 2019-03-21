var Item = require('../model/Item');

module.exports.getItems = function () {
    let items = [];
    for (let i = 0; i < data.length; i++) {
        let item = new Item(data[i].itemCode,data[i].itemName,data[i].catalogCategory,data[i].description,data[i].rating,data[i].imgUrl);
			items.push(item);
    }
    return items;
};

module.exports.getItem = function (itemCode) {
    console.info("from DB, Item code :" + itemCode)
    for (var i = 0; i < data.length; i++) {
          console.log("Data" + JSON.stringify(data[i].imgUrl));
        if (parseInt(data[i].itemCode) == itemCode) {
        let item = new Item(data[i].itemCode,data[i].itemName,data[i].catalogCategory,data[i].description,data[i].rating,data[i].imgUrl);
          console.log("Item"+JSON.stringify(item));
          return item;
        }
    }
};

var data = [
  {
    itemCode: 1,
    itemName: "Apple Pie",
    catalogCategory: "Non-Fat Yogurt Flavors",
	
   description: " 1) Apple Pie :Taste a new twist on a time-honored classic. we’ve transformed everyone’s favorite all-american pie into a sweet frozen treat :",
  
  rating: 1.5,
    imgUrl: "/images/applie_pie.jpg"
  },
  {
    itemCode: 2,
    itemName: " Blue Cotton Candy",
    catalogCategory: "Non-Fat Yogurt Flavors",
	

    description: "2) Blue Cotton Candy : Our super-sweet blue cotton candy is a funhouse of flavor that melts in your mouth : ",
    rating: 5,
    imgUrl: "/images/blue_candy.jpg"
  },
  {
    itemCode: 3,
    itemName: "Cappuccino",
    catalogCategory: "Non-Fat Yogurt Flavors",
 
    description:"3) Cappuccino:  Our cappuccino is a perky pick-me-up thanks to the java jolt of real espresso in our recipe :",
    rating: 5,

	imgUrl: "/images/cappuccino.jpg"
  },
  {
    itemCode: 4,
    itemName: "Birthday Cake",
    catalogCategory: "Low-Fat Yogurt Flavors",
	

    description: "4) Birthday Cake: Blow out the candles, it's your big day! our birthday cake flavor makes any day special! :",
    rating: 5,
    imgUrl: "/images/bday_cake.jpg"
  },
  {
    itemCode: 5,
    itemName: "Chocolate",
    catalogCategory: "Low-Fat Yogurt Flavors",
	

	
    description: "5) Chocolate : You’ll wanna sit down for this one. our triple chocolate are moist, thick and worth savoring :",
    rating: 5,
    imgUrl: "/images/chocolate.jpg"
  },
  {
    itemCode: 6,
    itemName: "Cookies & Cream" ,
    catalogCategory: "Low-Fat Yogurt Flavors",
	

    description: "6) Cookies and Cream: Delicious cream coupled with decadent chocolate cookies make one savory combi : ",
    rating: 5,
    imgUrl: "/images/cookiescream.jpg"
  }
];

var category = ["Low-Fat Yogurt Flavors", "Low-Fat Yogurt Flavors"];
