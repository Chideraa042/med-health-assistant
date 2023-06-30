//MongoDB
require('./config/db');

const app = require('express')();
const port = 5000;

const UserRouter = require('./api/User');

//For accepting posts from data
const bodyParser = require('express').json;
app.use(bodyParser());

app.use('user', UserRouter)

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
})