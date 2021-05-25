const mongoose=require('mongoose');

mongoose.connect('mongodb+srv://test-user:adminadmin@ictk-fsd.pqygx.mongodb.net/Library?retryWrites=true&w=majority');

const Schema =mongoose.Schema;

var authorSchema=new Schema(
    {
        name:String,
        first_book:String,
        works:String,
        image:String,
        description:String,
        

    }
);

authorData=mongoose.model('AuthorData',authorSchema);
 
module.exports=authorData;
