const express =require("express")
const app = express()
const _port = 3004;
app.use(express.json())

const cors = require ('cors');
app.use (cors())
const mongoose =require("mongoose")
const user=process.env.user,
 pass = process.env.PASS,
 data = process.env.data;



mongoose.connect(`mongodb+srv://${user}:${pass}@cluster0.8pvqedp.mongodb.net/${data}?retryWrites=true&w=majority`)


const usarModel = require("./mod/users")


app.get("/users", async (req,res)=>{
  const users = await usarModel.find();
   res.json(users)
})

app.post("/creat", async (req,res)=>{
const user =req.body;
const newuser =new usarModel(req.body)
await newuser.save();
res.json(req.body)

})



const Adminmodel = require('./mod/Admins')
app.post ("/register" , async (req,res)=>{
  const{ username ,password } =req.body

  const admain =  await  Adminmodel.findOne({username})
  res.json(admain)
} );















app.listen (_port,()=>{
console.log("start")



})