var fizzBuzz = (startValue = 1, endValue = 100, displayBoolean) => {
    for (let index = startValue; index <= endValue; index++) {
        // Run normal code
        let primeFlag = true;
        let printedValue = null;

        if ((index % 3) === 0) {
            if (displayBoolean === true) {
                printedValue = "Fizz.\n" + " " +  "Value At Position = " + index;
            } else {
                printedValue = "Fizz.";
            }
        }

        if ((index % 5) === 0) {
            if (displayBoolean === true) {
                printedValue = "Buzz.\n" + " " + "Value At Position = " + index;
            } else {
                printedValue = "Buzz.";
            }
        }

        if (((index % 3) === 0) && ((index % 5) === 0)) {
            if (displayBoolean === true) {
                printedValue = "Fizzbuzz.\n" + " " + "Value At Position = " + index;
            } else {
                printedValue = "Fizzbuzz.";
            }
        }

        for (let i = 2; i < 9; i++) {
            if (index != i) {
                if ((index % i) === 0) {
                    primeFlag = false;
                }
            }
        }

        if (((index % 1) === 0) && ((index % index) === 0) && primeFlag === true) {
            if (displayBoolean === true) {
                printedValue = "Prime.\n" + " " + "Value At Position = " + index;
            } else {
                printedValue = "Prime.";
            }
        }

        if (printedValue === null) {
            console.log(index);
        } else {
            console.log(printedValue);
        }

    }
}

fizzBuzz(1, 10, true);
fizzBuzz(1, 10, false);

