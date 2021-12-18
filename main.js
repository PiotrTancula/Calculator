let screen = document.getElementById('screen');
let buttons = [...document.getElementsByClassName('button')];
let totalNumber = '';

buttons.forEach(button => {

    button.addEventListener('click', countFunction)
})


function countFunction(e){

    console.log(e.target);

    console.log(e.target.innerText);

    if(e.target.innerText !== '=' && e.target.innerText !== 'DELETE'){
       screen.textContent+=e.target.innerText;
       totalNumber+=e.target.innerText;
    }
    else if(e.target.innerText === 'DELETE' ){
        totalNumber = '';
        screen.textContent = '';
    }
    else if(totalNumber.includes('/0')){
        screen.textContent = ' You cannot divide by 0';
    }
    else{
    screen.textContent = eval(totalNumber);
    }

}

