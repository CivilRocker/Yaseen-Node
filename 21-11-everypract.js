const cities=["Pune","Nanded","Bangalore","Goa"]

console.log(cities.every(item=>item.includes("a")))     //O/P=> false=> since "a" in not there in every item

console.log(cities.some(item=>item.includes("a")))      //O/P=>true

console.log(cities.every(item=>item.startsWith("P")))   //O/P=> false
console.log(cities.some(item=>item.startsWith("P")))   //O/P=> true

console.log(cities.every(item=>item.endsWith("d")))     //O/P=> false
console.log(cities.some(item=>item.endsWith("d")))     //O/P=> true

console.log(cities.indexOf("Bangalore"))               //O/P=> 2
console.log(cities.some(item=>item==="Goa"))           //O/P=> true=> Goa is present in array
