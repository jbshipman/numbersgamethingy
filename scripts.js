// const el = document.getElementById("test");
// alert(el.innerText);

const seed = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let r1 = [],
//   r2 = [],
//   r3 = [],
//   r4 = [],
//   r5 = [],
//   r6 = [],
//   r7 = [],
//   r8 = [],
//   r9 = [];

// console.log(r1, r2, r3, r4, r5, r6, r7, r8, r9);

// set row 1 as the seed
let r1 = [...seed];

// temp rows to manipulate row 1 without changing row 1
let tempRowA = [...r1];
let tempRowB = [...r1];
let tempRowC = tempRowA.slice(1); //save with first removed
let tempRowD = tempRowB.shift(-8); //save only first

let r2 = [...tempRowC]; //set r2 as a copy
r2.push(tempRowD); //push first to last

console.log("Seed = " + seed);
console.log("row 1 = " + r1);
console.log("tempRowC = " + tempRowC);
console.log("tempRowD = " + tempRowD);
console.log("row 2 = " + r2);

// let frontThree = r1.slice(0, 3);
// console.log(frontThree);

// let backSix = r1.slice(-6);
// console.log(backSix);

// r2 = backSix;
// r2.push(frontThree);
// console.log(r2);
