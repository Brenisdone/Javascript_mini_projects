const IncBtn = document.getElementById('IncBtn')
const DecBtn = document.getElementById('DecBtn')
const Reset = document.getElementById('Reset')
const label = document.getElementById('cnt')
let value = 0;

IncBtn.onclick = function(){
    value++;
    label.textContent=value;
}
DecBtn.onclick = function(){
    value--;
    label.textContent=value;
}
Reset.onclick = function(){
    value=0;
    label.textContent=value;
}

