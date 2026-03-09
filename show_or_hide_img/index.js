const ghost = document.getElementById('ghost');
const my_butt = document.getElementById('my_butt');


my_butt.addEventListener("click",(event)=>{
    if(ghost.style.visibility==="hidden"){
        my_butt.textContent = 'HIDE';
        ghost.style.visibility = 'visible';
    }
    else{
        my_butt.textContent = 'SHOW';
        ghost.style.visibility = 'hidden';
    }
})