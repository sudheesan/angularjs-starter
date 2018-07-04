var express = require('express');
var app = express();

var port = process.env.PORT || 3030;

app.use('/',express.static(__dirname+'/public'))

app.get('*',(req,res)=>{
    res.sendfile(__dirname+'/index.html');
});

app.listen(port,(err)=>{
    if(err){
        console.log('something went wrong',e)
    }
    else{
        console.log(`server is listening on ${port}`)
    }
})