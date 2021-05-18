const express=require('express');
const router = require('./bookRoutes');


const authorRouter=new express.Router();
function Authorrouter(nav){
var authors=[
    {
        name:"Paulo Coelho",
        firstbook:"Theater For Education",
        works:"Brida,The Alchemist",
        url:"/res/images/ploco.jpeg",
        description:"The Brazilian author PAULO COELHO was born in 1947 in the city of Rio de Janeiro. Before dedicating his life completely to literature, he worked as theatre director and actor, lyricist and journalist. In 1986, PAULO COELHO did the pilgrimage to Saint James of Compostella, an experience later to be documented in his book The Pilgrimage. In the following year, COELHO published The Alchemist. Slow initial sales convinced his first publisher to drop the novel, but it went on to become one of the best selling Brazilian books of all time. Other titles include Brida (1990), The Valkyries (1992), By the river Piedra I sat Down and Wept (1994), the collection of his best columns published in the Brazilian newspaper Folha de São Paulo entitle Maktub (1994), the compilation of texts Phrases (1995), The Fifth Mountain (1996), Manual of a Warrior of Light (1997), Veronika decides to die (1998), The Devil and Miss Prym (2000), the compilation of traditional tales in Stories for parents, children and grandchildren (2001), Eleven Minutes (2003), The Zahir (2005), The Witch of Portobello (2006) and Winner Stands Alone (to be released in 2009). During the months of March, April, May and June 2006, Paulo Coelho traveled to celebrate the 20th anniversary of his pilgrimage to Saint James of Compostella in 1986. He also held surprise book signings - announced one day in advance - in some cities along the way, to have a chance to meet his readers. In ninety days of pilgrimage the author traveled around the globe and took the famous Transiberrian train that took him to Vladivostok. During this experience Paulo Coelho launched his blog Walking the Path - The Pilgrimage in order to share with his readers his impressions. Since this first blog Paulo Coelho has expanded his presence in the internet with his daily blogs in Wordpress, Myspace & Facebook. He is equally present in media sharing sites such as Youtube and Flickr, offering on a regular basis not only texts but also videos and pictures to his readers. From this intensive interest and use of the Internet sprang his bold new project: The Experimental Witch where he invites his readers to adapt to the screen his book The Witch of Portobello. Indeed Paulo Coelho is a firm believer of Internet as a new media and is the first Best-selling author to actively support online free distribution of his work. "
    },
    {
        name:"J K Rowling",
        firstbook:"Harry Potter and the Philosopher's Stone",
        works:"Harry Potter,The Casual Vacancy",
        url:"/res/images/jkrw.jpg",
        description:"Although she writes under the pen name J.K. Rowling, pronounced like rolling, her name when her first Harry Potter book was published was simply Joanne Rowling. Anticipating that the target audience of young boys might not want to read a book written by a woman, her publishers demanded that she use two initials, rather than her full name. As she had no middle name, she chose K as the second initial of her pen name, from her paternal grandmother Kathleen Ada Bulgen Rowling. She calls herself Jo and has said, No one ever called me 'Joanne' when I was young, unless they were angry. Following her marriage, she has sometimes used the name Joanne Murray when conducting personal business. During the Leveson Inquiry she gave evidence under the name of Joanne Kathleen Rowling. In a 2012 interview, Rowling noted that she no longer cared that people pronounced her name incorrectly."
    
    },
    {
        name:"George R.R. Martin",
        firstbook:"The Hero",
        works:"A Song of Ice and Fire,Fire & Blood",
        url:"/res/images/grrm.jpg",
        description:"George Raymond Richard R.R.Martin was born September 20, 1948, in Bayonne, New Jersey. His father was Raymond Collins Martin, a longshoreman, and his mother was Margaret Brady Martin. He has two sisters, Darleen Martin Lapinski and Janet Martin Patten.Martin attended Mary Jane Donohoe School and Marist High School. He began writing very young, selling monster stories to other neighborhood children for pennies, dramatic readings included. Later he became a comic book fan and collector in high school, and began to write fiction for comic fanzines (amateur fan magazines). Martin's first professional sale was made in 1970 at age 21: The Hero, sold to Galaxy, published in February, 1971 issue. Other sales followed. "

    },
    {
        name:"Toni Morrison",
        firstbook:"The Bluest Eye",
        works:"Beloved,Love",
        url:"/res/images/tmor.webp",
        description:"Chloe Anthony Wofford Morrison (born Chloe Ardelia Wofford; February 18, 1931 – August 5, 2019), known as Toni Morrison, was an American novelist, essayist, book editor, and college professor. Her first novel, The Bluest Eye, was published in 1970. The critically acclaimed Song of Solomon (1977) brought her national attention and won the National Book Critics Circle Award. In 1988, Morrison won the Pulitzer Prize for Beloved (1987); she gained worldwide recognition when she was awarded the Nobel Prize in Literature in 1993. Born and raised in Lorain, Ohio, Morrison graduated from Howard University in 1953 with a B.A. in English. In 1955, she earned a master's degree in American Literature from Cornell University. In 1957 she returned to Howard University, was married, and had two children before divorcing in 1964. In the late 1960s, she became the first black female editor in fiction at Random House in New York City. In the 1970s and 1980s, she developed her own reputation as an author, and her perhaps most celebrated work, Beloved, was made into a 1998 film. Her works are praised for addressing the harsh consequences of racism in the United States. In 1996, the National Endowment for the Humanities selected her for the Jefferson Lecture, the U.S. federal government's highest honor for achievement in the humanities. The very same year, she was honored with the National Book Foundation's Medal of Distinguished Contribution to American Letters. On May 29, 2012, President Barack Obama presented Morrison with the Presidential Medal of Freedom. In 2016, she received the PEN/Saul Bellow Award for Achievement in American Fiction. In 2020, Morrison was inducted into the National Women's Hall of Fame."
    },
    {
        name:"Dan Brown",
        firstbook:"Digital Fortress ",
        works:"The Da Vinci Code ,Angels & Demons ",
        url:"/res/images/dnbr.jpeg",
        description:"Daniel Gerhard Brown (born June 22, 1964) is an American author best known for his thriller novels, including the Robert Langdon novels Angels & Demons (2000), The Da Vinci Code (2003), The Lost Symbol (2009), Inferno (2013) and Origin (2017). His novels are treasure hunts that usually take place over a period of 24 hours. They feature recurring themes of cryptography, art, and conspiracy theories. His books have been translated into 57 languages and, as of 2012, have sold over 200 million copies. Three of them, Angels & Demons, The Da Vinci Code, and Inferno, have been adapted into films. The Robert Langdon novels are deeply engaged with Christian themes and historical fact, and have generated controversy as a result. Brown states on his website that his books are not anti-Christian and he is on a constant spiritual journey himself. He claims that his book The Da Vinci Code is simply an entertaining story that promotes spiritual discussion and debate and suggests that the book may be used as a positive catalyst for introspection and exploration of our faith."
    }
];

authorRouter.get("/",(req,res)=>{

    res.render("lista",{
        title:"Authors",
        nav,
        list:authors
    })

authorRouter.get('/create',(req,res)=>{
        // res.send("create an author man")
        res.render("form",{
            nav,
            title:"New Author",
            form:[
                {
                    type:"text",
                    id:"name",
                    placeholder:"Enter Author name",
                    onchange:"",
                    label:"Author Name"
                },
                {
                type:"text",
                id:"works",
                placeholder:"Enter Notable Works of The Author",
                onchange:"",
                label:"Notable Works"
            },
            {
                type:"text",
                id:"first-book",
                placeholder:"Enter First Book of the Author",
                onchange:"",
                label:"First Book"
            },{
                type:"file",
                id:"cover-img",
                placeholder:"Upload an image of the Author",
                onchange:"",
                label:"Image of The Author"
            },
             {
                type:"textarea",
                id:"description",
                placeholder:"Enter short discription about author",
                onchange:"",
                label:"Author Description"
            },
             
             {
                 type:"submit",
                 id:"create-Book",
                 value:"Create Author",
                 
             }
         
            ]
        })
    });

authorRouter.get('/:id',(req,res)=>{
    const id=req.params.id;
    // res.send(`my id is ${id}`);
     res.render("singlea",{
        title:"Author",
         nav,
         single:authors[id]
     })
});



})

return authorRouter;

}

module.exports=Authorrouter;