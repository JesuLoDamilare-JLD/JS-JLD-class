/* 3 ways you can store your values in variable: var, let, cons. 
The forecast today is 300 kelvin. Create a variable named kelvin and set it equal to 300
Celsius is similar to kelvin - the only difference is that celsius is 273 degrees less than kelin. Convert kelvin to celsius and store the result in another variable named celsius
Use this equation to calculate Fahrenheit, then store the answer in a variable named fahrenheit
        Fahrenheit = celcius * (9/5) + 32
When you convert celcius to fahrenheit, you often get a decimal number. Use a method in JS from the built in Math object to round down the Fahrenheit temperature and save the result to the fahrenheit vairable
write on document the temperature in fahrenheit as follows: "The temperature is TEMPERATURE degrees Fahrenheit." where TEMPERATUER will be replaced with the value seved to fahrenheit.
*/

// const kelvin = 5000;
// // when kelvin is 0, celcius is 273 degree
// const celcius = kelvin - 273;
// let fahrenheit = celcius * (9/5) + 32; // It can result at this point as decimal.

// // Math.floor()
// fahrenheit = Math.floor(fahrenheit); // At this point its round down to a whole number
// document.write(`The temperature is ${fahrenheit} degrees Fahrenheit`)

/*
Create a variable named myAge, and set it equal to your age as a number
Create a variable names earlyYears and save the value 2 to it.
Use the multiplication assignment operator to multiply the value saved to earlyYears by 10.5 and reassign it to earlyYears
Since we already accounted for the first two years, take the myAge variable, and subtract 2 from it. Set the result eqial to a variable called laterYears.
Multiply the laterYears variable by 4 to calculate the number of dog years accounted for by your later years
Add earlyYears and laterYears together, and store that in a variable named myAgeInDogYears
Use a string built-in method to render the string to lower case, and store the result in a variable valled myName
write on document the statment as follows: "My name is NAME. I am HUMAN AGE years old in human years which is DOG AGE years old in dog years."

*/


const myAge = 42;
let earlyYear = 2;
earlyYear *= 10.5; // earlyYear = earlyYear * 10.5
let laterYears = myAge - 2;
laterYears *= 4;
let myAgeInDogYears = earlyYear + laterYears;
let myName = "JUDEdaniel".toLocaleLowerCase();
document.write(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);