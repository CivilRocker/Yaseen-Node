const students=["Raj","Sam","Seema","Arvind","Arbaz"]

const result=students.map(item=>item)       //no operation is performed here

// const filtered=students.filter(item=>item.startsWith("S"))
// console.log(filtered)
// console.log(filtered.map(item=>item.toUpperCase() ))
// console.log(filtered.map(item=>item.toUpperCase() && item.includes("m")))

// const result1=students.map(item=>"Good Student "+item)      //map will take action on every item in an array.
// console.log(result1)

// const result2=students.map(item=>item+" is a good Student")
// const result2=students.map(item=>item+10)       //concat operation will be perform here
//O/P=> [ 'Raj10', 'Sam10', 'Seema10', 'Arvind10', 'Arbaz10' ]
// const result2=students.map(item=>item/10)       
//O/P=>[ NaN, NaN, NaN, NaN, NaN ]
// console.log(result2)
// console.log(students)