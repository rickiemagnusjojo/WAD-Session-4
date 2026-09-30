let userName = "Andrew"
let userAge = 21

//console.log("Text", variable) allows you to write to the console

console.log("User Name",userName)
console.log("User Age",userAge)

const userPets = ["Cat","Dog"]
let userBalance = 1200
const EVERY_DAY_SPENDING = 15.3
let everyDaySpendingPerPet = 6
let daysSurvived = 0

console.log("User Balance",userBalance)
console.log("Every Day Spending Per Pet",everyDaySpendingPerPet)
console.log("Days Survived",daysSurvived)

while (userBalance > 0) {
	let spending = EVERY_DAY_SPENDING + everyDaySpendingPerPet * userPets.length
	userBalance -= spending
	daysSurvived++
}

console.log("User have sufficient money for " + daysSurvived + " days")

userPets.push("Hamster")

const daysFor3Pets = 1200 / (EVERY_DAY_SPENDING + userPets.length * everyDaySpendingPerPet);
console.log("Days for 3 Pets", daysFor3Pets);

userPets.pop()

everyDaySpendingPerPet = 2.4

const daysFor2Pets = 1200 / (EVERY_DAY_SPENDING + userPets.length * everyDaySpendingPerPet);
console.log("Days for 2 pets", daysFor2Pets);

function nameVertical(name) {
    console.log(name);

    for (let i = 0; i < name.length; i++) {
        console.log(name[i])
    }
 }
nameVertical("Rickie")

function code(n) {
    return (n < 100 || n > 599) ? "Not a valid code" :
    (n < 200) ? "Informational" :
    (n < 300) ? "Successful" :
    (n < 400) ? "Redirection" :
    (n < 500) ? "Client error" :
    "Server error"

}

console.log(code(400));
console.log(code(121));
console.log(code(99));

/*The function should print to the console the values of the passed variables.
If the two variables have the same values and they are of the same type, the function should print to the console: The two variables have the same value and type
If the two numbers have the same values but they are of different types, the function should print to the console: The two variables have the same value but not the same type followed by the type of each of them, as follows: the type of var1 is var1 type
Otherwise, the function should print to the console: The two variables do not have the same value nor the same type
*/
function compareVariables(var1, var2) {
    console.log(var1);
    console.log(var2);
    return (var1 === var2) ? "The two variables have the same value and type" :
    (var1 != var2 && typeof var1 == typeof var2) ? "The two variables have the same type but different value" :
    (var1 == var2) ? `The two variables have the same value but not the same type, the type of var1 is ${typeof var1} and the type of var2 is ${typeof var2}` :
    "The two variables do not have the same value nor the same type";
    
}

console.log(compareVariables(5,6))
console.log(compareVariables(6,"6"))

function fibonacci(n) {
    
    if (n === 0) return 0;

    let i = 0;
    let next = 1;
    const arr = [0];
    // 0, 1, 1, 2, 3, 5

    for (i; i < n; i++) {
        arr.push(next); // [0,1,1,2]
        next = arr[i] + arr[i+1] // 1, 2
        if (next > n) break;
    }

    for (let j = 0; j < arr.length; j++) {
        console.log(arr[j])
    }
    
}

console.log(fibonacci(13));

let courses = ["WAD", "SoftwareEngineering", "WebSecurity", "OOP"];
let i = 0;

for (;;) {
    console.log(courses[i]);
    i++;
    if (i >= courses.length) break;
}