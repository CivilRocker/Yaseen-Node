const student={name:"Raj",
                age:20,
                city:"Nanded"
                }

// console.log(student)
// console.log(student.name)
// console.log(student.age)
// console.log(student.city)

// const values1=Object.values(student)        //take only values of object and form a new array
// console.log(values1)

// const keys=Object.keys(student)
// console.log(keys)

const students=[
    {name:"Raj",age:20,city:"Nanded"},{name:"Sam",age:23,city:"Pune"},
    {name:"Seema",age:21,city:"Bangalore"},{name:"Arbaj",age:30,city:"Bidar"}
]
// console.log(students[1])
// console.log(students[1].city)
// console.log(students[2].age)
// console.log(students[3].name, students[2].name)

// const result=students.map(item=>item)
const result=students.map(item=>item.name)
// const result=students.map(item=>item.city)
// console.log(result.map(item=>item.toUpperCase()))
// const result=students.map(item=>item.age)
console.log(result)

// const filtered=students.filter(item=>item.name=="Seema")
// console.log(filtered)
// console.log(filtered[0].name)