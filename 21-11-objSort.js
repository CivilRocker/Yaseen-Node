const students=[
    {name:"Raj",age:20,city:"Nanded"},{name:"Sam",age:23,city:"Pune"},
    {name:"Seema",age:21,city:"Bangalore"},{name:"Arbaj",age:30,city:"Bidar"}
]


// console.log(students.sort((acc,cur)=>acc>cur?1:-1))
// console.log(students.sort((acc,cur)=>acc.age>cur.age?1:-1))      //ascending
console.log(students.sort((acc,cur)=>acc.age<cur.age?1:-1))         //descending