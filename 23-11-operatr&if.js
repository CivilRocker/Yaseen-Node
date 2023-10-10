//operators
// and operator(denoted by && )
// true && true => true
// true && false => false
// false   &&  true   => false
// false && false => false

//  Or Operator ( denoted by || )
//  true || true    => true
//  false || true   =>  true
//  true || false   =>  true
//  false || false  =>  false


let user1="PDAC"
let pass1="PDAC@123"

if (user1==="PDAC" && pass1==="PDAC@123"){
    console.log("Welcome") 
}else{
    console.log("Enter correct credential")
}

user1==="PDAC" && pass1==="PDAC@123"?console.log("Welcome"):console.log("Enter correct Credential")
