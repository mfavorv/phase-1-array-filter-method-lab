// Code your solution here
const drivers = [
{name : "Job"},
{name : "Jill"  },
{name : "Jedida"},
{name : "Cole"  },
{name : "Holmes"},
{name : "Doyle" }
                ];

const driverObjects = [
{hometown: "Nairobi", name : "Job" },
{hometown: "Kiambu" , name : "Jill"},
{hometown: "Vihiga", name : "Jedida"},
{hometown: "Bungoma", name : "Cole"},
{hometown: "Kasarani", name : "Holmes"},
{hometown: "Embu", name : "Doyle"}
]                

function findMatching(drivers, names){
return  drivers.filter((driver) => driver.toLowerCase() === names.toLowerCase())
}

function fuzzyMatch(drivers, letter){
    return drivers.filter((names) => names.startsWith(letter))
}

function matchName(driverObjects, names){
    return driverObjects.filter((itemMatch) => itemMatch.name === names)
}
