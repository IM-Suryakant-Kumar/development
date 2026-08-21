let h = prompt("Enter the height of the triangle");
let b = prompt("Enter the base of the triangle");
const area = 0.5 * b * h;
const root = document.querySelector("#root");
root.textContent = `The area of the triangle is ${area}`;
console.log(`The area of the triangle is ${area}`);
