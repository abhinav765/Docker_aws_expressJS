var exp = require('express')
var app = exp();
var bp = require('body-parser')

app.use(bp.urlencoded({extended:false}))


app.listen(9000,function(){
    console.log("server started at port 9000")
})

app.get('/getform',function(req,res){
    res.sendFile(__dirname+"/form.html")
})

