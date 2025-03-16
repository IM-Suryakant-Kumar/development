// approach - by finding the remainder
function isEven(n) {
  if(n % 2 === 0) return true;
  else return false;
}

// approach - Using bitwise AND operator
function isEven(n) {
  if((n & 1) === 0) return true
  else return false;
}

// approach - Using bitwise shift operator
function isEven(n) {
  if(n === (n >> 1) << 1) return true
  else return false;
}

console.log(isEven(4));
console.log(isEven(3));
console.log(isEven(2));
console.log(isEven(5));