const BookPrice =  [25, 15, 30, 50, 45, 20];

// instead an array of numbers we can have an array of objects ! 

const BookPriceObject = [
 {
 title: "JavaScript", 
price: 25
},
{
    title: "Php", 
    price: 15
},
{
    title: "node", 
    price: 30
},
{
    title: "ruby", 
    price: 50
},
{
    title: "c#", 
    price: 45
},
{
    title: "c++", 
    price: 20
}
];

// const replaceStr = (str, char, replacer) => {
//     const regex = new RegExp(char, "g")
//     const replaced = str.replace(regex, replacer)
//     return replaced
//   }
  
//   module.exports = { replaceStr }
//   // or
//   exports.replaceStr = replaceStr


module.exports = BookPrice


module.exports = BookPriceObject