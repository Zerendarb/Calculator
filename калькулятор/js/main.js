let display = document.getElementsByClassName('display')[0];
// let buttons = document.getElementsByClassName('buttons');
let buttons = Array.from(document.getElementsByClassName('button'));

// console.log(display);
// console.log(buttons);
buttons.map (button =>{
    button.addEventListener('click',(e)=>{
        switch(e.target.innerText){
            case 'C':
                display.innerText ='';
                break;
            case '=':
                try{
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText ='Error'
                }
                break;
            case '←':
                if (display.innerText){
                    display.innerText = display.innerText.slice(0, -1);
                }
                break;
            default:
                display.innerText += e.target.innerText;
        }
    });
});
// buttons.map(button =>{
//     button.addEventListener('click',(e)=>{
//         console.log('click');
//         console.log(e);
//         console.log(e.target);
//         console.log(e.target.innerText);
//     });
// });