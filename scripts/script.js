function fillgrid(size){
    const container = document.querySelector('.container');
    container.setAttribute('style',`grid-template-columns:repeat(${size},1fr);grid-template-rows:repeat(${size},1fr)`);
    for(let i=0;i<size*size;i++){
        let div = document.createElement('div');
        div.textContent = i;
        div.classList.add('cell');
        container.appendChild(div);

    }
}

function randomColor(){
    let letters = '0123456789ABCDEF';
    let color = '#';
    for(let i=0;i<6;i++){
        color+= letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


const divs = document.querySelectorAll('.cell');

divs.forEach((div) => {
    div.addEventListener('mouseover',() =>{
        div.style.backgroundColor = randomColor();
    })
})

let button = document.querySelector("#size");

button.addEventListener('click',()=>{
    let size = parseInt(prompt("enter size"));
    fillgrid(size);
})