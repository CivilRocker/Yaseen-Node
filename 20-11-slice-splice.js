const cities=["pune","nanded","hyderabad","bangalore","goa"]

const affectedCities=cities.slice(1,4)      //slice(index of element,index of element+1)
console.log(affectedCities)

const effectedCities=cities.splice(2,2)     //removing=> splice(index of element,no. of element from selected)
console.log(effectedCities)
console.log(cities)

// cities.splice(3,0,"Malakpet")           //adding cities => splice(index,adddition,element)

// //splice(start of element,0 for addition, "name of element to add")
// cities.splice(4,0,"Chanchaguda","Dabeerpura")          //adding
// console.log(cities)
// cities.splice(3,3,"Bidar","Raichur")                //replacing
// console.log(cities)

const alphabets=["A","B","C"]
console.log(alphabets.reverse())


// const result=alphabets.map(item=>item.toLowerCase())
// console.log(result)
// console.log(alphabets)


