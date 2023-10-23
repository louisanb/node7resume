var express = require('express');//restart when data.jason changed
var router = express.Router();//need restart if modify this file
var appdata=require('../data.json');//style dont need restart
var appdata2=require('../data2.json');
var appdata3=require('../data3.json');
//have to go back one dir sin its in routes to get dataS
//passing data through route to template in views this is 
//alternative way as locaapp way actually the local app wont 
//get into route for sure or route folder i think
/* GET home page. */
router.get('/', function(req, res, next) {
  var myArtwork=[];
  var myArtists=[];
  var data1=[];
  var data2=[];

  myArtists=appdata3.speakers;
  appdata3.speakers.forEach(function(item){
  	myArtwork=myArtwork.concat(item.artwork);//pure javas
  });//a loop to pupulate each of the item.artwork the 
  //array that contains each artists artwork into this 
  //var my artwork
  //if speaker with s then error forEach undif
  data1=appdata2.social;
  // appdata2.social.forEach(function(item){
  //   data2=data2.concat(item.artwork);
  // });
// appdata2.speakers.forEach(function(item){
    //  data2=data2+"<article class=artistss>
    //  <h3>item.title<span class="small"> and
    //   <a href="/speakers/item.shortname">item.name</a></span></h3>
    //   <p><a href="/speakers/item.shortname"> 
    //   <img class="speaker" src="/images/resume/item.shortname.jpg" alt="photo of item.photo" ></a></p>
        
    // </artistss>
    //  }); <!-- forEach -->"

    res.render('index', { 
    	title: 'Web resume makes a better resume',
    	artwork: myArtwork,//another var passed to index like the tile
      artists: myArtists,
      page:'Home',
      data: data1,
      data0: data2
    });//atw is a local var inside the temp index feeded from myArtwork    
});//router.get(/)
 
//when router so mething did not need to change ejs extension which is index under view
router.get('/projects', function(req, res, next) {
    var myArtwork=[];
    var myArtists=[];
    var data3=[];
    var data5="3";
  myArtists=appdata3.speakers;
  appdata3.speakers.forEach(function(item){
    myArtwork=myArtwork.concat(item.artwork);
    //data3="<article class="artists">";
  });//forEach
    res.render('projects', { 
      title: 'speakers',
      artwork: myArtwork,
      artists: myArtists,
      page:'artistlist',
      data4: data3,
      data6: data5
    });//render speakers
});//router.get(.speakers)

// get speaker page
//this & above tow routers use the same template spearker.ejs under views
//if : is in front in the router then it makes it as a local varialbe so you can use it 
router.get('/projectnav/:speakerid', function(req, res, next) {
  var myArtwork=[];
  var myArtists=[];
  var dotspeakerid=req.params.speakerid;
  appdata3.speakers.forEach(function(item){
    if(item.shortname==req.params.speakerid){//this params is how to get to spearkid
    //myArtists.push(item);/*add it to the myArtists array which is 0 or nothing*/
    myArtists=myArtists.concat(item);//=push
    myArtwork=myArtwork.concat(item.artwork);//pure javascript
   }//if shortname=req.params
  });//forEach
    res.render('projectnav', { 
      title: 'projectnav',
      artwork: myArtwork,
      artists: myArtists,
      page:'artistDetail',
      speakerid: dotspeakerid
    });//render
});//router.get speakersid

router.get('/cad', function(req, res, next) {
     var myArtwork=[];
     var myArtists=[];
     var textColor1="#09E4FF";
     var textColor2="#05EFFF";
     var textColor3="#10CFFF";
    appdata2.speakers.forEach(function(item){
    if(item.shortname==req.params.speakerid){//this params is how to get to spearkid
    myArtists.push(item);//add it to the myArtists array which is 0 or nothing
    myArtwork=myArtwork.concat(item.artwork);//pure javascript
   }//if shortname=req.params
  });//forEach
    res.render('cad', { 
      title: 'cad',
      artwork: myArtwork,
      artists: myArtists,
      c1: textColor1,
      c2: textColor2,
      c3: textColor3,
      page:'cad'
    });//render
});

router.get('/speakers/:speakerid', function(req, res, next) {
  var myArtwork=[];
  var myArtists=[];
  appdata.speakers.forEach(function(item){
    if(item.shortname==req.params.speakerid){//this params is how to get to spearkid
    myArtists.push(item);/*add it to the myArtists array which is 0 or nothing*/
    //myArtists=myArtists.concat(item);//=push
    myArtwork=myArtwork.concat(item.artwork);//pure javascript
   }//if shortname=req.params
  });//forEach
    res.render('speakers', { 
      title: 'speakers',
      artwork: myArtwork,
      artists: myArtists,
      page:'artistDetail'
    });//render
});//router.get

router.get('/demo', function(req, res, next) {
  res.render('demo', { 
      title: 'demo',
      page:'demo'
     });//render
});

router.get('/google2b9ddcdc35c6ef76.html', function(req, res, next) {
res.render('google2b9ddcdc35c6ef76', { 
  title: 'google2b9ddcdc35c6ef76',
      page:'google2b9ddcdc35c6ef76'
     });//render
});

module.exports = router;
