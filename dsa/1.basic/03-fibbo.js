let a = 0, b = 1;
let n = 10;
let ans = "";
for (let i = 1; i <= n; i++) {
  ans += " " + a;
  c = a + b;
  a = b;
  b = c;
}
console.log(ans);