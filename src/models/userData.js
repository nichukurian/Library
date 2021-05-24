const mongoose=require('mongoose');

mongoose.connect('mongodb+srv://test-user:adminadmin@ictk-fsd.pqygx.mongodb.net/Library?retryWrites=true&w=majority');

const Schema =mongoose.Schema;

var userSchema=new Schema(
    {
        name:String,
        email:String,
        password:String,
        

    }
);

userData=mongoose.model('userData',authorSchema);
 
module.exports=userrData;
