const students=[
    {name:"Raj",age:20,city:"Nanded"},{name:"Sam",age:23,city:"Pune"},
    {name:"Seema",age:21,city:"Bangalore"},{name:"Arbaj",age:30,city:"Bidar"},{name:"jaber",age:30,city:"Pune"}

]


const filtered=students.filter(item=>item.name=="Seema")
console.log(filtered)
console.log(filtered[0].name)

// const filtered=students.filter(item=>item.city==="Pune")
// console.log(filtered)