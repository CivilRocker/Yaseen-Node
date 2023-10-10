//Rest operator
// function greet(){               //non parameterised function= it will give always same result
//     return "Salam Saab"
// }

// console.log(greet())

// function greet2(name){                  //parameterised function==> it will return with the given parametet(input).
//     return "Good morning"+" "+name
// }
// console.log(greet2("shahzeb"))

// function add(num1,num2,num3,num4,num5){
//     return num1+num2+num3+num4+num5
// }

// console.log(add(10,20,30,40,50))

//map=.O/P=>[array] , reduce=>value , filter=>[] , forEach=>iteration/value , sort=>[] , every=>boolean , some=> Boolean

// function add(...nums){                                    //... is rest operator
//     const result=nums.reduce((acc,cur)=>acc+cur)
//     return result                                       //reduce selected to get answer in value as rest methods gives in array
// }

// console.log(add(10,20,30,40,50,60,50))

const addition=(...nums)=>{
    let sum=0
    for (i=0;i<nums.length;i++){
        sum+=nums[i]    
        console.log(i)
        console.log(sum)           
    }
    return sum
     
}
console.log(addition(10,20,30,40,50,60,90,50))  




// function add(...nums){                                    //... is rest operator
//     const result=nums.reduce((acc,cur)=>acc+cur)
//     return result                                       //reduce selected to get answer in value as rest gives in array
// }

// console.log(add(10,20,30,40,50,60,50))

// function getMult(...nums){
//     const mult=nums.reduce((acc,cur)=>acc*cur)
//     return mult
//     }
// console.log(getMult(10,20,30))

// function getSquare(...nums){
//     const sqaure=nums.map(item=>item**2)
//     return sqaure
// }
// console.log(getSquare(2,4,6,8,10))

//methods of adding item in array=> push , splice , unshift , spread(...)
const cities=["Pune","Nanded","Bangalore"]
// console.log(cities[0])       //Pune
// console.log(cities.length)   //3
// cities.push("Goa")          //["Pune","Nanded","Bangalore","Goa"]
// cities.unshift("Goa")       //["Goa",Pune","Nanded","Bangalore"]

//cities.splice(index of item , no. of iems to be add/remove/replace , item to be added/replace )
//use '0'(zero) in splice for adding item.
// cities.splice(1,1,"Goa")    //["Pune","Goa","Bangalore"]     
// cities.splice(1,1,"Goa")    //["Pune","Nanded","Goa","Bangalore"]    

// const newCities=[...cities,"Goa"]
// // O/P=> [ 'Pune', 'Nanded', 'Bangalore', 'Goa' ]
// const newCities1=["goa",...cities]
// // O/P=>[ 'goa', 'Pune', 'Nanded', 'Bangalore' ]

// const newCities=[...cities]     
// // [ 'Pune', 'Nanded', 'Bangalore' ]    //spread=> bahar ka bracket nikaalega aur andar ki cheezo ko laake dega
// const newCities1=[cities]       
// [ [ 'Pune', 'Nanded', 'Bangalore' ] ]    //Nested array==> bracket aur andar ki cheezein saath laayega
// const newCities1=[cities,"Goa"]
// O/P=>[ [ 'Pune', 'Nanded', 'Bangalore' ], 'Goa' ]
// console.log(newCities)

// cities[1]="Goa"             //adding "goa" by refference of index directly
// console.log(newCities1)
// console.log(newCities1.length)      //O/P--2



//SPREAD OPERATOR for COPY 
// const students=["Raj","Sam","Reema"]
// const newStudent=students      [ 'Raj', 'Sam', 'Reema' ]   //direct assign-Shallow copy-changes in newStudent will also change in students

// const newStudent=[students]             
// O/P=>    [ [ 'Raj', 'Sam', 'Reema' ] ]

// const newStudent=[...students]          //[ 'Raj', 'Sam', 'Reema' ]//Deep copy- 
//O/P=> [ 'Raj', 'Sam', 'Reema' ]

//SHALLOW COPY
// const students=["Raj","Sam","Reema"]
// const newStudent=students
// newStudent[2]="Geeta"                    //assigning/updating
// [ 'Raj', 'Sam', 'Geeta' ]                //students array
// [ 'Raj', 'Sam', 'Geeta' ]             // newStudents array //sinnce shallow copied- students and newStudent both will change.


//DEEP COPY
// const newStudent=[...students]
//O/P=> [ 'Raj', 'Sam', 'Reema' ]
// newStudent[1]="Raheem"
// // [ 'Raj', 'Sam', 'Reema' ]-students
// // [ 'Raj', 'Raheem', 'Reema' ]-newStudents     //since deep copied-no change in its main students array.

// console.log(students)

// console.log(newStudent)
