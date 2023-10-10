const array=[10,20,30]

const array1=["a","b","c"]

var d=30


console.log(array.includes(50))            //Includes is a string method, not a number method
console.log(array.includes(30))
console.log(array.includes(d))          //here it will look the value of d in array, as var d=30 assign, so 30=d will be true
console.log(array1.includes("d"))           //when searching a string, should be written in ""(double quote)
