// const { replaceStr } = require('./utility.js')

const BookPriceObject = require('./BookPriceObject.js')
const BookPrice =  require('./BookPriceObject.js')

let cheeper = 0;
let expensive = 0;

// array run                       
for(let actualPrice = 0; actualPrice < BookPrice.length; actualPrice++)
{

 // Get lower price --> Make compare actual price is less than before 
// save index 

        // in position                 // in positions -> cheeper
 if(BookPrice[actualPrice] < BookPrice[cheeper] )
 {
    cheeper = actualPrice;
 }
 
}

console.log(`The cheeper book cost "${BookPrice[cheeper]}"`);





// array run                       
for(let actualPrice = 0; actualPrice < BookPriceObject.length; actualPrice++)
    {
    
     // Get lower price --> Make compare actual price is less than before 
    // save index 
    
            // in position                 // in positions -> cheeper
     if(BookPriceObject[actualPrice] < BookPriceObject[cheeper] )
     {
        cheeper = actualPrice;
     }

      // Get higher  price --> Make compare actual price is less than before 
     else if(BookPriceObject[actualPrice].price > BookPriceObject[expensive].price){
        expensive = actualPrice;
     }
    }
    
    console.log(`The cheeper book cost "${BookPriceObject[cheeper].price}" , with Title"${BookPriceObject[cheeper].title}" `);
    console.log(`The cheeper book cost "${BookPriceObject[expensive].price}" , with Title"${BookPriceObject[expensive].title}" `);