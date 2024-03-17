// function getData1(dataId)
// {
//   return new Promise((resolve, reject) =>
//   {
//     setTimeout(function ()
//     {
//       console.log("data: ", dataId);
//       resolve("success");
//     }, 4000);
//   });
// };



// //                           Async & Await With IIFE
// (async function ()
// {
//     console.log('fetching data 1');
//     let a1 = await getData1(1);
//     console.log('fetching data 2',a1);
//     await getData1(2);
//     console.log('fetching data 3');
//     await getData1(3);
// })();



// //                           Promise Chaining
// console.log('fetching data 1');
// getData1(1).then((res)=>
// {
//     console.log('fetching data 2');
//     return getData1(2)
// }).then((res)=>
// {
//     console.log(res);
// })



// //                           CallBack Hell
// getData(5,() =>
// {
//     getData(2,()=>
//     {
//         getData(3)
//     })
// });



// //                           Fetch Api
// const URL = 'https://cat-fact.herokuapp.com/facts';
// async function getData()
// {
//     let promise1 = await fetch(URL);
//     console.log(promise1);
//     let promise2 = await promise1.json();
//     console.log(promise2[0].text);
// }
// getData();