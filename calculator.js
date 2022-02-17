let screen=document.getElementById('screen');
let buttons=document.querySelectorAll('.keys');
let screentext='';
for(item of buttons)
{
    item.addEventListener('click',function(e){
        buttontext=e.target.innerText;
        if(buttontext=='x')
        {
            buttontext='*'
            screentext+=buttontext
            screen.innerText=screentext;
        }
        else if(buttontext=='=')
        (
            screen.innerText=eval(screentext)
        )
        else if(buttontext=='C')
        {
            screentext='';
            screen.innerText=screentext;
        }
        else
        {
            screentext+=buttontext;
            screen.innerText=screentext;
        }
     
    })
}

