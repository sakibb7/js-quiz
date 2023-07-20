/**
 * Title: Quiz - 1
 * 
 * * Question
    let x = `{"b":1, "c": 2}`
    let y = JSON.parse(x)
    console.log(typeof y)

 * * Output : Object

 *  Explaination: 
    The code creates a string x that contains a JSON-encoded object with two properties “b” and “c”, and assigns it to the variable x. The JSON.parse() method then used to parse the JSON-encoded string x into a JavaScript object, which is assigned to the variable y. 
    The console.log() statement then outputs the data type of y using the typeof operator. Since y is now an object, the output will be an object.

 */



/**
 * Title: Quiz - 2
 * 
 * * Question
let x = 0.1 + 0.2
let y = 0.3
console.log(x == y)

 * * Output : false

 *  Explaination: 
    When you run this code and print the result of x == y, you may be surprised to see that it returns false. This is because of a limitation in how JavaScript handles floating-point-numbers.
    In JavaScript, numbers are represented using the IEEE 754 standard for floating-point arithmetic. This means that not all decimal numbers can be represented exactly as binary floating-point numbers.
    In particular, the decimal number 0.1 cannot be represented exactly in binary floating-point format. When you add 0.1 and 0.2 in JavaScript, the result is actually slightly larger than 0.3 due to rounding errors in the binary representation. Therefore, x is not equal to y.

 */


/**
 * Title: Quiz - 3
 * 
 * * Question 
let x = false;
let y = "0"
let z = 0;

console.log(x == y)
console.log(x == z)

 * * Output : true, true

 *  Explaination: 
    In JavaScript, when you use the == operator to compare values of different types, the operands will be converted to a common type before the comparison is made. This process is called coercion.
    In the first comparison (x==y), x is a Boolean (false) and y is a string (“0”). Since both false and “0” can be coerced to the Boolean false, the comparison returns true.
    In the second comparison (x==z), x is a Boolean (false) and z is a number (0). Since both false and 0 can be coerced to the number 0, the comparison returns true.
 */



/**
 * Title: Quiz - 4
 * 
 * * Question
let x = []
console.log(Boolean(x))

 * * Output : true

 *  Explaination: 
    In JavaScript, an empty array [] is a truthy value when coerced to a Boolean. This means that when you use Boolean(x) to converted x to a Boolean value, it will return true.
    In general, any non-empty array (i.e., an array with one or more elements) is also truthy when coerced to a Boolean.

    
*/

/**
 * Title: Quiz - 5
 * 
 * * Question
let x = "5"
let y = 2;

console.log(x + y)
console.log(x-y)


 * * Output : "52", 3

 *  Explaination: 
In the first statement, x is a string (“5”) and y is a number (2). When you use the + operator with a string and a number, JavaScript performs string concatenation: it converts the number to a string and then concatenates the two strings. So “5” and 2 are concatenated to produce the string “52”.
In the second statement, x is still a string (“5”) and y is still a number (2). However, when you use the – operator with a string and a number, JavaScript attempts to convert the string to a number. In the case, “5” can be converted to the number 5, so the expression evaluated to 5 – 2, which is 3.

    
 */






 //   ------------------------------------------------------------------------------------

/**
 * Title: Quiz - 
 * 
 * * Question


 * * Output : 

 *  Explaination: 
    
 */