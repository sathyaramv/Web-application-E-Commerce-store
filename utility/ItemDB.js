var express = require('express');
var app = express();
var itemModel = require('../models/Item.js');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/sathya',{ useNewUrlParser: true },function(err){
  if(err) throw err;
  console.log("Successfully connected!!");
});

var itemsSchema = mongoose.Schema({

  itemCode:{type:String, required:true, unique: true},
  itemName:String,
  catalogCategory:String,
  description:String,
  rating:String,
  imageUrl:String
},{collection:'itemsData'});

var items = mongoose.model('itemsData', itemsSchema);

exports.getItems = async function(){
  console.log("in getItems...");
  return await items.find();
};


exports.getItem = async function(itemCode){
  console.log("in getItems ...",itemCode);
  return await items.find({'itemCode':itemCode});
}

exports.getCategories = async function(){
  console.log("in categories...");
  var listOfCategories = [];
  await items.find(function(err,data){
    if(err){
      throw err;
    }else{
      data.forEach(function(item){
        if(!listOfCategories.includes(item.catalogCategory)){
          listOfCategories.push(item.catalogCategory);
        }
      });
    }
  });
  console.log(listOfCategories);
  return listOfCategories;
}
