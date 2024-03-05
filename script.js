
var string="";
let buttons=document.querySelectorAll('#button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        if(e.target.innerHTML=='=')
        {
            string=eval(string);    
            document.querySelector('p').innerText=string;
        }
        else if(e.target.innerHTML=='AC')
        {
            string="";
            document.querySelector('p').innerText=string;
        }
        else if(e.target.innerHTML=='DEL')
        {
            document.querySelector('p').innerText=string.slice(0,string.length-1);
           string= string.slice(0,string.length-1);

        }
        else if(e.target.innerHTML=='++'|| e.target.innerHTML=='++'|| e.target.innerHTML=='+-'||e.target.innerHTML=='+*'||e.target.innerHTML=='+/'||e.target.innerHTML=='+%'||e.target.innerHTML=='--'||e.target.innerHTML=='**'||e.target.innerHTML=='%%'||e.target.innerHTML=='//')
        {   string="er";
            document.querySelector('p').innerText=string;

        }
                
     else{
        console.log(e.target )
        string=string+e.target.innerHTML;
       document.querySelector('p').innerText=string;}
    })
})
