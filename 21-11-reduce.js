const cities=["pune","Goa","Hyderabad","Bangalore","Nanded"]

console.log(cities.reduce((acc,cur)=>acc>cur?acc:cur))  
console.log(cities.reduce((acc,cur)=>acc<cur?acc:cur))  
console.log(cities.reduce((acc,cur)=>acc.length<cur.length?acc:cur)) 

