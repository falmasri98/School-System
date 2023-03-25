// Question 5 ------

// Using for loop
function powerOfTwoForLoop(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(Math.pow(2, arr[i]));
    }
    return result;
  }
  
  // Using forEach
  function powerOfTwoForEach(arr) {
    const result = [];
    arr.forEach((num) => {
      result.push(Math.pow(2, num));
    });
    return result;
  }
  
  // Using map
  function powerOfTwoMap(arr) {
    return arr.map((num) => Math.pow(2, num));
  }

  const arr = [1, 2, 3];
console.log(powerOfTwoForLoop(arr)); 
console.log(powerOfTwoForEach(arr)); 
console.log(powerOfTwoMap(arr)); 

// Question 6 ------

function evenOddArray(arr1) {
    return arr1.map((num) => {
      if (typeof num !== "number") {
        return "N/A";
      } else if (num % 2 === 0) {
        return "even";
      } else {
        return "odd";
      }
    });
  }
  
  const arr1 = [1, 2, 3, "Farah"];
  console.log(evenOddArray(arr1)); 



  // Question 7 ------
  function fizzbuzz(arr2) {
    const output = [];
    arr2.forEach((num) => {
      if (num % 3 === 0 && num % 5 === 0) {
        output.push("Fizz Buzz");
      } else if (num % 3 === 0) {
        output.push("Fizz");
      } else if (num % 5 === 0) {
        output.push("Buzz");
      } else {
        output.push(num);
      }
    });
    return output;
  }


//   function fizzbuzz(arr2) {
//     return arr2.map((num) => {
//       if (num % 3 === 0 && num % 5 === 0) {
//         return "Fizz Buzz";
//       } else if (num % 3 === 0) {
//         return "Fizz";
//       } else if (num % 5 === 0) {
//         return "Buzz";
//       } else {
//         return num;
//       }
//     });
//   }
  const arr2 = [1, 2, 3, 4, 5, 15];
  console.log(fizzbuzz(arr2)); 
  

  



