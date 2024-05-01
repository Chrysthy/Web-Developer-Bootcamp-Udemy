// Important array methods:
//push(value) - adds value to the END of an array and it gets updated

let movieLine = ['Tom', 'Nancy'];

movieLine.push('Jerry');
movieLine.push('eva');

console.log(movieLine);
console.log(movieLine.length);


//pop() - removes and returns last value in arraya. Does not require any values

movieLine.pop()
console.log(movieLine);

//Example two

let barbell = [];

barbell.push(45);
barbell.push(45);
barbell.push(25);
barbell.push(10);
barbell.push(2.5);

console.log(barbell);
console.log(barbell.length);

barbell.pop();
barbell.pop();
barbell.pop();

console.log(barbell);
console.log(barbell.length);


//unshift(value) - adds value to START of an array



//shift() - removes and returns first element in an array