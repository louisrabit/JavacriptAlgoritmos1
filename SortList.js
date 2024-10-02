// SortList = Organize smaller to bigger/hogher value 


const BookPriceObject = require('./BookPriceObject.js')


//Create function
function getOrderListByPrice (valueArr, initialPosition)
{
         // save lower value outside 
let lowerPrice = initialPosition;

// actual = i
for(let actual = lowerPrice; actual < valueArr.length; actual++ )
{
if(valueArr[actual].price < valueArr[lowerPrice].price )
{
lowerPrice = actual
}
}
return lowerPrice;
}


module.exports = getOrderListByPrice


