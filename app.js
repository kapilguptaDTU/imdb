// const { google } = require('googleapis');
const express = require('express')
// const OAuth2Data = require('./google_key.json')
var prettyjson = require('prettyjson');
const fetch = require("node-fetch");
// var plotly=require('plotly')('KapilguptaDTU', 'pve9Gxuc5mmmECguU2M8');
const app = express()
// const zingchart=require('zingchart');
// const CLIENT_ID = OAuth2Data.web.client_id;
// const CLIENT_SECRET = OAuth2Data.web.client_secret;
// const REDIRECT_URL = OAuth2Data.web.redirect_uris;

// const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL)
// var authed = false;


var request=require("request");
app.use(express.static(__dirname + "/public"));

app.get("/coronaNew",function(req,res){
res.render("corona.ejs",{message:""});
});

app.get('/ab', (req, res) => {
    var country="India";
    res.render("zing.ejs",{country:country});

});
app.get("/corona",function(req,response){
    
    var country=req.query.country;

var c=country.toString().toLowerCase();
// c[0]=c[0].toUpperCase();
c=c.charAt(0).toUpperCase() + 
c.slice(1); 

console.log(c);
    fetch("https://pomber.github.io/covid19/timeseries.json")
.then(response => response.json())
.then(data => {
// console.log(o);

    // response.render("zing.ejs",{country:c,data:data});
var arr=[];
var i=0;
var currDeaths=0;
var currRecovered=0;
var currConfirmed=0;
var currDate;
if(data[c]){}
else{
    var message='please enter a valid country name';
    response.render("corona.ejs",{message:message});
}
data[c].forEach((d) =>

arr.push(d.confirmed)

)

data[c].forEach((d) =>
i++    
)
data[c].forEach((d) =>
currDeaths=d.deaths
)
data[c].forEach((d) =>
currRecovered=d.recovered
)
data[c].forEach((d) =>
currDate=d.date
)

data[c].forEach((d) =>
currConfirmed=d.confirmed
)


// var currDeaths=data[c].deaths[i-1];

console.log(currDate);
    // var currentConfirmed=arr[arr.length()-1];
    console.log(typeof(arr))
    response.render("zing.ejs",{country:c,data:data,arr:arr,currConfirmed,currDate,currDeaths,currRecovered});

});
});



// app.get('/a', (req, res) => {
//     if (!authed) {
//         // Generate an OAuth URL and redirect there
//         const url = oAuth2Client.generateAuthUrl({
//             access_type: 'offline',
//             scope: 'https://www.googleapis.com/auth/gmail.readonly'
//         });
//         console.log(url)
//         res.redirect(url);
//     } else {
//         const gmail = google.gmail({ version: 'v1', auth: oAuth2Client });
//         gmail.users.labels.list({
//             userId: 'me',
//         }, (err, res) => {
//             if (err) return console.log('The API returned an error: ' + err);
//             const labels = res.data.labels;
//             if (labels.length) {
//                 console.log('Labels:');
//                 labels.forEach((label) => {
//                     console.log(`- ${label.name}`);
//                 });
//             } else {
//                 console.log('No labels found.');
//             }
//         });
   
//         // res.send('Logged in')
//         res.render("home.ejs");
//     }
// })
    
// app.get('/auth/google/callback', function (req, res) {
//     const code = req.query.code
//     if (code) {
//         // Get an access token based on our OAuth code
//         oAuth2Client.getToken(code, function (err, tokens) {
//             if (err) {
//                 console.log('Error authenticating')
//                 console.log(err);
//             } else {
//                 // var profile = googleUser.getBasicProfile();
  
//                 console.log('Successfully authenticated'+code);
//                 oAuth2Client.setCredentials(tokens);
//                 authed = true;
//                 console.log('tokens='+tokens.access_token);
//                 console.log('tokens='+tokens.id_token);
//                 console.log('tokens='+tokens.token_type);
//                 console.log('tokens='+tokens.expires_in);
//                 var options = {
//                     noColor: true
//                   };
                   
//                   console.log(prettyjson.render(tokens, options));
                  
//                 res.redirect('/')
//             }
//         });
//     }
// });


// var express= require("express");
// var app=express();
 app.get("/",function(req, res) {
     res.render("home.ejs");
 });
 // http://www.omdbapi.com/?apikey=thewdb&s=
 
 
 app.get("/myonlymovie",function(req,res){
 var searchid=req.query.t;
    var yearid=req.query.y;
    var maintitle=req.query.maintitle;
    var url='http://www.omdbapi.com/?apikey=thewdb&t='+searchid+'&y='+yearid;
 request(url,function(error,response,body){
    
    var parsedData=JSON.parse(body);
    if(parsedData.Response=='False'){
    res.render("home.ejs");
}  
if(parsedData.Response=='True'){
    res.render("show.ejs",{ data: parsedData,maintitle:maintitle});
    // console.log(parsedData);
}  



// if(parsedData.Search.Poster== "N/A"){
    //  console.log("isse nahi bhejna");
    // }
   // var search=parsedData;
  
    // res.send(parsedData);
    
     });
 }); 




 
 app.get("/2048",function(req,res){
 
  res.render("2048.ejs");
 });
 app.get("/snakes",function(req, res) {
     res.render("snakesandladders.ejs");
 })
 app.get("/mymovie",function(req,res){
    var title= req.query.title;
    console.log("req query dsfsfdsfdsdffdsfdsfsdfdsfsfsfs"+req.query);
    
 var url='http://www.omdbapi.com/?apikey=thewdb&s='+title;
 
 request(url,function(error,response,body){
        //* workaround for issue with this particular apiUrl
        var firstChar = body.substring(0, 1);
        var firstCharCode = body.charCodeAt(0);
        if (firstCharCode == 65279) {
            console.log('First character "' + firstChar + '" (character code: ' + firstCharCode + ') is invalid so removing it.');
            body = body.substring(1);
        }
     
    
    // body=body.substring(1);
    var parsedData=JSON.parse(body);
    
    // if(parsedData.Search.Poster== "N/A"){
    //  console.log("isse nahi bhejna");
    // }
   var search=parsedData["Search"];
   // console.log(parsedData["Search"].length);
   // console.log(search);
   if(search==undefined){
    console.log("hahahaha");
    res.render("home.ejs");
   }
   if(search!=undefined){
  for(var i=0;i<search.length;i++){
   // console.log("khikhikhi");
   // console.log(search);
   // if(search[i]!="undefined"){
   // console.log(search[i].Title);}
   
   if(search[0].Title=="undefined"){
    console.log("ghar ja");
    // console.log("coming back home"+search.Title);
    // res.render("home.ejs");
   }
  
   if(search[i].Poster=="N/A"){
    search[i].Poster="https://cdn3.volusion.com/wahx3.tkt3o/v/vspfiles/photos/10-04-E37-007-7.jpg?1510302989";
  // // console.log("Ye nhi bhejni");
  }}}
  // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', parsedData); // Print the HTML for the Google homepage.
// console.log(search[0].Poster);
    // res.send(search[0].Poster);
    res.render("main.ejs",{ data: parsedData, mymaintitle:title});
     });
 }); 



// app.listen(process.env.PORT,process.env.IP);
// console.log("IMDb started",process.env.PORT,process.env.IP);
var server = app.listen(5000, function () {
    var host = server.address().address
    var port = server.address().port
 
    console.log("Example app listening at http://%s:%s", host, port)
 })


// app.listen(process.env.PORT,process.env.IP);
// console.log("IMDb V2 started");