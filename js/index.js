let student = {
    name: 'Cynthia Morgan',
    age: 23,
    isMarried: false,
    suitors: [
        {   
            name: "Peter",
            occupation: "Story Teller",
            networth: "$2.3M",
            isHandsome: true,
            john: "mild",
        },
        {   
            name: "Benson",
            occupation: "designer",
            networth: "1.5M",
            isHandsome: false,
            john: "Awesome"
        },
        {   
            name:"Tony",
            occupation: "Architect",
            networth: "9.5M",
            isHandsome: false,
            john: "python"
        },
    ]
}
let newStudent = {...student,
asset: "stubborn",
name: "Alex Victoria",
age: 32,
isMarried: true,
suitors: student.suitors.Tony}

console.log(newStudent.asset)
