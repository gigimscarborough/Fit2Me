const express = require("express");
const app = express();
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
const users = require("./routes/api/users");
const bodyParser = require('body-parser');
const passport = require('passport');
const User = require('./models/User');
const keys = require('./config/keys');
const AWS = require('aws-sdk');


// start of AWS S3
app.get('/',(req,res)=>{
  AWS.config.update({
    accessKeyId: keys.AWSaccessKeyId,
    secretAccessKey: keys.AWSsecretAccessKey
  });

  let s3 = new AWS.S3();

  async function getImage(){
    const data =  s3.getObject(
      {
          Bucket: 'fit2me-aa-dev',
          Key: 'Fit 2 me.png'
        }
      
    ).promise();
    return data;
  }

  getImage()
 .then((img)=>{
  let image="<img src='data:image/jpeg;base64," + encode(img.Body) + "'" + "/>";
  let startHTML="<html><body></body>";
  let endHTML="</body></html>";
  let html=startHTML + image + endHTML;
  res.send(html)
  }).catch((e)=>{
        res.send(e)
  })

  function encode(data){
    let buf = Buffer.from(data);
    let base64 = buf.toString('base64');
    return base64
    }

  })
// end of AWS S3


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
    user.save()
    res.send('Hello World')
})

app.use("/api/users", users);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
