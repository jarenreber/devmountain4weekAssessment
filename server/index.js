const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());
app.use(express.json()); // When we want to be able to accept JSON.

const {getCompliments, getFortune, getTrails, addTrails, deleteTrail, updateTrail} = require('./controller')

app.get('/api/compliments', getCompliments)
app.get('/api/fortunes', getFortune)
app.get('/api/trails', getTrails)
app.post('/api/trails', addTrails)
app.delete('/api/trails/:id', deleteTrail)


app.listen(4000, () => console.log("Server running on 4000"));