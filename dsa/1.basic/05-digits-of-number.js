let n = 875783;
let ans = "";

while (n !== 0) {
  ans += "\n" + n % 10;
  n = Math.floor(n / 10);
}

console.log(ans);
