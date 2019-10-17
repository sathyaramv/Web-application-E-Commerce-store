var express = require('express');
var app = express();
//Required
var itemDBModel = require('./ItemDB.js');
var userModel = require('../models/User.js');
var userItemModel = require('../models/UserItem.js');
var userProfileModel = require('../models/UserProfile.js');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/sathya',{ useNewUrlParser: true },function(err){
  if(err) throw err;
  console.log("Connected to db...");
});

//user database
var userSchema = mongoose.Schema({
  userId : {type:String, required:true, unique: true},
  firstName : String,
  lastName : String,
  email : String,
  address1 : String,
  address2 : String,
  city : String,
  state : String,
  zip : Number,
  country : String,
  password: String
},{collection:'userData'});

//items of user
var userItemSchema = mongoose.Schema({
  userId:{type:String, required:true},
  item : {
    itemCode:{type:String, required:true},
    itemName:String,
    catalogCategory:String,
    description:String,
    rating:Number,
    imageUrl:String,
  },
  rating : Number,
  madeIt : String
},{collection:'userItemData'});


var user = mongoose.model('userData',userSchema);
var userItem = mongoose.model('userItemData',userItemSchema);


exports.getUsers = async function(){
  console.log("in get users");
  var usr=null;
  await user.find(function(err, data){
    if(err) {
      throw err;
    }
    else{
      usr = data[0];
    }
  });
  return usr;
}

exports.getUserbymail = async function(emailid,password){
  console.log("in get user");
  var usr=null;
  await user.find({'email':emailid,'password':password},function(err, data){
    if(err) {
      throw err;
    }
    else{
      usr = data;
    }
  });
  return usr;
}



exports.getUser = async function(id){
  console.log("in get user");
  var usr=null;
  await user.find({'userId':id},function(err, data){
    if(err) {
      throw err;
    }
    else{
      usr = data;
    }
  });
  return usr;
}


exports.getUserProfile =async function(userId){

  if(userItem){
      console.log(await userItem.find({"userId": userId}));
      return new userProfileModel(userId, await userItem.find({"userId": userId}));

  }
}

//remove userItem
exports.removeItem = async function(userId,itemCode){
  console.log("in removeItem userDB");
  if(userItem){
    console.log(userId+" : "+itemCode);
    var item =await userItem.find({'userId':userId, 'item.itemCode':itemCode}).remove();
  }
}

//Add userItem 
exports.addItem = async function(userId, uItem){
  console.log("in addItem userDB",uItem.item[0]);
  if(userItem){
    console.log(userId+" : "+uItem);
    var item = new userItem({
      'userId' : userId,
      'item' : {
        'itemCode':uItem.item[0].itemCode,
        'itemName':uItem.item[0].itemName,
        'catalogCategory':uItem.item[0].catalogCategory,
        'description':uItem.item[0].description,
        'rating':uItem.item[0].rating,
        'imageUrl':uItem.item[0].imageUrl
      },
      'rating' : uItem.rating,
      'madeIt' : uItem.madeIt
    });
    await item.save(function(err){
      if(err) console.log(err);
      console.log("userItem saved...!");
    });
  }
}


//Update 
exports.updateItem = async function(userId, uItem){
  console.log("in updateItem userDB");
  if(userItem){
    console.log(userId+" : "+uItem);
    await userItem.update({'userId':userId, 'item.itemCode':uItem.item[0].itemCode},{'rating' :uItem.rating,'madeIt' :uItem.madeIt},function(err,data){
      if(err) console.log(err);
      console.log("userItem updated ..");
    });
  }
}
