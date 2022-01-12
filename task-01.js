/*Example1*/
// function getObjectDepth(object){
//      if (typeof object !== "object" || object === null) {
//         return 0;
//     }

//     let values = Object.values(object);
//     // console.log(...values);

//     return (values.length && Math.min(...values.map(value => {
//         // console.log(value);
//         return getObjectDepth(value)
//     }))) + 1;
// }


// let testRy = [1, 2, [3, 4, [5, 6], 7, [8, [9, 91]], 10], 11, 12]
// let testObj = { re: { b: 1, alt: 2 } }
// let test3 = { a: { b: { c: "z" } } }

// console.log(getObjectDepth(testRy));

// function maxDepth(obj) {
//     const parsed = JSON.stringify(obj)
//     const result = [...parsed].filter(el=>el==='{'||el==='[').length
//     console.log(result);
//     return result
// }
// maxDepth(test3)



/*Example2*/
// function howMuchArgs() {
//     console.log(arguments);
//     let result=arguments.length
//     return result
// }
// let a=1
// let b=2
// let c=3
// let d=4

// console.log(howMuchArgs(a));
// console.log(howMuchArgs(a, b));
// console.log(howMuchArgs(a, b, c));
// console.log(howMuchArgs(1,b,3,d));
// console.log(howMuchArgs(1,b,3,d, null));
// console.log(howMuchArgs(1,b,3,d, null, undefined));
// console.log(howMuchArgs(1,b,3,d, null, undefined, false));

/*Example3*/

// function revertNumber(number) {
//     let string=number.toString()
//     let result = +string.split('').reverse().join('')
//     return result
// }
// console.log(revertNumber(129429));
// revertNumber(212312)
// revertNumber(13289)
// revertNumber(2831791)

/*Example4 -написать аналог bind , 
который принимает args, 
context, function(не успел придумать за 10 мин)*/

// function bind(args, context, func) {
//     return
// }



// const categories = document.querySelectorAll('.item')

// console.log(`В списке ${categories.length} категорий`);

// categories.forEach(item => {
//      console.log(
//         `Категория:${item.firstElementChild.textContent},
// Количество элементов: ${item.lastElementChild.children.length}`,
//     )
// })

// function moveZeroes(nums) {
//     let numZero=0
//     for (let num of nums) {
//         if (num === 0) {
//             numZero+=1
//         }
//     }
//     let addArr = []
//     for (let i = 0; i <= numZero; i++){
//         addArr[i]=0
//     }


//     return nums.filter(el => el !== 0).concat(addArr)
// };
// console.log(moveZeroes([0, 1, 0, 3, 12]))

// const array = [
//     { color: 'white', id: 2 },
//     { color: 'black', id: 3 },
//     { color: 'black', id: 500 }
// ];

// const result = array.reduce((acc, item) => {
//     if (acc[item.color]) {
//         acc[item.color] = { ...acc[item.color], [`${item.id}`]: item }
//         return acc
//     } else {
//         acc[item.color] = { [`${item.id}`]: item }
//         return acc
//     }
// }, {});

// console.log(result)

// output = {
//     'white': {
//         '2': { color: 'white', id: 2 },
//     },
//     'black': {
//         '3': { color: 'black', id: 3 },
// ‘500’: { color: ‘black’, id: 500 }
// }
// }




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

// function withoutRepeat(array) {
//     const arrWithoutSuplicates = []
//     const obj = {}

//     for (let index = 0; index < array.length; index++) {
//         const element = array[index];
//         if (!(element in obj)) {
//             obj[element]=1
//         }else{obj[element]+=1}

//     }

//     const keys = Object.keys(obj)
//     keys.forEach(key => {
//         if (obj[key] === 1) {
//             arrWithoutSuplicates.push(key)
//         }
//     })

//     return arrWithoutSuplicates
// }

// console.log(withoutRepeat([1000, 555, 991, 1, 2, 3, 4, 4, 4, 5, 5, 6, 99,101, 100, 2, 2, 2, 3]));

// function reverseString(str) {
//   const result=str.split('').reverse().join('')
//   return result
// }

// console.log(reverseString("hello"));

// function factorialize(num) {
//     let array = []
//     for (let i = 1; i <= num; i++) {
//         array.push(i)
//     }
//     console.log(array)
//     let result = array.reduce((acc, item) => {
//         return acc * item
//     }, 1)
//     return result
// }
// console.log(factorialize(5))

// function makeResult(str) {
//     let numbers = str
//         .split('').filter(i => i !== "+" && i !== "-" && i !== "×" && i !== "÷")
//         .map(i => { return +i })

//     let signs = str
//         .split('')
//         .filter(i => i === "+" || i === "-" || i === "×" || i === "÷")

//     let acc = numbers[0]
//     numbers.forEach((item, index, array) => {
//         signs.forEach(i => {
//             console.log(acc)
//             if (i === "+") {
//                 acc += array[index + 1]
//             } else if ("-") {
//                 acc = acc - array[index + 1]
//             } else if ("×") {
//                 acc = acc * array[index + 1]
//             } else if ("÷") {
//                 acc = acc / array[index + 1]
//             }
//         })
//     })
//     return acc
// }

// console.log(makeResult("5+3÷2+8×3-4"));

// function makeResult(str) {
//     let numbers = str.split('').map(i => {
//         if (i === '÷') {
//             return '/'
//         } else if (i === '×') {
//             return '*'
//         }
//         return i
//     }).join('')
//     let result = eval(numbers)
//     return result
// }

// console.log(makeResult("1+3÷2+8×3-4"));

// function sumOfDifferences(arr) {
//   let sortedArr=[...arr].sort((a, b)=>b-a)
//   let result=0
//     for (let i = 0; i < sortedArr.length-1; i++){
//     result+=sortedArr[i]-sortedArr[i+1]
//   }

//   return result
// }
// console.log(sumOfDifferences([10, 2, 1]))

// function toCsvText(array) {
//     let result = [...array]
//     return result
//         .map(i => {
//             return i.map(num => `${num}`)
//         })
//         .map(i => {
//             i[i.length - 1] = i[i.length - 1] + '\n'
//             return i
//         })
//         .map(i => i.join(','))
//         .join('')
//         .slice(0, -1)
// }


// console.log(toCsvText([[0, 1, 2, 3, 4],
// [10, 11, 12, 13, 14],
// [20, 21, 22, 23, 24],
// [30, 31, 32, 33, 34]]))


//      output:
//      '0,1,2,3,4\n'
//     + '10,11,12,13,14\n'
//     + '20,21,22,23,24\n'
//     + '30,31,32,33,34'

// function firstNonConsecutive(arr) {
//     let result = null

//     for (let i = 0; i <= arr.length - 1; i++) {
//         if (arr[i + 1] - arr[i] > 1) {
//             result=arr[i+1]
//         }
//     }

//     return result
// }

// console.log(firstNonConsecutive([8, 9, 10, 11, 13, 15, 16]));

// let arr = [];
// arr[1] = 1;
// arr[3] = 33;

// console.log(arr.length);

// let a = new Array(1, 2), b = new Array(3);
// console.log(a, b);
// console.log(a[0] + b[0]);

// let a = [1, 2]

//     (function () { alert('hi') })()

// function addTogether() {
//     const [first, second] = arguments
//     console.log(first, second)

// }

// addTogether(2, 3);
var pok = ['1', '2', '3', '4']
const [one, two, three, four] = pok
console.log([one, two, three, four]);

