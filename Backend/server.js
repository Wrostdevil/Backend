const express = require('express');
const app = express();
app.use(express.json()); // Middleware to parse JSON request bodies
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
app.post("/notes", (req, res) => {
    notes.push(req.body);
    // console.log(req.body);
    console.log(notes);
})