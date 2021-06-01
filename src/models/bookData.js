const mongoose=require('mongoose');

mongoose.connect('mongodb+srv://testuser:87654321@ccet.9d3nv.mongodb.net/Library?retryWrites=true&w=majority');

const Schema =mongoose.Schema;

var bookSchema=new Schema(
    {
        name:String,
        author:String,
        genre:String,
        image:String,
        description:String,
        

    }
);

bookData=mongoose.model('BookData',bookSchema);
 
module.exports=bookData;
