const xp = require("express");
const path = require('path');
const app = xp();
app.use(xp.static( __dirname + '/client/dist/client' ));
app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./client/dist/client/index.html"))
  });   
app.listen(8000, (errs)=>console.log(errs?errs:'gucci'));

