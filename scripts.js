const seed = [1, 2, 3, 4, 5, 6, 7, 8, 9];
seed.sort(() => Math.random() - 0.5);

// set row 1 as the seed
let r1 = [...seed];

let r2 = [...r1];
r2.push(r2.shift());
r2.push(r2.shift());
r2.push(r2.shift());

let r3 = [...r1];
r3.unshift(r3.pop());
r3.unshift(r3.pop());
r3.unshift(r3.pop());

let r4 = [...seed];
r4.unshift(r4.pop());

let r5 = [...r4];
r5.push(r5.shift());
r5.push(r5.shift());
r5.push(r5.shift());

let r6 = [...r4];
r6.unshift(r6.pop());
r6.unshift(r6.pop());
r6.unshift(r6.pop());

let r7 = [...seed];
r7.push(r7.shift());

let r8 = [...r7];
r8.push(r8.shift());
r8.push(r8.shift());
r8.push(r8.shift());

let r9 = [...r7];
r9.unshift(r9.pop());
r9.unshift(r9.pop());
r9.unshift(r9.pop());

console.log("row 1 = " + r1);
console.log("row 2 = " + r2);
console.log("row 3 = " + r3);
console.log("row 4 = " + r4);
console.log("row 5 = " + r5);
console.log("row 6 = " + r6);
console.log("row 7 = " + r7);
console.log("row 8 = " + r8);
console.log("row 9 = " + r9);
