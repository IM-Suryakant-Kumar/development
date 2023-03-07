// document.cookie = "name=pepcoder; ";
// let date = new Date();
// document.cookie = `name=peppy; expires = ${date.toUTCString()}`;
document.cookie = `name=peppy; secure; samesite=strict;`;
console.log(document.cookie);