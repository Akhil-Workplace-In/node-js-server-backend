const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json())

var users = [{
    name: "John", 
    kidneys: [{
        healthy: false
    }]
}];

app.get('/', (req, res) => {
    const johnKidneys = users[0]["kidneys"];    
    const numberOfKidneys = johnKidneys.length;
    
    let numberOfHealthyKidneys = 0;
    for(let i=0; i<numberOfKidneys; i++){
        if(johnKidneys[i]["healthy"]){ 
                       
            numberOfHealthyKidneys = numberOfHealthyKidneys + 1;
        }
    }

    const numberofUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
    
    res.json({        
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberofUnhealthyKidneys
    })
})

app.post('/', (req, res) => {
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })

    res.json({
        msg: "Done!"
    })
})

app.put('/', (req, res) => {
    const johnKidneys = users[0]["kidneys"];   
    for(let i=0; i<johnKidneys.length; i++){
        if(!johnKidneys[i]["healthy"]){
            johnKidneys[i]["healthy"] = true
        }
    }

    res.json({
        msg: "updated"
    })
})



//removing all unhealthy kidneys
app.delete('/', (req, res) => {
    let johnKidneys = users[0]["kidneys"];
    if(isThereAtleastOneHealtyKidney()){
    let johnNewKidneys = [];
    for(let i=0; i<johnKidneys.length; i++){
        if(johnKidneys[i]["healthy"]){
            johnNewKidneys.push(johnKidneys[i]);
        }
    }
    users[0]["kidneys"] = johnNewKidneys;
    res.json({
        msg: "Done!"
    })
    } else {    
        res.status(411).json({
            msg: "you have no bad kidneys"
        })
    }
   
    
})

function isThereAtleastOneHealtyKidney(){
    let johnKidneys = users[0]["kidneys"];
    let atleastOneHealtyKidney = false;
    for(let i=0; i<johnKidneys.length; i++){
        if(!johnKidneys[i]["healthy"]){
            atleastOneHealtyKidney = true;
        }
    }
    return atleastOneHealtyKidney;
}

app.listen(PORT, () =>{
    console.log("App is listening on PORT: " + PORT);
} )
