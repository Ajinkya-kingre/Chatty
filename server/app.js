const express = require("express");

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());

app.use(express.urlencoded({ extended: false }));


app.get('/', (req, res)=>{
    res.send("welcome")
})

app.listen(PORT, ()=>{
    console.log(`Server is running on Port ${PORT}`)
})