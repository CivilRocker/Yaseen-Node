const array=[10,20,30]

const array1=["Punjab","Parbhani","Patiyala","Pune"]


console.log(array.every(item=>item>5))      //O/P=>true=> if every item is >5 =then true or else it will be false.

console.log(array.every(item=>item>15))        //O/P=>false=>since every item is not greater than 15
console.log(array.every(item=>item%2===0))      //O/P=> true => since every number is divisible by 2
console.log(array.every(item=>item%3===0))      //O/P=> false=> since every item is not divisible by 3

//some will check presence of condition in array, if any one item satisfies then true or else false.
console.log(array.some(item=>item>10))          //O/P=true=> since 10 satisifies this condition

console.log(array1.every(item=>item.startsWith("P")))      //O/P => true=> since "P"is present in all item, JS is case sensitive


