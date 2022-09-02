const express=require("express");
const app=express();
app.use(express.json())
app.get('/user/:name/:age/:id',(req,res)=>{
   console.log(req.params)

    res.status(200).send(`hello ${req.params.name} `)
   
})
app.get('/',(req,res)=>{
    console.log(req.query)
     res.send(`hello ${req.query.name}`)
    
 })
 
app.post('/',async(req,res)=>{
    pay=await req.body
    res.status(201).send(pay)
})

app.put('/',(req,res)=>{
    pay=req.body
    res.send(pay)

})


const port=process.env.PORT
app.listen(port,()=>{
    console.log(`app is running ${port}`)
})