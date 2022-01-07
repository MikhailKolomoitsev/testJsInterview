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
// console.log('object');
// console.log(false != '0')

// function checkBrakets(str) {
//     let result1 =str.split('').filter(i=>i===')'||i==='(').filter(i=>i===')').length
//     let result2 = str.split('').filter(i => i === ')' || i === '(').filter(i => i === '(').length
//     let bool1 = result1 === result2

//     let result3 = str.split('').filter(i => i === '[' || i === ']').filter(i => i === ']').length
//     let result4 = str.split('').filter(i => i === '[' || i === ']').filter(i => i === '[').length
//     let bool2 = result3 === result4

//     let result5 = str.split('').filter(i => i === '{' || i === '}').filter(i => i === '{').length
//     let result6 = str.split('').filter(i => i === '{' || i === '}').filter(i => i === '}').length
//     let bool3 = result5 === result6

//     return bool1===bool2===bool3
// }

// console.log(checkBrakets('(({{aegfaesd3243re[][][][][][[[]]]fsd}}##$%%^&*))'));

// function deleteDuplicates(arr) {
//     return arr.filter((item, index)=>arr.indexOf(item)===index)
// }

// console.log(deleteDuplicates([1000, 555, 991, 'abasts', '1', '1', 'abasts', 1, 2, 3, 4, 4, 4, 5, 5, 6, 99, 100, 2, 2, 2, 3]));

function withoutRepeat(arr) {
    let arrWithoutSuplicates = arr.filter((item, index) => arr.indexOf(item) !== index)

    return arrWithoutSuplicates
}

console.log(withoutRepeat([1000, 555, 991, 1, 2, 3, 4, 4, 4, 5, 5, 6, 99, 100, 2, 2, 2, 3]));

