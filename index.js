// const { replaceStr } = require('./utility.js')

const BookPriceObject = require('./BookPriceObject.js')
const BookPrice =  require('./BookPriceObject.js')
const SortList =  require('./SortList.js')




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
     if(BookPriceObject[actualPrice].price < BookPriceObject[cheeper].price )
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





    for(let actualPrice = 0; actualPrice < BookPriceObject.length; actualPrice++)
      {
        let lower = SortList(BookPriceObject, actualPrice)

        let actualBook = BookPriceObject[actualPrice]
        console.log(`actual value is`, actualPrice)
        console.log(`actual value is`,  BookPriceObject[actualPrice])
        let loweBookPrice =  BookPriceObject[lower];
        console.log(`lower price book`, BookPriceObject[lower])
     
BookPriceObject[actualPrice] = loweBookPrice;
BookPriceObject[lower] = actualBook;

      }
      
      console.log(`Order List "${BookPriceObject}"`);
   
  
   