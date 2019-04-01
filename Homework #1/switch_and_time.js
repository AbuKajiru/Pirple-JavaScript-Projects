//The following function adds two time values together
/*

The function should accept 4 parameters:
value1, label1, value2, label2

- value1 and value2 should accept positive integers
- label1 and label2 should accept any of the following strings: "seconds", "minutes", "hours", "days", "second", "minute", "hour", "day"

*/

// Create a function that contains and checks all the possible values of existence of the string portions of the variables
// so that it is easier to add, retrieve and change values at will without changing the overall structure of the code. 
var returnValue = (value) => {

    switch (value) {
        // Return values if provided.
        case "seconds":
            return "seconds";
        case "minutes":
            return "minutes";
        case "hours":
            return "hours";
        case "days":
            return "days";
        case "second":
            return "second";
        case "minute":
            return "minute";
        case "hour":
            return "hour";
    
        default:
            // If value passed is non existent then return an error message.
            return "Not Defined!";
    }
}

var timeChecker = (timeValue, timeLabel) => {
    
    switch (timeLabel) {

        case "seconds":
            if ( (timeValue % 60) === 0 ) {

                timeValue = timeValue / 60;
                
                if (timeValue > 1) {
                    timeLabel = "minutes";
                } else {
                    timeLabel = "minute";
                }

            }

            return [timeValue, timeLabel];
        
        case "minutes":
            if ((timeValue % 60) === 0) {

                timeValue = timeValue / 60;

                if (timeValue > 1) {
                    timeLabel = "hours";
                } else {
                    timeLabel = "hour";
                }

            }

            return [timeValue, timeLabel];
        
        case "hours":
            if ((timeValue % 24) === 0) {

                timeValue = timeValue / 60;

                if (timeValue > 1) {
                    timeLabel = "days";
                } else {
                    timeLabel = "day";
                }

            }

            return [timeValue, timeLabel];

        default:
            return [timeValue, timeLabel];
    }
}

var timeChooser = (time1, timeLabel1, time2, timeLabel2) => {

    let timeTotal;
    let stringLength;

    switch (timeLabel1) {
        case "second":
        case "seconds":
            if (timeLabel2 === "minutes") {
                time2 *= 60; 

                timeTotal = time1 + time2;

                if (timeTotal > 1) {
                    stringLength = timeLabel1.length;

                    if (timeLabel1.charAt(stringLength - 1) != "s") {
                        timeLabel1 += "s";
                    }
                }

                return timeChecker(timeTotal, timeLabel1);
            }else if (timeLabel2 === "hours") {
                time2 *= 3600;

                timeTotal = time1 + time2;

                if (timeTotal > 1) {
                    stringLength = timeLabel1.length;

                    if (timeLabel1.charAt(stringLength - 1) != "s") {
                        timeLabel1 += "s";
                    }
                }

                return timeChecker(timeTotal, timeLabel1);
            }else if (timeLabel2 === "days") {
                time2 *= 86400;

                timeTotal = time1 + time2;

                if (timeTotal > 1) {
                    stringLength = timeLabel1.length;

                    if (timeLabel1.charAt(stringLength - 1) != "s") {
                        timeLabel1 += "s";
                    }
                }

                return timeChecker(timeTotal, timeLabel1);
            }else{
                return "Not compatitble!";
            }            
        
        case "minutes":
        case "minute":
            if (timeLabel2 === "hours") {
                time2 *= 60;

                timeTotal = time1 + time2;

                if (timeTotal > 1) {
                    stringLength = timeLabel1.length;

                    if (timeLabel1.charAt(stringLength - 1) != "s") {
                        timeLabel1 += "s";
                    }
                }

                return timeChecker(timeTotal, timeLabel1);
            }else if (timeLabel2 === "days") {
                time2 *= 1440;

                timeTotal = time1 + time2;

                if (timeTotal > 1) {
                    stringLength = timeLabel1.length;

                    if (timeLabel1.charAt(stringLength - 1) != "s") {
                        timeLabel1 += "s";
                    }
                }

                return timeChecker(timeTotal, timeLabel1);
            }else{
                return "Not compatible!";
            }
        
        case "hours":
        case "hour":
            if (timeLabel2 === "days") {
                time2 *= 24;

                timeTotal = time1 + time2;

                if (timeTotal > 1) {
                    stringLength = timeLabel1.length;

                    if (timeLabel1.charAt(stringLength - 1) != "s") {
                        timeLabel1 += "s";
                    }
                }

                return timeChecker(timeTotal, timeLabel1);
            } else {
                return "Not compatible!";
            }

        default:
            return "Not compatible!";
    }
}

var timeAdder = (value1, label1, value2, label2) => {

    let value3;
    let label3;
    let stringLength;
    let labelOneReturn;
    let labelTwoReturn;

    if (!isNaN(value1) && !isNaN(value2)) { // check if number

        labelOneReturn = returnValue(label1);

        if (labelOneReturn != "Not Defined!") { // check of defined amongst set of strings for label1
            // Run normal code
            
            labelTwoReturn = returnValue(label2);

            if (labelTwoReturn != "Not Defined!") { // check of defined amongst set of strings for label2
                //Run normal code

                if (labelOneReturn === labelTwoReturn) {
                    // check if values are equal, if so then do direct calculations

                    value3 = value1 + value2; // add the numerical values
                    label3 = labelOneReturn; // pick one of the string values since they are equal

                    stringLength = label3.length;

                    if (label3.charAt(stringLength-1) != "s") {
                        // add an "s" at the end of string to make it plural, i.e. "hours" instead of "hour".
                        label3 += "s";
                    }

                    return timeChecker(value3, label3); //return array of two values

                } else {
                    // if values not equal then find the larger of the values and use that as main time representation

                    var temp = timeChooser(value1, label1, value2, label2);

                    if (temp === "Not compatitble!") {
                        return timeChooser(value2, label2, value1, label1);
                    } else {
                        return temp;
                    }
                }


            }else{
                // Display Error
                console.log("You entered an invalid value for label2!");
            }
        }else{
            // Display error    
            console.log("You entered an invalid value for label1!");
        }

    } else {

        return "You entered an invalid value, please enter a positive Integer defined by the range of values [0 - 9]";
    }
}

console.log(timeAdder(10, "minutes", 4, "days"));