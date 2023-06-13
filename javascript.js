// // Check if a number is odd or even in JavaScript
// const number = 21;
// if(number % 2 ==0){
//     console.log("number is even");
// }else{
//     console.log("number is odd");
// }
// // arithmetic operations on two number

// let a = 56;
// let b = 45;
// let x = (a + b);
// console.log(x);
// // grade for input marks

// let mark = 80;
// if(mark  <=100){
//     console.log(4.00)
//     console.log("grade A+")
// }else if(mark<=80){
//     console.log(3.50)
//     console.log("grade A+")
// }
// // print numbers from 1 to 10 

// for (let i=1;i<=10;i++) {
//     console.log(i);
// }
// // Reverse Loop print 10 to 1
// for (let i=10;i>=0;i--) {
//     console.log(i);
// }
// // Sum of Numbers from 1 to N
// let sum = 0;
// let n = 10;
// for( a = 0;a<= n;a++){
//     sum += a;
//     console.log(sum);
// }


// // Reverse a String
// let string =['i love you','i hate you'];



// console.log(string.reverse());


// //Print even numbers from 1 to 20 using a while loop
// let i = 0;
//     while(i <=18){
//         i += 2;
//          console.log(i);
          
       
//     }

// // Print numbers from 1 to 100, but if the number is divisible by 3 print "Fizz", if divisible by 5, print "Buzz",
// for(i=1;i<=100;i++){
//     if(i%3==0){
//         console.log(i, "fizz")
//     }else if(i%5==0){
//         console.log(i, "buzz")
//     }
// }


// fizzbuzz array
function fizzBuzz (n){
    let arr =[]
    for (let i=1;i<=n;i++){
        if(i%3 ==0 ,i%5==0){
          arr.push("fizzBuzz")
        }
        else if(i%3==0){
            arr.push("fizz")
        }else if(i%5==0){
            arr.push("buzz")
        }

         else
         arr.push(i.toString())    
            
        
    }
    return arr
};
console.log(fizzBuzz(3))
console.log(fizzBuzz(5))
console.log(fizzBuzz(15))