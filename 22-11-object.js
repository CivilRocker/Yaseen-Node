const mobile={
    name:"Iphone",
    memory:"128GB",
    screen:"6.4",
    battery:2700,
    color:"gold"
}

//Changing/updating values in object.
// mobile.memory="256GB"        //assigning
// mobile.battery=4500
// mobile.color="rosemerry gold"
// mobile["color"]="red"     
// mobile[0]="red"
// mobile[1]="red"
// mobile["camera"]="13MP"
// mobile.screen="6"
// console.log(mobile)

//Spread operator in object=>
// mobile.memory="256GB"       //existing value change
// // const newMobile={...mobile,camera:"12MP"}       //camera will be added at last of object.
// const newMobile={camera:"16MP",...mobile}           //camera will be added at the begining of object.
// console.log(newMobile)
// // console.log(mobile)


// //Spread operator in array=>
// const array=[10,20,30]                           //declaring and assigning new array
// const newArray=[...array,40]                        
// const newArray=[50,...array]
// console.log(newArray) 



// console.log(mobile.name)
// console.log(mobile.battery)


// const allValues=Object.values(mobile)
// console.log(allValues)

// const allKeys=Object.keys(mobile)
// console.log(allKeys)


// const a=10                      //primitive         "="single equal means assigning.
// const array=[10,20,30,40]       //non primitive    
// array[1]=50                     //refered item in an array can be changed- here index of array is reffered item.
// array=40                        //direct variable cannot be change in case of constant
// console.log(array)