const express = require('express');
const app = express();
const mongoose = require('mongoose');
const authRoute = require('./routers/auth');
const Update = require('./routers/Update');

// connect to DB
mongoose
  .connect('mongodb://localhost:27017/joi', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    // Connection successful, start the server
    app.listen(3000, () => {
      console.log('Server is Up and Running...');
    });
    console.log('Connected to MongoDB!');
  })
  .catch((err) => {
    // Connection failed, handle the error
    console.error('Error connecting to MongoDB:', err.message);
  });

app.use(express.json());

// Route Middleware
app.use('/api/update', Update);
app.use('/api/user', authRoute);
