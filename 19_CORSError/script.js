let url = `https://localhost:3000`;

// Fetch (Simple Request)
fetch(url, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: "Yo!!",
})
  .then((response) => {
    return response.text();
  })
  .then((data) => {
    console.log(data);
  });
