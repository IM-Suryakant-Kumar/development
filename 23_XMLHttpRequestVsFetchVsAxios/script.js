let url = "http://localhost:3000";

// XMLHttpRequest
// let xhr = new XMLHttpRequest(); // Create
// xhr.open("POST", url); // configure
// xhr.setRequestHeader("Content-Type", "text/plain");
// xhr.send("Something confidential data"); // Request
// xhr.addEventListener("load", () => {
//   console.log(xhr.status);
//   console.log(xhr.statusText);
//   console.log(xhr.response);
// });

// Fetch
// fetch(url, {
//   method: "POST",
//   headers: {
//     "Content-Type": "text/plain",
//   },
//   body: "Hello This is also some private data",
// })
//   .then((response) => {
//     console.log(response);
//     return response.text();
//   })
//   .then((data) => {
//     console.log(data);
//   });
axios({
  method: "POST",
  url: "http://localhost:3000",
  data: "YO!! Private data"
}).then((response) => {
  console.log(response.status);
  console.log(response);
  console.log(response.data);
});
