// Strings

console.log('hello world');
let email = 'mario@thenetninja.co.uk';
console.log(email);


// string concatination

let firstName = 'Brandon';
let lastName = 'Sanderson';

let fullName = firstName + ' ' + lastName;

console.log (fullName);


// getting characters
console.log(fullName [0]); // Index börjar på 0


//string length
console.log(fullName.length); // finding property of the string 

// string methods

console.log(fullName.toUpperCase()); // Method/function, i detta läge UPPERCASE
let result = fullName.toLowerCase(); // nu är 'fullName' lagrat i variabeln "result" med funktionen/metoden toLowerCase

console.log(result, fullName);

let index = email.indexOf('@') // Detta kallas istället för ett argument, i detta fallet räknar den var index/siffra/plats @ har 

console.log(index);