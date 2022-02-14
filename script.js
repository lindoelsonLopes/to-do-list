const firstSection = document.querySelector('#section-one');
const list = document.createElement('ol');
list.id = 'lista-tarefas';
firstSection.appendChild(list);

const textoTarefa = document.querySelector('#texto-tarefa');
const criarLista = document.querySelector('#criar-tarefa');
const toDo = document.querySelector('#lista-tarefas');
const btnClear = document.getElementById('apaga-tudo');
const limparFinalizados = document.querySelector('#remover-finalizados');

criarLista.addEventListener('click', adicionarTarefa);
toDo.addEventListener('click', adicionarCor);
toDo.addEventListener('dblclick', itemRiscado);
btnClear.addEventListener('click', limparLista);
limparFinalizados.addEventListener('click', itemCompletado);

function adicionarTarefa(){
    const todoLi = document.createElement('li');
    todoLi.id = 'todo';
    todoLi.innerText = textoTarefa.value;
    textoTarefa.value = '';
    list.appendChild(todoLi);  
};


function adicionarCor(event) {
    let elemntList = document.querySelectorAll('#todo');
        for(let i = 0; i < elemntList.length; i +=1){
        elemntList[i].classList.remove('checked');
        event.target.classList.add('checked');
    }
};


function itemRiscado(event) {
    event.target.classList.toggle('completed'); 
      
};

function limparLista(){
    list.innerHTML = '';
    
}

limparLista();

function itemCompletado() {
    let elementoRiscado = document.querySelectorAll('.completed');
    for(let index = 0; index < elementoRiscado.length; index +=1){
            elementoRiscado[index].remove();
        }        
};

itemCompletado();