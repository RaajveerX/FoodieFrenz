const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');
const {createReview,readReview,updateReview,deleteReview,readAllReviews} = require('./reviews.js');
const {createCollection,readCollection,updateCollection,deleteCollection,readAllCollections} = require('./collections.js');
const {createUser,readUser,updateUser} = require('./users.js');

const uri = "mongodb+srv://clusterjran:waQ4rlwu2L8nM9eZ@jran.whhw2py.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(uri)
const database = mongoose.connection

database.on('error', (error) => {
  console.log(error)
})
database.once('connected', () => {
  console.log('Database Connected');
})


//Express Setup

const app = express();
const port = 3009;
app.use(logger('dev'));
//Support on JSON requests
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("client"));
app.use(express.static('client/html_css_js'));


//REVIEWS

app.post('/createReview', async (req, res) => {
  await createReview(req,res)
});

app.get('/readReview/:id', async (req, res) => {
  await readReview(req,res)
});

// TODO #1: Add Express Route /update
app.put('/updateReview/:id',async (req,res)=>{
  await updateReview(req,res)
})

// TODO #2: Add Express Route /delete
app.delete('/deleteReview/:id',async (req,res)=>{
  await deleteReview(req,res)
})

app.get('/readAllReviews/:restaurantName', async (req,res)=>{
  await readAllReviews(req,res)
})


//COLLECTIONS
app.post('/createCollection', async (req, res) => {
  await createCollection(req,res)
});

app.get('/readCollection/:id', async (req, res) => {
  await readCollection(req,res)
});

// TODO #1: Add Express Route /update
app.put('/updateCollection/:id',async (req,res)=>{
  await updateCollection(req,res)
})

// TODO #2: Add Express Route /delete
app.delete('/deleteCollection/:id',async (req,res)=>{
  await deleteCollection(req,res)
})

app.get('/readAllCollections/:user', async (req,res)=>{
  await readAllCollections(req,res)
})


//USERS
app.post('/createUser', async (req, res) => {
  await createUser(req,res)
});

app.get('/readUser/:username', async (req, res) => {
  await readUser(req,res)
});

// TODO #1: Add Express Route /update
app.put('/updateUser/:id',async (req,res)=>{
  await updateUser(req,res)
})


app.get('/', (req, res) => {
  res.sendFile('/client/html_css_js/landing.html', {root: './'});
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
