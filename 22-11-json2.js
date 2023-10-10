const users=[
    {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
    "street": "Kulas Light",
    "suite": "Apt. 556",
    "city": "Gwenborough",
    "zipcode": "92998-3874",
    "geo": {
    "lat": "-37.3159",
    "lng": "81.1496"
    }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {}
    },
    {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "address": {
    "street": "Victor Plains",
    "suite": "Suite 879",
    "city": "Wisokyburgh",
    "zipcode": "90566-7771",
    "geo": {
    "lat": "-43.9509",
    "lng": "-34.4618"
    }
    },
    "phone": "010-692-6593 x09125",
    "website": "anastasia.net",
    "company": {
    "name": "Deckow-Crist",
    "catchPhrase": "Proactive didactic contingency",
    "bs": "synergize scalable supply-chains"
    }
    },
    {
    "id": 3,
    "name": "Clementine Bauch",
    "username": "Samantha",
    "email": "Nathan@yesenia.net",
    "address": {
    "street": "Douglas Extension",
    "suite": "Suite 847",
    "city": "McKenziehaven",
    "zipcode": "59590-4157",
    "geo": {
    "lat": "-68.6102",
    "lng": "-47.0653"
    }
    },
    "phone": "1-463-123-4447",
    "website": "ramiro.info",
    "company": {
    "name": "Romaguera-Jacobson",
    "catchPhrase": "Face to face bifurcated interface",
    "bs": "e-enable strategic applications"
    }
    },
    {
    "id": 4,
    "name": "Patricia Lebsack",
    "username": "Karianne",
    "email": "Julianne.OConner@kory.org",
    "address": {
    "street": "Hoeger Mall",
    "suite": "Apt. 692",
    "city": "South Elvis",
    "zipcode": "53919-4257",
    "geo": {
    "lat": "29.4572",
    "lng": "-164.2990"
    }
    },
    "phone": "493-170-9623 x156",
    "website": "kale.biz",
    "company": {
    "name": "Robel-Corkery",
    "catchPhrase": "Multi-tiered zero tolerance productivity",
    "bs": "transition cutting-edge web services"
    }
    },
    {
    "id": 5,
    "name": "Chelsey Dietrich",
    "username": "Kamren",
    "email": "Lucio_Hettinger@annie.ca",
    "address": {
    "street": "Skiles Walks",
    "suite": "Suite 351",
    "city": "Roscoeview",
    "zipcode": "33263",
    "geo": {
    "lat": "-31.8129",
    "lng": "62.5342"
    }
    },
    "phone": "(254)954-1289",
    "website": "demarco.info",
    "company": {
    "name": "Keebler LLC",
    "catchPhrase": "User-centric fault-tolerant solution",
    "bs": "revolutionize end-to-end systems"
    }
    }]

    // const newUser=users.filter(item=>item.username==="samantha")
    const newUser=users.filter(item=>item.username.toLowerCase()===("samantha").toLowerCase())   //correct way of searching.
    console.log(newUser)
    //difference between filter and map method(comparing line115 and line118)
    // const trial=users.map(item=>item.username.toLowerCase()==="samantha")
    // console.log(trial)
    

    // const userSort=users.sort((acc,cur)=>acc.username.toLowerCase()>cur.username.toLowerCase()?1:-1)
    // console.log(userSort)
  


    // const cityid2=users[1].address.city         //for specific index item to print
    // console.log(cityid2)

    // const result=users.filter(item=>item.address.geo.lat)
    // console.log(result.length)

    // const username=users.map(item=>item.username)
    // const city=users.map(item=>item.address.city)
    // const email=users.map(item=>item.email)
    // const company=users.map(item=>item.company.name)
    // const long=users.map(item=>item.address.geo.lat)

    // console.log(username)
    // console.log(long)

    // const username=users.filter(item=>item.username.startsWith("S"))
    // console.log(username)

    // const names=users.filter(item=>item.name.length>12)
    // console.log(names)

        // const names=users.filter(item=>item.name.includes("sey"))
        // console.log(names.length)
        
        // const city=users.filter(item=>item.address.city.length>12)
        // console.log(city)

        // const zipcode=users.filter(item=>item.address.zipcode.includes("-"))
        // // console.log(zipcode)
        // console.log(zipcode.length)

        // let a="-"            //not requires, did for trial.
        // const zipcode1=users.filter(item=>!item.address.zipcode.includes("-"))
        // const zipcode1=users.every(item=>item.address.zipcode.includes("-"))
        // // console.log(zipcode1.length)
        // // console.log(zipcode1[0].address.zipcode)
        // console.log(zipcode1)

    // console.log(users[2].username)
    // console.log(users[0].address.city)
    // console.log(users[0].address.geo.lng)

    // const lng=users.filter(item=>item.address.geo.lng>30 &&item.address.geo.lng<80)
    // console.log(lng[0].address.geo.lng)
    // const lng=users.filter(item=>item.address.geo.lng>30 &&item.address.geo.lng<80)
    // console.log(lng[0].address.geo.lng)

    // const lng1=users.filter(item=>item.address.geo.lng<0)
    // console.log(lng1.length)
    // const lng1=users.filter(item=>item.address.geo.lng>80)
    // console.log(lng1.length)

    // users.sort((acc,cur)=>acc.username>cur.username?1:-1)       //checks with ASCII value, special characters comes first
    // console.log(users)

    // users.sort((acc,cur)=>acc.address.city>cur.address.city?1:-1)
    // console.log(users)

    // const keys=Object.keys(users[0])
    // console.log(keys)
    // const nestedResult=Object.keys(users[0].address)
    // console.log(nestedResult)
    // const nestedResult1=Object.keys(users[0].address.geo)
    // console.log(nestedResult1)
    // // const allKeys=keys.concat(nestedResult,nestedResult1)
    // const allKeys=[...keys,...nestedResult,...nestedResult1]
    // console.log(allKeys)

    
    
    
    