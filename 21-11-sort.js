const nums=[2,6,7,20,100,6,6,6,6,75]

// const ascending=nums.sort((acc,cur)=>acc>cur?1:-1)
// // const descending=nums.sort((acc,cur)=>acc<cur?1:-1)
// console.log(ascending)
// // console.log(descending)

const alpha=["Z","b","D","f","a","c","B"]       //sort method effect original array along with the new array.
//O/P=> [ 'D', 'Z', 'a', 'b', 'f' ] => sorting as per ASCII value of alphabet.
// const sorted=alpha.sort((acc,cur)=>acc>cur?1:-1)
const sorted=alpha.sort((acc,cur)=>acc.toLowerCase()>cur.toLowerCase()?1:-1)    //since every letter is not cap or small in array
console.log(sorted)
console.log(alpha)