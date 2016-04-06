var express = require('express');
var app = express();
var path = require('path');

//send our index.html file to the user for the home page
app.get('/', function(req, res){
  res.sendFile(path.join(__dirname + '/index.html'));
})

app.route('/login')

// show the form (GET http://localhost:1337/login)

.get(function (req, res, ))




// create routes for the admin section

// get an instance of the router
var adminRouter = express.Router();

//defines the middleware
adminRouter.use(function(req, res, next){

  // log each request to the console
  console.log(req.method, req.url);

  // continue doing what we were doing and go to the route
  next();

})

// admin main page. the dashboard (http://localhost:1337/admin)
adminRouter.get('/', function(req, res){
  res.send('I am the dashboard!');
})


// users page (http://localhost:1337/admin/users)
adminRouter.get('/users', function(req, res){
  res.send('I show all the users!');
})


adminRouter.param('name', function(req, res, next, name){
  // do validation on name here
  // blah blah validation
  // log something so we know its working

  console.log('doing name validations on ' + name)

  //once validation is done save the new item in the req
  req.name = name;

  next();
})

adminRouter.get('/hello/:name', function(req, res){
  res.send('Hello ' + req.name + '!');
})

adminRouter.get('/users/:name', function(req, res){
  res.send('Hello ' + req.params.name + '!');
})

// posts page (http://localhost:1337/admin/posts)
adminRouter.get('/posts', function(req, res){
  res.send('I show all the posts!');
})

app.use('/admin', adminRouter )
// app.use('/', basicRoutes);
// app.use('/admin', adminRoutes);
// app.use('/api', apiRoutes);


//start the server
app.listen(1337);
console.log('1337 is the magic!');
