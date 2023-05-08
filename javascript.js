// JavaScript Practice Questions
// May 8, 2023
// Evan Davies

// 1
var label = "keyincollege";
var tld = "ca";
var domainName = label + "." + tld;

console.log(domainName);

// 2
var isKeyin;
isKeyin = (domainName === "keyincollege.ca");

// 3
var isNotKeyin;
isNotKeyin = (domainName !== "keyincollege.ca");

console.log(isKeyin);
console.log(isNotKeyin);

// 4
// replace with any numbers
var byte1 = 13;
var byte2 = 164;
var byte3 = 129;
var byte4 = 44;

// 5
var ipAddress;
ipAddress = byte1 + "." + byte2 + "." + byte3 + "." + byte4;

console.log(ipAddress);

// 6
var multInt = 7; // replace with any number
var product;
for (let i = 0; i < 10; i++) {
    product = multInt * (i + 1)
    console.log(`${multInt} X ${i + 1} = ${product}`)
};

// 7 and 8
let evenList = [];
let oddList = [];
var evenSum = 0;
for (let i = 0; i < 100; i++) {
    var num = i + 1;
    if (num % 2 == 0) {
        evenList.push(num)
        evenSum += num
    }
    else {
        oddList.push(num)
    };
};

console.log(evenList);
console.log(oddList);
console.log(evenSum);

// 9
const perfNum = 496; // replace with any number
var divisorSum = 0;
var isPerfect;
for (let i = 1; i < perfNum; i++) {
    if (perfNum % i == 0) {
        divisorSum += i
    };
};
isPerfect = (perfNum == divisorSum);

if (isPerfect) {
    console.log(`${perfNum} is a perfect number.`);
}
else {
    console.log(`${perfNum} is not a perfect number.`)
}

// 10
const primeNum = 13; // replace with any number
let isPrime = true;
if (primeNum === 1) {
    console.log("1 is neither prime nor composite.");
}
else if (primeNum > 1) {
    for (let i = 2; i < primeNum; i++) {
        if (primeNum % i == 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(`${primeNum} is a prime number.`);
    }
    else {
        console.log(`${primeNum} is not a prime number.`);
    };
}
else {
    console.log(`${primeNum} is not a prime number.`);
};