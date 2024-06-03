const express = require("express");
const app = express();
const PORT = 3000;
const zod = require("zod");
const schema = zod.array(zod.number());

const schema1 = zod.array(zod.number());

const schema2 = zod.object({
    email: zod.string().email(),
    password: zod.string().min(8)
})

// we created schema to create the structure of our inputs from client request

// we're using this schema to validate correct inputs


app.use(express.json()); // to get request body from client side



app.post("/health-checkup", (req, res) => { // we are handling request on this route
    // kidneys = [1, 2] // we're accepting inputs in this format
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys);

    const kidneysLength = kidneys.length;
    if(!response.success){
        res.status(411).json({
            msg: "input is invalid"
        })
    } else {
        res.json({
            msg: "You hit our server",
            "yourKidneys": kidneys,
            "numberOfKidneys": kidneysLength,
            "response": response
        })
    }
   
    


})

app.listen(PORT, (err) => {
    console.log("App is listening on PORT: ",  PORT);
})