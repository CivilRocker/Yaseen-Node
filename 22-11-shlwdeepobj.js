const person={
    name:"Raj",
    age:20,
    city:"Pune"
}

// const newPerson=person               //Shallow copy
// newPerson.age=25

const newPerson={...person}             //Deep copy
newPerson.age=25


const newPerson1={...newPerson,contact:821}
const newPerson2={fname:"Sri",...newPerson1}
// const newPerson2={fname:"Sri",...newPerson,conatct:821}

console.log(person)
console.log(newPerson)
console.log(newPerson1)
console.log(newPerson2)
