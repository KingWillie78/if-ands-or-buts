const prompt = require('prompt-sync')();

const handsomeGuy = prompt('How much did handsomeGuy pay? ');
const singleGirl = prompt('How much did singleGirl pay? ');

if (handsomeGuy > singleGirl) {
    console.log('singleGirl owes $')
}
else {
    console.log('handsomeGuy owes $')
}