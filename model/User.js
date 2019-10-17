var user = function(userId,firstName,lastName,email,address1,address2,city,state,zip,country){

  userModel = {
    userId : userId,
    firstName : firstName,
    lastName : lastName,
    email : email,
    address1 : address1,
    address2 : address2,
    city : city,
    state : state,
    zip : zip,
    country : country,
	password: password
  }
  return userModel;
}

module.exports.user = user;
