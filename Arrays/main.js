// // Problem 1
// function arrChecker(arr)
// {
//     if(Array.isArray(arr))
//     {
//         console.log(arr)
//     }
//     else
//     {
//         console.log("this is not an array");       
//     }
// }
// arrChecker({name:'zia'});


// // Problem 2
// let arr = [2,3,5,6,78]
// function clone()
// {
//     let newArr = arr.slice(0);
//     console.log(newArr);
// }
// clone();


// Problem 3
// let arr = [2,3,5,6,78];
// function firstElement(n,m)
// {
//     let num = arr.slice(n,m);
//     console.log(num);
// }
// firstElement(0,2);


// // Problem 4
// let myArr = ["reg","green","yellow","blue"];
// function convertStr()
// {
//     let arr = myArr.toString();
//     console.log(arr);
// }
// convertStr();


// Problem 5
// let myArr = ["reg","green","yellow","blue"];
// function joinArr(a)
// {
//     let arr = myArr.join(a);
//     console.log(arr);
// }
// joinArr('-');


// // Problem 6
// let arr1 = [ -3, 8, 7, 65, 57, -4, 32, 2, 1 ];
// function sortArr(a,b)
// {
//     return a-b
// }

// let s = arr1.sort(sortArr);
// console.log(s);


// // Problem 7
// let arr = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];

// for(let i=0; i<arr.length; i++)
// {
//     for(let j=0; j<arr[i].length; j++)
//     {
//         console.log(arr[i][j]);
//     }
// }


// // Problem 8
// let arr = [2,3,45,6,7];
// let num = arr.map((n)=>
//         {
//             return n*n;
//         })
//         console.log(num);


// // Problem 9
// let arr = [2,3,4,6,7,9];
// let sum = 0;
// let num = arr.reduce(function(n)
// {
//     sum = sum + n;
//     return sum
// })
// console.log(num);


// // Problem 10
// let product = 1;
// let num1 = arr.reduce(function(n)
// {
//     product = product * n;
//     return product;
// })
// console.log(num1);


// // Problem 11
// let arr = [];
// function add(...num)
// {
//     arr.push(num);
//     console.log(arr);
// }
// add(2,4,5,6,7,2);


// // Problem 12
// let arr = [];
// let myArr = new Array(1,2,3,4,5,6,6);


// // Problem 13
// // Accessing first and last element of an array
// console.log(myArr[0],myArr[myArr.length-1]);


// Problem 14
// let arr = [2,3,4,5,6,7];
// arr.push(8);
// arr.pop();
// console.log(arr);


// // Problem 15
// let arr = [2,3,4,5,6,7];
// let myArr = arr.includes(5)
// console.log(myArr);

// // Method 2
// let arr2 = arr.indexOf(7);
// if(arr2 !== -1)
// {
//     console.log('element is found');
// }
// else
// {
//     console.log('element is not found');
// }
// // console.log(arr2);


// // Problem 16
// let arr = [2,3,4,5,6,7];
// let myArr = arr.splice(0,2);
// console.log(myArr);


// // Problem 17
// let arr1 = [2,3,4,5,6,7];
// let arr2 = [45,67,34,23,12];
// let newArr = arr1.concat(arr2);
// console.log(newArr);



// // Problem 18
// let arr1 = [45,67,34,23,12,[2,3,4,5,6,7]];
// let arr2 = arr1.flat();
// console.log(arr2);


// Probelm 19
// let arr = [1,2,3,4,5];
// let num = 5; 
// let fact = 1;
// for(let i=1; i<=num; i++)
// {
//     fact = fact * i
// }
// console.log(fact);

// Method 2
// let ans = arr.reduce(function(e1,e2)
//     {
//         return e1 * e2;
//     })
// console.log(ans);

// let myArr = arr.concat(newArr);
// let c = arr.indexOf(5);
// let d = arr.includes(43);
// let c = arr.join('-');
// let r = arr.slice(0,2)
let newArr = [120,32,5,7,89];

let arr = [2,5,78,43,11];
let r = arr.splice(0,2)
console.log(arr,r);
// arr.pop()
// arr.sort();
// arr.reverse()
// let v = arr.shift()
// let z = arr.unshift(1)
// let x = arr.push(4)