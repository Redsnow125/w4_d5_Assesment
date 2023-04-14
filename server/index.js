const express = require("express");
const cors = require("cors");
const controller = require('./controller')

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment } = controller;

app.get("/api/compliment", getCompliment);

const {getFortune} = controller;

app.get('/api/fortune', getFortune)

const {getboss} = controller
const {editboss} = controller
const {addboss} = controller
const {deleteboss} = controller

app.get('/api/bosses', getboss)
app.put('/api/bosses', editboss)
app.post('/api/bosses', addboss)
app.delete('/api/bosses', deleteboss)




app.listen(4000, () => console.log("Server running on 4000"));
