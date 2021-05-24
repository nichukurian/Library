function validate_phone(){
    phone=document.getElementById('phone')
    phone_regex=/[0-9]{10}|[0-9]{3}[-.\s][0-9]{3}[-.\s][0-9]{4}/;
    let phone_number=phone.value;
    if(phone_number.length==10||phone_number.length==12&&phone_regex.test(phone_number))
    {
       document.getElementById('phone-small').style.visibility="hidden";

    }
    else{

        document.getElementById('phone-small').style.visibility="visible";
        document.getElementById('phone-small').innerText="Not a valid Phone number."
       
    }
    
}

function validate_password(){

    
    let score=0;
    let remedy=[];
    let remedy_str="";
    let lowerCase=/[a-z]/;
    let upperCase=/[A-Z]/;
    let number=/[0-9]/;
    let symbols=/[!@#$%^&*()_+?\|?><\/'`"-+=\[\[~{}]/;
    let password=document.getElementById('password');
    let password_help=document.getElementById('password-small');

    
    password_help.style.visibility="hidden";

    let password_text=password.value;
    if(password_text.length<8)
    {
        password_help.style.visibility="visible"
        password_help.innerText="Password must be more than 8 charecters long.";
        // password.classList.toggle("is-invalid",true);

       

    }
    else{
        password_help.innerText="";
        

        if(password_text.search(lowerCase)>=0)
        {
            score+=1;
        
        }
        else{
            remedy.push("Lower Case Letters");
            
        }
        
        if(password_text.search(upperCase)>=0)
        {
            score+=1;
        }
        else{
            remedy.push("Upper Case Letters");
        }
        if(password_text.search(number)>=0)
        {
            score+=1;
        }
        else{
            remedy.push("Numbers");
        }
        if(password_text.search(symbols)>=0)
        {
            score+=1;
        }
        else{
            remedy.push("Special Symbols");
        }

        if(score<4){
            
            password_help.style.visibility="visible";
            password_help.style.display="inherit";

            remedy_str="Add "
            for(var i=0;i<remedy.length;i++)
            {
                if(i>0){
                remedy_str+=","+remedy[i];
                }
                else{
                    remedy_str+=remedy[i];
                }
            
            }
            remedy_str+=" to improve your password.";
            password_help.innerText=remedy_str;
        

        }
        else{

            password_help.style.visibility="hidden";
            
        }

       

    }
    
   


}




function validate_email() 
{
    email=document.getElementById('email');
    email_small=document.getElementById('email-small');
 if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email.value))
  {
    email_small.style.visibility="hidden"
  }
  else{
      email_small.style.visibility="visible";
      email_small.innerText="Email is not valid";
  }

}

function confirm_password(){
    let confirm=document.getElementById('c-password');
    let password=document.getElementById('password');
    let password_small=document.getElementById('c-password-small');
    if(password.value==confirm.value)
    {
       password_small.style.visibility="hidden"
        password_small.innerText="";
    }
    else{
        password_small.style.visibility="visible"
        password_small.innerText="passwords doesn't match.!";
    }

}

