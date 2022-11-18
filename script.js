// initial data
let currentColor = 'black';
let screen = document.querySelector('#tela');
let ctx = screen.getContext('2d');
let canDraw = false;


// events
document.querySelectorAll('.colorArea .color').forEach(item =>{
    item.addEventListener('click', colorClickEvent)
});
screen.addEventListener('mousedown', mouseDownEvent);
screen.addEventListener('mousemove', mouseMoveEvent);
screen.addEventListener('mouseup', mouseUpEvent);



//functions
function colorClickEvent(e) {
    let color = e.target.getAttribute('data-color');
    
    document.querySelector('.active').classList.remove('active');
    e.target.classList.add('active');
    console.log("Clicou na cor: ", color);
}



function mouseDownEvent() {
    canDraw = true;
}

function mouseMoveEvent() {
    if(canDraw){
        console.log('DESENHANDO.....');
    }
}

function mouseUpEvent() {
    canDraw = false;
}