import express from "express"

const app = express();
app.use(express.json())

const PORT = 7000;

app.get("/", (req, res)=>{
    res.send({message: "Hello World"})
})

app.post("/", (req, res)=>{
    const {body} = req;
    console.log(body);
    
    res.send("form submitted")
})

app.listen(PORT, ()=>{
    console.log(`Running on port ${PORT}`); 
})