let n = 50;
let ans = "";
for (let i = 2; i <= n; i++) {
  let isPrime = true;
  for (let j = 2; j * j <= i; j++) {
    if (i % j === 0) isPrime = false;
  }
  if(isPrime) ans += " " + i;
}
console.log(ans);