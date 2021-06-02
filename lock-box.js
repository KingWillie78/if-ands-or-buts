const prompt = require('prompt-sync')();

const pinCode = 0521;

const open = Number(prompt('Open to get to class on time! '));

if(open == pinCode){
    console.log('It opened!');
}
else{
    console.log('Still closed!');
}