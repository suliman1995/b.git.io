const mongoose =require("mongoose")
const AdminsCh = new mongoose.Schema({

    username: {
        type: String,
        required: true,
        unique:true
      },
      password: {
        type: String,
        required: true,
      },  

})
   
   
       
 
   
 

const AdminModel =mongoose.model("Admins",AdminsCh)
module.exports = AdminModel;

