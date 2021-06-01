const express=require('express');


const userData=require('./src/models/userData');
const bookData=require('./src/models/bookData');
const authorData=require('./src/models/authorData');
const multer=require('multer');

 const multerStorage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "public/uploads");
    },
    filename: (req, file, cb) => {
      const ext = file.mimetype.split("/")[1];
      cb(null, `${file.originalname}`);
    },
  });

// uploadImage=multer({dest:'./public/uploads/'})
uploadImage=multer({storage:multerStorage});


const port=process.env.PORT||8080;
const nav=[
    {name:"Books",link:"/books"},
    {name:"Authors",link:"/authors"},
    {name:"New Book",link:"/books/create"},
    {name:"New Author",link:"/authors/create"},
    //{name:"SignUp",link:"/signup"},
    {name:"LogOut",link:"/logIn"}
];

nav2=[
    {name:"SignUp",link:"/signup"},
    {name:"LogIn",link:"/logIn"}

]

    



const bookRouter=require('./src/routes/bookRoutes')(nav);
const authorRouter=require('./src/routes/authorRoutes')(nav);
const app =new express();

app.set("view engine","ejs");
app.set('views',"./src/views");
app.use(express.static('./public'));
app.use(express.urlencoded({extended:true}));
app.use("/books",bookRouter);
app.use("/authors",authorRouter);
app.get('/',(req,res)=>{
    res.redirect('/login');
    // res.render("index",{
    //     title:"Library",
    //     nav:[{name:"Books",link:"/books"},{name:"Authors",link:"/authors"}]})
        
    });
app.get("/login",(req,res)=>{
    // res.send("login...");
    res.render('form',{title:"Log In",
       nav:nav2,
       action:'/auth',
       form:[
       {
        type:"email",
        id:"email",
        placeholder:"Enter your email",
        onchange:"validate_email()",
        label:"Email"
    },
    {
        type:"password",
        id:"password",
        placeholder:"Choose your password",
        onchange:"",
        label:"Password"
    },
    
    {
        type:"submit",
        id:"login",
        value:"LogIn",
        
    }





       ]
    });
});

app.get("/signup",(req,res)=>{
    // res.send("signup...");
    res.render('form',{title:"Sign Up",
       nav:nav2,
       action:'/adduser',
       form:[{
           type:"text",
           id:"name",
           placeholder:"Enter your name",
           onchange:"",
           label:"Full Name"
       },
       {
        type:"email",
        id:"email",
        placeholder:"Enter your email",
        onchange:"validate_email()",
        label:"Email"
    },{
        type:"text",
        id:"phone",
        placeholder:"Enter your Phone Number",
        onchange:"validate_phone()",
        label:"Mobile Number"
    },
    {
        type:"password",
        id:"password",
        placeholder:"Choose your password",
        onchange:"validate_password()",
        label:"Password"
    },
    {
        type:"password",
        id:"c-password",
        placeholder:"Confirm your password",
        onchange:"confirm_password()",
        label:"Confirm Password"
    },
    {
        type:"submit",
        id:"signup",
        value:"SignUp",
        
    }





       ]
    });
});

app.post('/adduser',(req,res)=>{
    bookData.insert

    let item={
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        password:req.body.password
    }
    user=userData(item);
    user.save().then(result =>{console.log(`${result} saved`)});
    res.redirect('/books')



});
app.post('/auth',uploadImage.none(),(req,res)=>{
    // console.log(req.body.password+"<=>"+req.body.email)
    userData.findOne({email:req.body.email,password:req.body.password}).then((user)=>{
        //console.log(`${err} and  ${user}`)
        // console.log(user);
        if(user){
        res.redirect('/books');
        }
        else{
            res.redirect('/login');
        }
    })
});
app.post('/addauthor',uploadImage.single('cover_img'),(req,res,next)=>{


    let item={
        name:req.body.name,
        first_book:req.body.first_book,
        works:req.body.works,
        image:req.file.filename,
        description:req.body.description,
        
    }
    author=authorData(item);
    author.save();
    res.redirect('/authors');
});


app.post('/addbook',uploadImage.single('cover_img'),(req,res,next)=>{
    //let image=req.file.filename;
   // image='1621933733206-ictk-alch.jpg';  

    let item={
        name:req.body.name,
        author:req.body.author,
        genre:req.body.genre,
        image:req.file.filename,
        description:req.body.description,
    }

    book=bookData(item);
    book.save();
    //let loadedImage=loadImage(image);
    // image=loadImage(image);
    // res.send(`<img src='${image}'>`);
    res.redirect('/books');

});

app.post('/updatebook',uploadImage.single('cover_img'),(req,res)=>{
    const id=req.body.id;
    if(!req.file){
        req.file={filename:req.body.image_hidden}
        
    }

    if(req.body.description==""||req.body.description==" ")
    {
        req.body.description=req.body.description_hidden;
    }

    bookData.findOne({_id:id},function(err,book){
        
        book.name=req.body.name;
        book.author=req.body.author;
        book.genre=req.body.genre;
        book.image=req.file.filename;
        if(req.body.description==""||req.body.description==" ")
    {
        book.description=req.body.description;
    }

        // book.description=req.body.description;
        book.save();

        res.redirect('/books');
        
    })
});


app.post('/updateauthor',uploadImage.single('cover_img'),(req,res)=>{
    const id=req.body.id;
    if(!req.file){
        req.file={filename:req.body.image_hidden}
        
    }

    if(req.body.description==""||req.body.description==" ")
    {
        req.body.description=req.body.description_hidden;
    }


    //res.send(`${req.body.name} ${req.file.filename} ${req.body.image}`);
authorData.findOne({_id:id},function(err,author){
        
        author.name=req.body.name;
        author.author=req.body.author;
        author.genre=req.body.genre;
        author.image=req.file.filename;
        if(req.body.description!=""&&req.body.description!=" ")
        {
            author.description=req.body.description;
        }
        // author.description=req.body.description;
        author.save();

        res.redirect('/books');
        
    })
});

app.listen(port,()=>{
    console.log(`server running at ${port}....`);
});
