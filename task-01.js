// const array = ['test1', 'test2', 'test3'];

// let result = array.reduce((acc, item, index) => {

//     if (acc) {
//         acc = { ...acc, [`${index}`]: item }
//         return acc
//     } else {
//         acc = {
//             ...acc, [`${index}`]: item
//         }
//         return acc
//     }
// }, {})

// console.log(result);

// // output = {
// //     '0': 'test1',
// //     '1': 'test2',
// //     '2': 'test3',
// // }

// const array = [{ color: 'white', id: 2 }, { color: 'black', id: 3 }, { color: 'black', id: 500}];

// let result = array.reduce((acc, item) => {
//         acc = { ...acc, [`${item.color}`]: {...acc[item.color], [`${item.id}`]: item  }}
//         return acc
// },{})

// console.log(result);

// output = {
//     'white': {
//         '2': { color: 'white', id: 2 },
//     },
//     'black': {
//         '3': { color: 'black', id: 3 },
//      ‘500’: { color: ‘black’, id: 500 }
//   }
// }
console.log('object');
console.log(false != '0')