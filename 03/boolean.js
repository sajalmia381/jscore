let temp = 31 
let isFreezing = temp === 31
console.log(isFreezing)
isFreezing = temp !== 31
console.log(isFreezing)

// IF method
let age = 25
if (age <= 7 ) {
    console.log("Child")
} else if (age >= 65) {
    console.log("Senior")
} else {
    console.log("Young")
}

// Boolean Method
age = 6

let isChild = age <= 7
if (isChild) {
    console.log("Is Child:", "value", isChild)
} else {
    console.log("Is not Child: ", isChild)
}
let isSenior = age >= 65
console.log("Is Senior:", isSenior)