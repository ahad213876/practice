// array
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