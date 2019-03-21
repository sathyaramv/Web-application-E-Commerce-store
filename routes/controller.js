var express = require('express');
var route = express.Router();
var itemDB = require('../utility/itemDB');




route.get('/',function(req,res){
  res.render('index');
});
route.get('/about',function(req,res){
  res.render('about');
});

route.get('/contact',function(req,res){
  res.render('contact');
});


route.get('/item',function(req,res){
  res.render('item');
});


route.get('/categories',function(req,res){
  var categories = getCategories();
  var itemData = itemDB.getItems();
  var data = {
          path: req.url,
          categories: categories,
          items: itemData
      }
  res.render('categories', { data: data});
});

route.get('/categories/:categoryName', function (req,res) {
    var categories = [];
    categories.push(req.params.categoryName);
    var itemData = itemDB.getItems();
    var data= {
        path: req.url,
        categories: categories,
        items: itemData
    }
res.render('categories', {data: itemData});
});



route.get('/feedback/:itemCode',function(req,res){
  var itemCode = req.params.itemCode;
  console.log("feedback Item Code:"+itemCode);

  var item = itemDB.getItem(itemCode);
  console.log(item);
  res.render('feedback', { data: item});
});



route.get('/categories/item/:itemCode',function(req, res) {
    var itemCode = req.params.itemCode;
    console.log("Item Code:"+itemCode);

    var item = itemDB.getItem(itemCode);
    console.log(item);
    res.render('item', { data: item});
});


route.get('/myItems/:itemCode',function(req,res){
  var itemCode = req.params.itemCode;
  var item = itemDB.getItem(itemCode);
  res.render('myItems', { data: item});
});

var categories = [];

let getCategories = function() {
    // get the category of each item
    var data = itemDB.getItems();
    data.forEach(function (item) {
        if(!categories.includes(item.catalogCategory)){
            categories.push(item.catalogCategory);
        }

    });
    return categories;
};


module.exports = route;
