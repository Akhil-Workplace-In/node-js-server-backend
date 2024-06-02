const express = require("express");
const app = express();
const PORT = 3000;

app.get("/health-checkup", function(req, res){
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyId = req.query.kidneyId;
    
    if(username != "akhilesh" || password != "pass"){
        console.log("wron inpus in either in username or password");
        res.status(400).json({"msg": "Something up with your inputs"});
        return
    }    
    if(kidneyId != 1){
            console.log("wrong inputs in kedneyId");
            //do something with kidney
            res.status(400).json({"msg": "Something up with your inputs"});
            return     
    }   
    // do something with kidney here

    res.json({
        msg: "Your kidney is fine!"
    })
    
})

app.listen(PORT, () => {
    console.log("App is listening on PORT: " + PORT);
})