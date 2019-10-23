// importing dependencies
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

// bodyparser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// MongoDB connection
// const uri = process.env.DB_URI;
const uri = process.env.DB_LOCAL;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}).catch(error => console.log(error));  

// check db connection status
mongoose.connection.once('open', () => {
  console.log('MongoDB connection established')
});
mongoose.connection.on('error', err => {
  console.log(err);
});

// use routes
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
// app.use('/api/products', require('./routes/api/products'));

// serve static assets if in production
if(process.env.NODE_ENV === 'production') {
  // set static folder
  app.use(express.static('client/build'));

  app.length('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on PORT: ${port}`)
});