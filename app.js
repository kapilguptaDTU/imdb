var express= require("express");
var app=express();
var request=require("request");
app.use(express.static(__dirname + "/public"));

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
 app.get("/mymovie",function(req,res){
    var title= req.query.title;
    console.log("req query dsfsfdsfdsdffdsfdsfsdfdsfsfsfs"+req.query);
    
 var url='http://www.omdbapi.com/?apikey=thewdb&s='+title;
 
 request(url,function(error,response,body){
    
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



app.listen(process.env.PORT,process.env.IP);
console.log("IMDb started");