function fillgrid(size){
    const container = document.querySelector('.container');
    container.setAttribute('style',`grid-template-columns:repeat(${size},1fr);grid-template-rows:repeat(${size},1fr)`);
    for(let i=1;i<=size*size;i++){
        let div = document.createElement('div');
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

function randomFill(){
    fillgrid(16);
    let all = document.querySelectorAll('.cell');
    let i =0;
    while(i<all.length){
        let item  = all[Math.floor(Math.random() * all.length)];
        item.style.backgroundColor = randomColor();
        i++
    }
    
}
randomFill();

let button = document.querySelector("#size");

button.addEventListener('click',()=>{
    let size = parseInt(prompt("enter size"));
    if(size>=64||size<=1){
        size = parseInt(prompt("Enter valid value"));
        clearGrids();
        fillgrid(size);
        fillcolor();
    }
    else{
    clearGrids();
    fillgrid(size);
    fillcolor();
    }
})


function fillcolor(){
let test = document.querySelectorAll('.cell');

test.forEach((div) => {
    div.addEventListener('mouseover',() =>{
        div.style.backgroundColor = randomColor();
    })
})

}

let clear = document.getElementById('clear');

clear.addEventListener('click',() =>{
    clearGrids();
    fillgrid(16);
    fillcolor();
})


fillcolor();