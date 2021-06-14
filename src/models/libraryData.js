const mongoose=require('mongoose');

mongoose.connect('mongodb+srv://testuser:87654321@ccet.9d3nv.mongodb.net/Library?retryWrites=true&w=majority');

const Schema =mongoose.Schema;

var librarySchema=new Schema(
    {
        library:String,
        book:String,
        copys:String,
        
        

    }
);

libraryData=mongoose.model('LibraryData',librarySchema);
 
module.exports=libraryData;
