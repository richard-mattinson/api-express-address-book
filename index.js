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
// const meetings = require("./meetings")

//Tell express we want to use the morgan library
app.use(morgan("dev"))
//Tell express we want to use the cors library
app.use(cors())
// Allows json to be processed in express
app.use(express.json())

// ---------------- GETS ----------------

// ---- ALL CONTACTS ----
app.get("/contacts", (request, response) => {
    console.log("Someone made a GET Contacts request to /");
    // sends a response from the server to the client
    // response.send("Great work")
    response.json({ contacts });
});

// ---- SINGLE CONTACT BY ID ----
app.get("/contacts/:id", (request, response) => {
    const id = Number(request.params.id)
    console.log("id", id);
    const contact = contacts.find(contact => contact.id === id)
    console.log("Contact by ID", contact);
    response.json({ contact });
});

// // the brackers are a callvack funtionm, they will runw hen the user makes a GET request
// app.get('/', (request, response) => {
//     console.log("Someone made a GET request to /");
//     // sends a response from the server to the client
//     // response.send("Great work")
//     response.json({message: 'I\'m getting!'})
// })

// app.get("/meetings", (request, response) => {
//   console.log("Someone made a GET Meetings request to /");
//   // sends a response from the server to the client
//   // response.send("Great work")
//   response.json({ meetings });
// });

// ---------------- POSTS ----------------
// ---- POST SINGLE CONTACT ----
app.post("/contacts", (request, response) => {
    const contact = request.body 
    contact.id = contacts.length +1
    console.log("Body", request.body);
    contacts.push(contact)
    // response.send("Contact updated!");
    response.status(201).json({ contact });
    // response.json(contacts)
});

// app.post('/', (request, response) => {
//     console.log("Someone made a POST request to /");
//     // sends a response from the server to the client
//     // response.send("Great work");
//     response.json({ message: "Post was made" });
// })


//Start up our server
const port = 3030
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}/`)  
})