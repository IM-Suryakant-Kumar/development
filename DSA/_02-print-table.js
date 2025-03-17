// iterative
function printTable(n) {
  for(let i = 1; i <= 10; i++) {
    console.log(n + " * " + i + " = " + n * i);
  }
}
printTable(5);
// recursive
function printTableRe(n, i = 1) {
  if(i === 11) return;
  console.log(n + " * " + i + " = " + n * i);

  printTableRe(n, i + 1);
}
printTableRe(5);
