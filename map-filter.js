const numbers = [2, 3, 4, 5, 6, 7, 8, 9];

// *****Map=====//😇
// const mapNumber = numbers.map(( x => x * x));
// console.log(mapNumber);

// *****Filter===//😇
// const filterNumber = numbers.filter(( x => x > 6));
// console.log(filterNumber);

// *****Find===//😇
// const findNumber = numbers.find(( x => x > 6));
// console.log(findNumber);



// *******Combine====Map+Filter+Reduce Method 😍😍😍😍😍

const combineNumber = numbers.map(( x => x * x)).filter(( x => x > 25)).reduce(( x , y) => x += y);
console.log(combineNumber);