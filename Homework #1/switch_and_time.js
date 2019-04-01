//The following function adds two time values together
/*

The function should accept 4 parameters:
value1, label1, value2, label2

- value1 and value2 should accept positive integers
- label1 and label2 should accept any of the following strings: "seconds", "minutes", "hours", "days", "second", "minute", "hour", "day"

*/
var timeAdder = (value1, label1, value2, label2) => {

    let myTime;

    if (!isNaN(value1) || !isNaN(value2)) {

        // check label1
        switch (label1) {
            case "seconds":
            case "minutes":
            case "hours":
            case "days":
            case "seond":
            case "minute":
            case "hour":

                // check label2
                switch (label2) {
                    case "seconds":
                    case "minutes":
                    case "hours":
                    case "days":
                    case "seond":
                    case "minute":
                    case "hour":
                        
                        myTime = value1.toString() + ", " + label1 + ", " + value2.toString() + ", " + label2;
                        return myTime;
                        break;
                
                    default:
                        return "You entered an invalid value, please enter label2 represented by either: seconds, minutes, hours, days, second, minute, hour";
                        break;
                }
                
                break;

            default:
                return "You entered an invalid value, please enter label1 represented by either: seconds, minutes, hours, days, second, minute, hour";
                break;
        }
    } else {

        return "You entered an invalid value, please enter a positive Integer defined by the range of values [0 - 9]";
    }
}

console.log(timeAdder(10, "minutes", 4, "days"));