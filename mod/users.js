const mongoose =require("mongoose")
const usersCh = new mongoose.Schema({
Patientname: {  type : String,},   
Age :{   type : String, },   
six :{type : String },                
numberofteeth:{type : String },       
Toothcolor :{type : String },       
tayp :{type : String },       
note :{type : String },       
               

})
   
   
       
 
   
 

const usarModel =mongoose.model("users",usersCh)
module.exports = usarModel
