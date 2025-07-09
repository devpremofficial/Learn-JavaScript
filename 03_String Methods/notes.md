Methods -> Actions that can be performed on objects.

SYNTAX
stringName/stringVariable.method()

Examples of methods
console.log()
alert()

Strings are immutable in JS
-> In javascript strings are immutable (Jise change nahi kiya ja sakta ho), no changes can be made to strings.

Whenever we do try to make a change, a new string is created and old one remains same.


String methods with arguments
-> Arguments is a some value that we pass to the method

SYNTAX
stringName.method(arguments)

* when we write the multiple methods one after one (method chaining), in this case our methods compute from left to right.

str.methodOne().methodTwo()
---------------------------->


SLICE METHOD
-> Returns a part of the original string as a new string.

SYNTAX
str.slice(startingIndex, endingIndex+1);

let str = "ILoveCoding";
str.slice(5) // "Coding"
str.slice(1, 4) // "Love"