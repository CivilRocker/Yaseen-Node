
//SPREAD OPERATOR COPY 
// const students=["Raj","Sam","Reema"]
// const newStudent=students      [ 'Raj', 'Sam', 'Reema' ]   //direct assign-Shallow copy-changes in newStudent will also change in students

// const newStudent=[students]     //nested array           
// O/P=>    [ [ 'Pune', 'Nanded', 'Bangalore' ], 'Goa' ]

// const newStudent=[...students]          //[ 'Raj', 'Sam', 'Reema' ]//Deep copy- 
// //O/P=> [ 'Raj', 'Sam', 'Reema' ]

//SHALLOW COPY
const students=["Raj","Sam","Reema"]
const newStudent=students
newStudent[2]="Geeta"
//console.log(students)
//console.log(newStudents)
// [ 'Raj', 'Sam', 'Geeta' ]
// [ 'Raj', 'Sam', 'Geeta' ]              //sinnce shallow copied- students and newStudent both will change.


//DEEP COPY
// newStudent[1]="Raheem"
// // [ 'Raj', 'Sam', 'Reema' ]-students
// // [ 'Raj', 'Raheem', 'Reema' ]-newStudents     //since deep copied-no change in students

console.log(students)

console.log(newStudent)