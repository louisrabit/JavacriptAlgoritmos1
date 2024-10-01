const BookPrice =  [25, 15, 30, 50, 45, 20];

//
// let actualPrice = 0;
let cheeper = 0;


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