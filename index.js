const express = require('express');
var app = express();

app.get('/',(req,res) =>{
    res.send({"mess":"I m working"})
})

app.listen(3000,()=>{
    console.log('listening to 3000')
})