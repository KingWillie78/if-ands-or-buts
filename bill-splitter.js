const prompt = require('prompt-sync')();

const person1 = prompt('How much did person1 pay? ');
const person2 = prompt('How much did person2 pay? ');

if (person1 > person2) {
    console.log('person1 owes person2 $')
}
else {
    console.log('person2 owes person1 $')
}
