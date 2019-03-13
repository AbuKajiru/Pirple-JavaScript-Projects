/*
All men are mortal
Socrates is a man.
Therefore, socrates is mortal.

Using "if statements" and any other logical operators and data-types seen fit, the code recreates this logical argument.
The code makes clear that "socrates" is part of a collection of items referred to as "men",
and that all members of this collection are mortal. 
It demonstrates that since Socrates is part of this collection, it follows that he is mortal as well.

*/

var name = "Socrates";
var isMan;
var isMortal;

if (name === "Socrates") {
    
    let myString;

    myString = "The name is " + name;

    isMan = true;

    if (isMan === true) {
        
        myString = myString + " who is part of a group of men";
    
        isMortal = true;
    
        if (isMortal) {
            
            myString = myString + " whom are mortal.";
        }

    }

    console.log(myString);
}

/*

This cake is either vanilla or chocolate.
This cake is not chocolate.
Therefore, this cake is vanilla.

*/

var isCake = true;
var isVanilla;
var isChocolate;

if (isCake === true) {
    
    let mySecondString;

    mySecondString = "This is a cake,";

    isVanilla = true;
    isChocolate = false;

    if(isVanilla || isChocolate){
        
        mySecondString = mySecondString + " it can be either valnilla or chocolate,";

        if (!isChocolate) {
            
            mySecondString = mySecondString + " but it is not chocolate. Therefore, it is vanilla.";

        }
    }

    console.log(mySecondString);
}