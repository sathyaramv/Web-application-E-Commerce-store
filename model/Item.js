var item = function(itemCode, itemName, catalogCategory, description,rating, imageUrl){

  itemModel ={
    itemCode:itemCode,
    itemName:itemName,
    catalogCategory:catalogCategory,
    description:description,
    rating:rating,
    imageUrl:imageUrl
  };
  return itemModel;
}

module.exports.item = item;
