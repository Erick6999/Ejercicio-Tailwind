const tarea = document.getElementById('fecha');
const btnAdd = document.getElementById('btnAdd');
const lista = document.getElementById('lista');
const fecha =document.getElementById('fecha')

btnAdd.addEventListener('click',()=>{
    const element = document.createElement('li');
    element.innerHtml=`<p>${tarea.value}</p>`+ '<button type="submit"> Check </button>';
    lista.appendChild(element);
});
function addItem(text) {
    const lista = document.getElementById('lista');
    let htmlcode = 
    `<p class = "w-3/5 text-left">${text}</p>`+
    `<i data-task="done" class="fas fa-check mr-2"></i>`+
    `<i data-task="remove" class="fas fa-trash"></i>`;

    const element =document.createElement('li');
    element.classList.add('flex', 'items-center');
    element.innerHTML = htmlcode;
    lista.appendChild(element);
}
function btnDone (e){
    const lista=document.getElementById('lista');
    let elem=e.target;
    let elementTask = elem.dataset.task;
    if (elementTask ==='done'){
        const p = elem.parentNode.firstElementChild;
        p.classList.toggle('line-through');
    } else if (elementTask ==='remove'){
        const li =elem.parentNode;
        lista.removeChild(li);
    }
}
btnAdd.addEventListener('click', function(e){
    const tarea = document.getElementById('tarea');
    addItem(tarea.value);
    tarea.value='';
})

lista.addEventListener('click', (e)=> btnDone(e));

lista.addEventListener('click',(e)=>{
console.log(e.target.dataset.task);
})