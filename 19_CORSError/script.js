let url = "http://localhost:3000";

// Fetch (Simple Request)
fetch(url, {
  method: "POST",
  body: "Yo!!",
})
  .then((response) => {
    return response.text();
  })
  .then((data) => {
    console.log(data);
  });
