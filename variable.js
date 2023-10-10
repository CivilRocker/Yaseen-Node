// var a=10                 //declaring and assigning
// console.log(a)          //O/P= 10
// var a=20                //redeclare  & reassign
// console.log(a)          //O/P =20
// a=30                    //reassigning
// console.log(a)          //O/P = 30

// let b=10                 //declare and assign
// console.log(b)           //O/P =10
// b=20                    //re Assign
// console.log(b)
// b="abc"                 //re Assign
// console.log(b)


// const a=10                  // declare and must be assign
// console.log(a)
// a=20                        //re assign
// console.log(a)

// const fullname=(fname,mname,lname)=>{
//             return lname+" "+fname+" "+mname}
// console.log(fullname("sameer","Ram","Patil"))

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