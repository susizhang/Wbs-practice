//********************************
//1. Not returning from a function
//********************************

//*************Incorrect*******************

// const getAddedValue = (a, b) => {
//   a + b;
// }

// console.log(getAddedValue(1,2));

//*************Correct*******************
// const getAddedValue = (a, b) => {
//   return a + b;
// }

// console.log(getAddedValue(1,2));

//********************************
//2. Loading javascript script in html before the DOM is ready
//********************************

// const header = document.getElementById('header');
// console.log(header);
// header.innerText = "James is cool!";

//*************Check the HTML file for the solution

//********************************
//3. Reassigning const variables
//********************************

//*************Won't Work*******************
// const count = 0;
// for (let i = 0; i < 10; i++) {
//   count = count + i;
// }
// console.log(count);

//*************Will Work*******************
// let count = 0;
// for (let i = 0; i < 10; i++) {
//   count = count + i;
// }
// console.log(count);

//********************************
//4. Variable scope
//********************************

//*************Not accessible outside of for loop*******************
// for (let i = 0; i < 10; i++) {
//   const count = 5;
// }
// console.log(count);

//*************Accessible outside of for loop*******************
// for (let i = 0; i < 10; i++) {
//   var count2 = 5;
// }
// console.log(count2);

//********************************
//5. Poorly named variables
//********************************

//*************Bad*******************
// const arr = ["James", "Jess", "Lily", "Sevi"];
// let str = "";
// for(let i = 0; i < arr.length; i++){
//   const tmp = arr[i];
//   str += tmp[0];
// }
// console.log(str);

//*************Better*******************
// const names = ["James", "Jess", "Lily", "Sevi"];
// let retVal = "";
// for(let i = 0; i < names.length; i++){
//   const name = names[i];
//   retVal += name[0];
// }
// console.log(retVal);

//********************************
//6. Too large of functions
//********************************
//Reference - https://medium.com/swlh/how-long-should-functions-be-how-do-we-measure-it-cccbdcd8374c
//Reference - https://softwareengineering.stackexchange.com/questions/133404/what-is-the-ideal-length-of-a-method-for-you

//********************************
//7. Unnecessary else statements
//********************************

//*************Ok*******************
// const isOdd = (num) => {
//   if(num % 2 === 1) {
//     return true
//   }else {
//     return false;
//   }
// }
// console.log(isOdd(4));

//*************Better*******************
// const isOdd = (num) => {
//   if(num % 2 === 1) return true
//   return false;
// }
// console.log(isOdd(4));

//*************Even More Better*******************
// const isOdd = (num) => {
//   return num % 2 === 1;
// }
// console.log(isOdd(4));

//*************Ok*******************
//with error first callback (example - https://www.geeksforgeeks.org/error-first-callback-in-node-js)
// const callback = (err, data) => {
//   if(err){
//     console.error(err);
//   }else {
//     //...do something else
//   }
// }

//*************Better*******************
// const callback = (err, data) => {
//   if(err) return console.error(err);
//   //...do something else
// }

//********************************
//8. Not short-circuiting loops
//********************************

//*************Ok*******************
// const hasEvenNumber = (numbersArr) => {
//   let retVal;
//   for(let i =0; i< numbersArr.length; i++){
//     if(numbersArr[i] % 2 === 0){
//       retVal = true;
//     }else {
//       retVal = false;
//     }
//   }
//   return retVal;
// }

//*************Better*******************
// const hasEvenNumber = (numbersArr) => {
//   let retVal;
//   for(let i =0; i< numbersArr.length; i++){
//     if(numbersArr[i] % 2 === 0){
//       return true;
//     }
//   }
//  return false;
// }

//********************************
//9. Double vs Triple equals
//********************************
// const jamesAge = "31";
// const jessAge = 31;

// console.log(jamesAge == jessAge);
// console.log(jamesAge === jessAge);

//********************************
//10. Incorrect comparisons (objects vs primitive values)
//********************************
//Reference - https://flaviocopes.com/difference-primitive-types-objects/

// const name1 = "James";
// const name2 = "James";
// console.log(name1 === name2);

//*************Not what you expect*******************
// const person1 = {
//   name:"James"
// }
// const person2 = {
//   name:"James"
// }
// console.log(person1 === person2);

//*************What you expect*******************
// const person1 = {
//   name:"James"
// }
// const person2 = {
//   name:"James"
// }
// console.log(person1.name === person2.name);
// const person3 = person1;
// console.log(person1 === person3);

//********************************
//11. Cannot read property of undefined
//********************************

//*************Not so good*******************
// const printNamedGreeting = (person) => {
//   console.log(person.name)
// }

// printNamedGreeting();

//*************Better*******************
// const printNamedGreeting = (person) => {
//  if(!person){
//    return console.log("Invalid person object")
//   }
//   console.log(person.name)
// }

// printNamedGreeting();
// printNamedGreeting({
//   name: "James"
// });

//********************************
//12. Mutation (arrays)
//********************************
//More Examples - https://www.sitepoint.com/immutable-array-methods-javascript

//*************Make sure you understand which functions mutate and which ones don't*******************

// const names = ["Jess", "James",  "Sevi", "Lily"];
// const copiedNames = [...names];
// const sortedNames = names.sort();
// console.log(names);
// console.log(copiedNames);
// console.log(sortedNames);

// const firstLettersArray = names.map( name => name[0]);
// console.log(firstLettersArray);
// console.log(names);

//********************************
//13. Not Understanding Asynchronous Code
//********************************

//*************Timing might not be what you expect*******************

// console.log("1");
// setTimeout(() => {
//   console.log("2")
// }, 0)
// console.log("3");

//********************************
//14. Not handling errors
//********************************
//Promises examples - https://www.w3schools.com/js/js_promise.asp
//.catch documentation - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch
//Try/catch examples - https://www.w3schools.com/js/js_errors.asp

//*************Missing Error handling*******************

// let samplePromise = new Promise(function(resolve, reject) {
//   setTimeout(() => {
//     reject("It worked");
//   }, 1000);
// });

// samplePromise.then(data=> {
//   console.log(data);
// })

//*************Error handling*******************

// let samplePromise = new Promise(function(resolve, reject) {
//   setTimeout(() => {
//     reject("It didn't work");
//   }, 3000);
// });

// samplePromise.then(data=> {
//   console.log(data);
// }).catch(err => {
// console.error(err);
// })

//********************************
//15. Not formatting code
//********************************

//Spend time formatting your code 👀

//*************Bad*******************
//   console.log( "1");
// setTimeout(()
//   => {
//   console.log("2")
// },
//    0)
// console.log("3"  );

//*************Good*******************
// console.log("1");
// setTimeout(() => {
//   console.log("2")
// }, 0)
// console.log("3");
