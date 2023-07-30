let a = 123;
let b = a;
console.log(a, b); // a and b equal
a = 1234;
console.log(a, b); // a and b not equal

let ab = [1, 23, 4, 57];
let abc = ab;
console.log(ab, abc); //ab and abc equal
ab.sort((a, b) => a - b);
console.log(ab, abc); // ab and abc equal . but line number 5 ke according dono equal nhi hone chahiy
