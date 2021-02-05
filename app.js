const express = require("express");
const app = express();
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
const users = require("./routes/api/users");
const trainers = require("./routes/api/trainers");
const workouts = require("./routes/api/workouts");
const reviews = require("./routes/api/reviews");
const locations = require("./routes/api/locations");
const bodyParser = require('body-parser');
const passport = require('passport');
const User = require('./models/User');
const keys = require('./config/keys');
const AWS = require('aws-sdk');
const path = require('path')

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  })
}




mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));


app.use(passport.initialize());
require('./config/passport')(passport);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req,res)=>{
    const user = new User({
        handle: 'Daniel',
        email: 'test@test.com',
        password: '12345'
    })
    res.send('Hello World')
})

app.use("/api/users", users);
app.use("/api/trainers", trainers);
app.use("/api/workouts", workouts);
app.use("/api/locations", locations);
app.use("/api/reviews", reviews);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
