const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());


app.post("/health-checkup", function(req, res){
    //do something with kidney here
    const kidneys = req.body.kidneys;
    const kidneyLength = kidneys.length;
                                 
    res.send("Your kidney length is " + kidneyLength);

})


app.use(function(err, req, res, next){
    res.json({
        msg: "sorry something up with our server"
    })
})

app.listen(PORT, (err) => {
    console.log("App is listening on port: ", PORT);
})
