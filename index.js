const express=require('express');
const port=process.env.PORT||8080;
const nav=[
    {name:"Books",link:"/books"},
    {name:"Authors",link:"/authors"},
    {name:"New Book",link:"/books/create"},
    {name:"New Author",link:"/authors/create"},
    {name:"SignUp",link:"/signup"},
    {name:"LogIn",link:"/logIn"}
];


const bookRouter=require('./src/routes/bookRoutes')(nav);
const authorRouter=require('./src/routes/authorRoutes')(nav);
const app =new express();

app.set("view engine","ejs");
app.set('views',"./src/views");
app.use(express.static('./public'));
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
       nav,
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
       nav,
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




app.listen(port,()=>{
    console.log(`server running at ${port}....`);
});