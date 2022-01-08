const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const cookieParser = require('cookie-parser');
const { requireAuth, checkUser } = require('./middleware/authMiddleware');

const app = express();

// middleware
app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());

// view engine
app.set('view engine', 'ejs');

// database connection
const dbURI = 'mongodb+srv://Charles-Eguale:14032001@charles.7wrx7.mongodb.net/node-auth?retryWrites=true&w=majority'
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
  .then((result) => app.listen(3000), 'connected to database')
  .catch((err) => console.log(err));

// routes
app.get('*', checkUser);
app.get('/', requireAuth, (req, res) => res.render('home'));
app.get('/preview',  (req, res) => res.render('preview'));
app.use(authRoutes);


// profile routes
app.get('/profile1', (req, res) => {
  res.render('profile1')
} )

app.get('/profile2', (req, res) => {
  res.render('profile2')
} )

app.get('/profile3', (req, res) => {
  res.render('profile3')
} )

app.get('/profile4', (req, res) => {
  res.render('profile4')
} )

app.get('/profile5', (req, res) => {
  res.render('profile5')
} )

app.get('/profile6', (req, res) => {
  res.render('profile6')
} )


