// Example 1

// normal functions
/*
The function below is written in normal format.
It accepts a name in the form a string as an argument and checks whether the name is defined as "Socrates"
who is defined as being mortal because he is a man.

To prevent any errors or thrown exceptions, a default value of an empty string is provided
so that if and when the value of "name" is not passed or is passed as undefined the value of name is initialised
to an empty string
*/

function checkMortality(name = ""){
    if(name == "Socrates"){
        return true;
    }else{
        return false;
    }
}

console.log(checkMortality("Socrates")); //should produce "true" as output
console.log(checkMortality(10)); //should produce "false"
console.log(checkMortality()); //triggers default value

// fat arrow functions

var ifMortal = (passedName = "") => {
    if (passedName == "Socrates") {
        return true;
    } else {
        return false;
    } 
}

console.log(ifMortal("Socrates")); //should produce "true" as output
console.log(ifMortal(5)); //should produce "false" as output
console.log(ifMortal()); //triggers default value

// Example 2 
/* 
Written in fat arrow format for simplicity
Accepts a the following arguments:

1. An array of all cake possibilities (vanilla or chocolate)
2. A boolean representing whether or not the cake is chocolate.

*/

var checkCake = (myBool = false, myCakeVariants = ["none"]) => {
    if (myBool === true) {
        if (myCakeVariants.find((element) => element === "Chocolate") === "Chocolate") {
            return "The flavour of the cake is Chocolate.";
        } else {
            return "The flavour of the cake is not Chocolate but " + myCakeVariants.join( " and " );
        }
    } else {
        return ("The flavour(s) of the cake = " + myCakeVariants.join(" and "));
    }
}

// If undefined
console.log(checkCake(false, undefined));

// If chocolate is provided
console.log(checkCake(true, ["Vanilla", "Chocolate"]));

// If chocolate is not provided
console.log(checkCake(false, ["Luscious Lemon", "Pink Champagne"]));