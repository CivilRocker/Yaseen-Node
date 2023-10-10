const array=[10,20,30]

const array1=["a","b","c"]

var d=30
                                        //sequence of an array matters,
// console.log(array.concat(array1))       //O/P =>[ 10, 20, 30, 'a', 'b', 'c' ]   

// console.log(array1.concat(array))       //O/P=>[ 'a', 'b', 'c', 10, 20, 30 ]

console.log(array.includes(50))
console.log(array.includes(30))
console.log(array1.includes("d"))           //when searching a string, should be written in ""(double quote)
