const nums=[2,6,7,20,100,6,6,6,6,75]

// const result=nums.filter(item=>item>5)      //O/P=>[ 6, 7, 20, 100 ]
// const result=nums.filter(item=>item%2===0)      //O/P=>[ 2, 6, 20, 100 ]
// const result=nums.filter(item=>item<5)      //O/P=>[ 2 ]
// const result=nums.filter(item=>item%2===1)      //O/P=>[ 7 ]
// const result=nums.filter(item=>item%2!==0)      //O/P=>[ 7 ]
// const result=nums.filter(item=>item===6)      //O/P=>[ 6,6,6,6,6 ]
// const result=nums.filter(item=>item==6)      //O/P=>[ 6,6,6,6,6 ]
// console.log(result)


// 3/fizz
// 5/buzz          //advance js interview program
// 15/fizbuzz
for (var i=1; i <= 20; i++)
{
    if (i % 15 == 0)
        console.log("FizzBuzz");
    else if (i % 3 == 0)
        console.log("Fizz");
    else if (i % 5 == 0)
        console.log("Buzz");
    else
        console.log(i);
}



