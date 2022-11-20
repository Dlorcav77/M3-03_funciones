const div_1 = document.querySelector('#div_1');
const div_2 = document.querySelector('#div_2');
const div_3 = document.querySelector('#div_3');
const div_4 = document.querySelector('#div_4');
const doc   = document.querySelector('body');
var color = '';

const format = (div,colores) => {
    div.style.backgroundColor = colores;
    div.style.border='solid black 3px';
    div.style.width='200px';
    div.style.height='200px';
}

format(div_1,'yellow');
format(div_2,'green');
format(div_3,'peru');
format(div_4,'tomato');

doc.addEventListener('keydown',(event) => {
    if (event.key === 'a') {
        doc.style.backgroundColor='blue';
        color = 'blue';
    } else if (event.key === 's') {
        doc.style.backgroundColor='red';
        color = 'red';
    }else if (event.key === 'd') {
        doc.style.backgroundColor='grey';
        color = 'grey';
    }

    console.log(event.isTrusted)
    {
        div_1.addEventListener('click', () =>{
            div_1.style.backgroundColor = color;
            doc.style.backgroundColor='';
        })
        
        div_2.addEventListener('click', () =>{
            div_2.style.backgroundColor = color;
            doc.style.backgroundColor='';
        })

        div_3.addEventListener('click', () =>{
            div_3.style.backgroundColor = color;
            doc.style.backgroundColor='';
        })

        div_4.addEventListener('click', () =>{
            div_4.style.backgroundColor = color;
            doc.style.backgroundColor='';
        })

    }
    
    
})



