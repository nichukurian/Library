const express=require('express');
const bookData=require('../models/bookData');
const libraryData=require('../models/libraryData');
const userData=require('../models/userData');


const bookRouter=new express.Router();
function Bookrouter(nav){
var books=[
    {
        name:"The Alchemist",
        author:"Paulo Coelho ",
        genre:"Fiction",
        url:"/res/images/alch.jpg",
        description:"Paulo Coelho's enchanting novel has inspired a devoted following around the world. This story, dazzling in its powerful simplicity and soul-stirring wisdom, is about an Andalusian shepherd boy named Santiago who travels from his homeland in Spain to the Egyptian desert in search of a treasure buried near the Pyramids. Along the way he meets a Gypsy woman, a man who calls himself king, and an alchemist, all of whom point Santiago in the direction of his quest. No one knows what the treasure is, or if Santiago will be able to surmount the obstacles in his path. But what starts out as a journey to find worldly goods turns into a discovery of the treasure found within. Lush, evocative, and deeply humane, the story of Santiago is an eternal testament to the transforming power of our dreams and the importance of listening to our hearts."
    },
    {
        name:"Harry Potter and The Goblet of Fire",
        author:"J K Rowling",
        genre:"Fantacy",
        url:"/res/images/harry.jpg",
        description:"Harry Potter is midway through his training as a wizard and his coming of age. Harry wants to get away from the pernicious Dursleys and go to the International Quidditch Cup with Hermione, Ron, and the Weasleys. He wants to dream about Cho Chang, his crush (and maybe do more than dream). He wants to find out about the mysterious event that's supposed to take place at Hogwarts this year, an event involving two other rival schools of magic, and a competition that hasn't happened for hundreds of years. He wants to be a normal, fourteen-year-old wizard. But unfortunately for Harry Potter, he's not normal - even by wizarding standards.And in his case, different can be deadly."

    },
    {
        name:"A Game of Thrones ",
        author:"George R.R. Martin",
        genre:"Fantacy",
        url:"/res/images/agot.jpg",
        description:"Long ago, in a time forgotten, a preternatural event threw the seasons out of balance. In a land where summers can last decades and winters a lifetime, trouble is brewing. The cold is returning, and in the frozen wastes to the north of Winterfell, sinister and supernatural forces are massing beyond the kingdom’s protective Wall. At the center of the conflict lie the Starks of Winterfell, a family as harsh and unyielding as the land they were born to. Sweeping from a land of brutal cold to a distant summertime kingdom of epicurean plenty, here is a tale of lords and ladies, soldiers and sorcerers, assassins and bastards, who come together in a time of grim omens.Here an enigmatic band of warriors bear swords of no human metal; a tribe of fierce wildlings carry men off into madness; a cruel young dragon prince barters his sister to win back his throne; and a determined woman undertakes the most treacherous of journeys. Amid plots and counterplots, tragedy and betrayal, victory and terror, the fate of the Starks, their allies, and their enemies hangs perilously in the balance, as each endeavors to win that deadliest of conflicts: the game of thrones."
    },
    {
        name:"Beloved ",
        author:"Toni Morrison",
        genre:"Fantacy",
        url:"/res/images/blv.jpg",
        description:"Winner of the Pulitzer Prize, Toni Morrison’s Beloved is a spellbinding and dazzlingly innovative portrait of a woman haunted by the past.Sethe was born a slave and escaped to Ohio, but eighteen years later she is still not free. She has borne the unthinkable and not gone mad, yet she is still held captive by memories of Sweet Home, the beautiful farm where so many hideous things happened. Meanwhile Sethe’s house has long been troubled by the angry, destructive ghost of her baby, who died nameless and whose tombstone is engraved with a single word: Beloved.Sethe works at beating back the past, but it makes itself heard and felt incessantly in her memory and in the lives of those around her. When a mysterious teenage girl arrives, calling herself Beloved, Sethe’s terrible secret explodes into the present.Combining the visionary power of legend with the unassailable truth of history, Morrison’s unforgettable novel is one of the great and enduring works of American literature."

    },
    {
        name:"The Da Vinci Code  ",
        author:"Dan Brown ",
        genre:"Mystery",
        url:"/res/images/dvc.jpg",
        description:"While in Paris, Harvard symbologist Robert Langdon is awakened by a phone call in the dead of the night. The elderly curator of the Louvre has been murdered inside the museum, his body covered in baffling symbols. As Langdon and gifted French cryptologist Sophie Neveu sort through the bizarre riddles, they are stunned to discover a trail of clues hidden in the works of Leonardo da Vinci—clues visible for all to see and yet ingeniously disguised by the painter.Even more startling, the late curator was involved in the Priory of Sion—a secret society whose members included Sir Isaac Newton, Victor Hugo, and Da Vinci—and he guarded a breathtaking historical secret. Unless Langdon and Neveu can decipher the labyrinthine puzzle—while avoiding the faceless adversary who shadows their every move—the explosive, ancient truth will be lost forever. "
    }
];

bookRouter.get("/",(req,res)=>{
    bookData.find().then(
        function(books)
        {
            console.log(req.session);
            res.render("listb",{
                title:"Books",
                nav,
                list:books
        }
    );

    
        
    })
    bookRouter.get('/create',(req,res)=>{
        // res.send("create a book man")
        res.render("form",{
            nav,
            title:"New Book",
            action:'/addbook',
            form:[
                {
                    type:"text",
                    id:"name",
                    placeholder:"Enter Book name",
                    onchange:"",
                    label:"Book Name",
                    value:""
                },
                {
                 type:"text",
                 id:"author",
                 placeholder:"Enter author of the Book",
                 onchange:"",
                 label:"Author",
                 value:""
             },
             {
                 type:"text",
                 id:"genre",
                 placeholder:"Enter Genre of the Book",
                 onchange:"",
                 label:"Genre",
                 value:""
             }, {
                type:"file",
                id:"cover_img",
                placeholder:"Upload cover image of the Book",
                onchange:"",
                label:"Image of the Book",
                value:""
            },
              {
                type:"textarea",
                id:"description",
                placeholder:"Enter few words about the Book",
                onchange:"",
                label:"Book Description",
                value:""
            },
             
             {
                 type:"submit",
                 id:"create-Book",
                 value:"Create Book"
                 
             }
         
            ]
        })
    })

bookRouter.get('/single/:id',(req,res)=>{
    const id=req.params.id;
    user={
        name:req.session.user,
        role:req.session.role,
        id:req.session.userid,
    }
    
    bookData.findOne({_id:id}).then(function(book){
        if(user.role=="library"){

        libraryData.findOne({book:id,library:user.id}).then((entry)=>{
            
            copys=0;
            if(entry)
            {
                copys=entry.copys;
            }
            res.render("singleb",{
            title:book.name,
             nav,
             single:book,
             user,
             copys
         });
        })}
        else{

            
            
            libraryData.find({book:id}).then((entries)=>{
                let liblist=[];
                
                entries.forEach((entry)=>{
                    // let name_library="";
                    userData.findOne({_id:entry.library}).then((e)=>{
                        if(e) {
                        // name_library=e.name;
                        
                        console.log(e.name)
                        console.log(entry.copys)
                        console.log(e);
                        liblist.push({name:e.name,copys:entry.copys})
                        console.log(liblist)
                        if(liblist.length==entries.length){
                        res.render("singleb",{
                            title:book.name,
                             nav,
                             single:book,
                             user,
                             copylist:liblist
                         });
                        }
                        }
    
                       })
                       
                       //console.log(name_library);
                    //liblist.push({name:name_library,copys:entry.copys})
                });
               
                
            });
           
            
            // res.render("singleb",{
            //     title:book.name,
            //      nav,
            //      single:book,
            //      user,
            //      copylist:liblist
            //  });


        }
    
    })


    // res.send(`my id is ${books[id].description}`);
    
});

bookRouter.get('/update/:id',(req,res)=>{
    const id=req.params.id;
    bookData.findOne({_id:id}).then(function(book){

        res.render("form",{
            nav,
            title:"Update Book",
            action:'/updatebook',
            form:[{
                type:"hidden",
                id:"id",
                value:id
            },{
                type:"hidden",
                id:"image_hidden",
                value:book.image
            },
                {
                    type:"text",
                    id:"name",
                    placeholder:"Enter Book name",
                    onchange:"",
                    label:"Book Name",
                    value:book.name
                },
                {
                 type:"text",
                 id:"author",
                 placeholder:"Enter author of the Book",
                 onchange:"",
                 label:"Author",
                 value:book.author
             },
             {
                 type:"text",
                 id:"genre",
                 placeholder:"Enter Genre of the Book",
                 onchange:"",
                 label:"Genre",
                 value:book.genre
             }, {
                type:"file",
                id:"cover_img",
                placeholder:"Upload cover image of the Book",
                onchange:"",
                label:"Image of the Book",
                value:book.image
            },
              {
                type:"textarea",
                id:"description",
                placeholder:"Enter few words about the Book",
                onchange:"",
                label:"Book Description",
                value:book.description
            },
             
             {
                 type:"submit",
                 id:"Update-Book",
                 value:"Update Book"
                 
             }
         
            ]
        })

    })

})



})
return bookRouter
}

module.exports=Bookrouter;