const nums="9898675674"

const newArr=nums.split("")
console.log(newArr)
console.log(newArr.reduce((acc,cur)=>Number(acc)+Number(cur)))

let mob=[9,8,9,8,6,7,5,6,7,4]

console.log(mob.reduce((acc,cur)=>acc+cur))