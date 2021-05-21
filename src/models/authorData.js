const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/library');

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
