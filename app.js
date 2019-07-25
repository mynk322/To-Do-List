const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname,"public")));

app.get('/',function(req,res){
    console.log(req.url);
        res.status(200);
        res.sendFile(path.join(__dirname,"public","index.html"));
  //__dirname : It will resolve to your project folder.
});
//add the router
app.listen(3000,function(){

    console.log('Running at Port 3000');
});
