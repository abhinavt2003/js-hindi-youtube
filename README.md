# js-hindi-youtube
A code repo for javascript series by Code aur Chai Youtube Channel


Asynchronous aur synchronous JavaScript mein farq hota hai timing mein. Synchronous code woh hota hai jo step-by-step chalta hai, ek kaam ko poora karne ke baad hi dusra kaam shuru hota hai. Jaise ki, agar ek function execute ho raha hai aur usme koi delay ya wait nahi hai, toh dusra kaam tab tak nahi hoga jab tak pehla kaam complete na ho.

Lekin asynchronous code mein, kaam ek ke baad ek nahi hota. Jab koi kaam shuru hota hai jo time-consuming ho sakta hai, jaise ki file download karna ya server se data fetch karna, toh JavaScript dusre kaam ko rok kar wait nahi karta. Instead, woh dusre kaam ko shuru kar deta hai. Jab time-consuming kaam complete ho jata hai, tab uska result milta hai aur code aage badhta hai.

In web development, particularly with Node.js and Express, req.params and req.body (often confused with req.data) are used to handle different types of data in HTTP requests. Here's when to use each:

Difference between req.params and req.body
req.params
Purpose: To capture data from the URL path.
Use Case: When you need to extract variables directly from the URL path.
Example: If you have a route defined as /user/:id, and a request is made to /user/123, the id can be accessed via req.params.id.
Typical Use: Dynamic URLs, RESTful endpoints where resources are identified by some identifier.
javascript
Copy code
app.get('/user/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`User ID is ${userId}`);
});
req.body
Purpose: To capture data sent in the body of the request.
Use Case: When you need to handle data submitted through forms, JSON payloads, or other types of data in POST, PUT, PATCH requests.
Example: If you send a POST request with JSON data to /user, the data can be accessed via req.body.
Typical Use: Submitting forms, sending JSON data, creating or updating resources.
javascript
Copy code
app.post('/user', (req, res) => {
  const userData = req.body;
  res.send(`User data received: ${JSON.stringify(userData)}`);
});
Key Differences
req.params: Used for capturing route parameters (part of the URL).
req.body: Used for capturing the body content of the request (e.g., form data, JSON payloads).
Summary
Use req.params for variables embedded in the URL.
Use req.body for data sent in the body of the request, commonly used in POST, PUT, PATCH methods.
