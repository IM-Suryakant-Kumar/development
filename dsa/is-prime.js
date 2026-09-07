let n = 33;
let isPrime = true;
for (let i = 2; i * i <= n; i++) {
	if (n % i === 0) isPrime = false;
}
console.log(isPrime);
