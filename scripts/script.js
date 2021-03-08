const container = document.querySelector('.container');



for(let i =0;i<16;i++){
    let div = document.createElement('div');
    //div.textContent = i;
    div.classList.add("cel");
    container.appendChild(div);
}


let div = document.querySelectorAll('.cel');

function randomColor(){
    let letters = '0123456789ABCDEF';
    let color = '#';
    for(let i=0;i<6;i++){
        color+= letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


div.forEach((div) =>{
    div.addEventListener('mouseover',() => {
        div.style.backgroundColor=randomColor();
    });
})