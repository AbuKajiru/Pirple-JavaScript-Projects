/*Hi, this file is a description of the use of "var", "let" and  "const" in JavaScript; 
their similarities, differences and context of use.
As an addition, "hoisting" is also explained so as to show how variable declaration occurs.*/

//"var"
/*

"VAR" is a keyword in JavaScript used in declaring variables i.e. assinging a location in memory a unique name
that can be manipulated to hold a value or a set of values.
When using "var" the variable is only usable within two contexts of execution, i.e:
1. Globally, if defined in a global scope.
2. The function within which it is defined.
(NOTE: If the variable is defined within an if statement and the if statement is within a function
then the scope of the variable will be within the function not the if statement.) 

*/

//Example 1:
var numOfPuppies = 5; //variable defintition i.e. declaration and initialization. (NOTE: Defined within a global scope).

function displayNumOfPuppies(){
    console.log("I have " + numOfPuppies + " number of puppies.");
    /*The above code on line 17 should work because numOfPuppies is defined within a global scope
    which is accesible by the function displayNumOfPuppies*/
}

displayNumOfPuppies();

console.log("I repeat, I have " + numOfPuppies + " number of puppies, do you want one?");
/*Since the above code on line 22 is within the global scope, then it is right to say
that we can access the variable numOfPuppies.*/

// Example 2. 
var size = 5;

function displayInfo(){
    if(size>5){
        var opinion = "large";
        console.log("My opinion is it's: " + opinion);
    }else{
        console.log("My opinion is it's just perfect.");
    }
}

displayInfo();
console.log("The set opinion is: " + opinion);// this should throw a ReferenceError since the variable opinion
//is inaccessible since it is only within the scope of the function displayInfo().

//"let"
/*

"LET" is a keyword used to declare variables in JavaScript but within the scope of the block with which it is contained.
It contains the same properties as defined for var above i.e functions and global associativity, but when let is used in an
if statement and the if statement is used within a function then the variable will only be accessible within the block of the
if statement as opposed to that of the function.

*/

//Example 1
function displayAge(){
    if(true){
        let age = 5;
        console.log("Since I am true then age = " + age);//should display correctly
    }

    console.log("I will display as well, age = " + age);
    /*The above code in line 65 should throw a ReferenceError since "age" doesn't exist within the scope of the function
    but of the if statement.*/
}

displayAge();

//"const"
/*

"CONST" is also a keyword used to declare variables, but as opposed to "let" and "var" variables declared with "const"
cannot be left uninitialised, i.e. cannot be undefined.
"const" holds a similarity to "let" in that it holds it's value within the scope of the block within which it's defined.
The variable declared by "const" cannot be altered i.e. cannot be changed. In the case of strings and numbers then
this is pretty much straight forward i.e. you cannot overwrite what is already there.
But in the case of objects and arrays then the property exists as a representation of the array as opposed to the values inside,
although, you can add more information to the object array, delete existing values but any attempt
to overwrite the existing array with a new one is imposible.

*/

//Example 1
const length;
console.log("My length is: " + length);//should not display due to error of unitialisation.

//Example 2
const weight = 55;
console.log("My original weight was: " + weight);//correctly displays weight.

weight = 70;
console.log("My new weight is: " + weight);//does not display since error in attempt to change weight in line 92

//Example 3
const dataSet =  ["Abubakar", "Mary", "John", "Ali"];
console.log("My friends are: " + dataSet);

//add items to array
dataSet.push("Richard", "Maria", "Ahmed");
console.log("My old friends plus new friends are: " + dataSet);

//attempt to remove value
dataSet.pop();
console.log("My new array of friends are: " + dataSet);//will display array with value removed

//attempt to overwrite array
dataSet = ["Gmail", "Outlook", "YahooMail"];
console.log("I have no friends on: " + dataSet);//will not display due to attempt to overwrite the array on line 107

//Example 3
const merits = {good: 10, bad: 0, fair: 5};
console.log(merits);

//attempt to add data
merits["worse"] = -5;
console.log(merits);

//attempt to overwrite object
merits = {genius: 10, smart: 5};
console.log(merits);//won't display due to attempt to overwrite object on line 119


//HOISTING
/*This refers to when variables appear to be used before being declared. It occurs since when a variable is declared 
through any of the above three statements, the statements are processed before any otherline of code.
This only happens for declarations as opposed to intialisation or assignment, i.e. the statement will be taken as if declared 
at the top of the block but the initialisation will occur only when the line of code is arrived at during execution.
*/

//Example
console.log(myName);//will be undefined instead of ReferenceError due to hoisting
var myName = "Mohamed";
