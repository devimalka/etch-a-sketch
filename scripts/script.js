function fillgrid(size){
    const container = document.querySelector('.container');
    container.setAttribute('style',`grid-template-columns:repeat(${size},1fr);grid-template-rows:repeat(${size},1fr)`);
    for(let i=1;i<=size*size;i++){
        let div = document.createElement('div');
        //div.textContent = i;
        div.classList.add('cell');
        container.appendChild(div);

    }
}

function clearGrids(){
    let container = document.querySelector('.container');
    let grids = document.querySelectorAll('.cell');
    for(let i=0;i<grids.length;i++){
        container.removeChild(grids[i]);
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

fillgrid(16);

let button = document.querySelector("#size");

button.addEventListener('click',()=>{
    let size = parseInt(prompt("enter size"));
    clearGrids();
    fillgrid(size);
    fillcolor();
})


function fillcolor(){
let test = document.querySelectorAll('.cell');

test.forEach((div) => {
    div.addEventListener('ontouchend',() =>{
        div.style.backgroundColor = randomColor();
    })
})

test.forEach((div) => {
    div.addEventListener('mouseover',() =>{
        div.style.backgroundColor = randomColor();
    })
})

}

fillcolor();