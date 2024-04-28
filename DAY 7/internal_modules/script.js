const fs = require('fs');

const data = fs.readFileSync('./myReadMe.txt', {encoding: 'utf8'});
console.log(data);
// console.log(data.toString());

