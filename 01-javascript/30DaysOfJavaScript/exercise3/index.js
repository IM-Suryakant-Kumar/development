let firstName = "John";
let lastName = "Doe";
let country = "USA";
let city = "New York";
let age = 30;
let isMarried = false;
let year = new Date().getFullYear();
console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);
console.log("--------------------------");
console.log(typeof 10 === typeof "10");
console.log(parseInt("9.8") === 10);
console.log(typeof true, typeof false);
console.log(Boolean(" "), Boolean(1), Boolean({ name: "John" }));
console.log(Boolean(""), Boolean(0), Boolean(NaN));
console.log("--------------------------");
console.log(4 > 3); // true
console.log(4 >= 3); // true
console.log(4 < 3); // false
console.log(4 <= 3); // false
console.log(4 == 4); // true
console.log(4 === 4); // true
console.log(4 != 4); // false
console.log(4 !== 4); // false
console.log(4 != "4"); // false
console.log(4 == "4"); // true
console.log(4 === "4"); // false
console.log("--------------------------");
console.log("Jargon".length, "Python".length);
console.log("Jargon".length > "Python".length);
console.log("--------------------------");
console.log(4 > 3 && 10 < 12); // true
console.log(4 > 3 && 10 > 12); // false
console.log(4 > 3 || 10 < 12); // true
console.log(4 > 3 || 10 > 12); // true
console.log(!(4 > 3)); // false
console.log(!(4 < 3)); // true
console.log(!false); // true
console.log(!(4 > 3 && 10 < 12)); // false
console.log(!(4 > 3 && 10 > 12)); // true
console.log(!(4 === "4")); // true
console.log("--------------------------");
console.log(!"Jargon".includes("on"), !"Python".includes("on"));
console.log("--------------------------");
const date = new Date();
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getMilliseconds());
console.log(date.getTime());
console.log(Date.now());
const allSeconds = Date.now()
const timeInSeconds = new Date().getTime();
console.log(allSeconds == timeInSeconds);
console.log("--------------------------");
