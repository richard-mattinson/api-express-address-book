// const express = require('express');
// const morgan = require('morgan');
// const cors = require('cors');
// const app = express();

// app.use(morgan("dev""))
// app.use(cors())

// const port = 4040
// app.listen(port, () => {
//     console.log(`Sever is running on http://localhost:${port}`);
// })

//Include the express library
const express = require("express")
//Include the morgan middleware
const morgan = require("morgan")
//Include the cors middleware
const cors = require("cors")
const { response } = require("express")

//Create a new express application
const app = express()

const contacts = require("./contacts")   

//Tell express we want to use the morgan library
app.use(morgan("dev"))
//Tell express we want to use the cors library
app.use(cors())
// Allows json to be processed in express
app.use(express.json())

// the brackers are a callvack funtionm, they will runw hen the user makes a GET request
app.get('/', (request, response) => {
    console.log("Someone made a GET request to /");
    // sends a response from the server to the client
    // response.send("Great work")
    response.json({message: 'I\'m getting!'})
})

app.get("/contacts", (request, response) => {
  console.log("Someone made a GET request to /");
  // sends a response from the server to the client
  // response.send("Great work")
  response.json({ contacts });
});

// app.post('/', (request, response) => {
//     console.log("Someone made a POST request to /");
//     // sends a response from the server to the client
//     // response.send("Great work");
//     response.json({ message: "Post was made" });
// })

// app.post("/contacts", (request, response) => {
// contacts.length +1
//   console.log("Body", request.body);
//   response.json({ contact: {} });
// });

//Start up our server
const port = 3030
app.listen(port, () => {
 console.log(`Server is running on http://localhost:${port}/`)
})