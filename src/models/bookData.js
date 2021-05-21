const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/library');

const Schema =mongoose.Schema;

var bookSchema=new Schema(
    {
        name:String,
        author:String,
        genre:String,
        image:String,
        description:String,
        edited_by:String,

    }
);

bookData=mongoose.model('BookData',bookSchema);
 
module.exports=bookData;
