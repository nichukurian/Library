const mongoose=require('mongoose');

mongoose.connect('mongodb+srv://testuser:87654321@ccet.9d3nv.mongodb.net/Library?retryWrites=true&w=majority');

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
