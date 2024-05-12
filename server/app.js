const express = require("express");
const connectionDB = require("./db/db");
const registrationRoutes = require('./routes/auth/registration');
const loginRoutes = require('./routes/auth/login');
const cors = require("cors"); 







// user Model
const userModel = require("./model/user");

//mongoDB connection
connectionDB();

// app use
const app = express();

// cors middleware
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// handling cors policy
const corsOptions = {
    origin: 'http://localhost:5173',
    methods:"GET,POST,PUT,DELETE,PATCH,HEAD",
   credentials: true,
   
  }

app.use(cors(corsOptions))


app.get("/", (req, res) => {
  res.send("welcome");
});

// Use the registration routes
app.use('/api/routes/auth', registrationRoutes);

// Use the login routes
app.use('/api/routes/auth', loginRoutes);



// localhost
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`);
});
