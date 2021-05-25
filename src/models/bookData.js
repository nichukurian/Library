const mongoose=require('mongoose');

mongoose.connect('mongodb+srv://test-user:adminadmin@ictk-fsd.pqygx.mongodb.net/Library?retryWrites=true&w=majority');

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
