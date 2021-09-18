 
//install express
const express=require('express');
const app=express();
app.use(express.json())
const mongoose=require('mongoose')
//mongoose.connect('mongodb://localhost:27017/hotel');
mongoose.Promise=global.Promise;
//export clientroute
const apiRoute=require('./api-router');
//install body-parser
const bodyParser=require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
//intall path
const path=require("path");
const session=require('express-session');
//configuration d'un moteur de reponse
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
  }))
  //configuration d'un dosssier virtuel
app.use(express.static(path.join(__dirname, "/public")));
app.engine('html',require('ejs').renderFile);
app.set('engine_views', ' html');
app.use(bodyParser.urlencoded({extended:false}));
// use apiRoute
app.use(apiRoute);

// send de message for default URL
app.get('/clients',function(req, res){
    res.render('index');
})


app.listen(process.env.port || 9090 , function(){
    console.log("running server" );

})
