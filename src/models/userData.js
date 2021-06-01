const mongoose=require('mongoose');

mongoose.connect('mongodb+srv://testuser:87654321@ccet.9d3nv.mongodb.net/Library?retryWrites=true&w=majority');

const Schema =mongoose.Schema;

var userSchema=new Schema(
    {
        name:String,
        email:String,
        password:String,
        phone:String
        

        

    }
);

userData=mongoose.model('userData',userSchema);
 
module.exports=userData;
