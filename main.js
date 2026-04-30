const containerAdicionar = document.querySelector('.adicionar')
const btnAdicionar = containerAdicionar.querySelector('button')
const inputAdicionar = containerAdicionar.querySelector('input')

const containerTarefas = document.querySelector('.tarefas')
const templateTarefas = containerTarefas.querySelector('template')

function salvarTarefas() {
    const nodeListTarefas = containerTarefas.querySelectorAll(':scope > .tarefa span');
    const arrayTarefas = Array.from(nodeListTarefas).map((el) => el.textContent)
    const stringTarefas = JSON.stringify(arrayTarefas)
    localStorage.setItem('tarefas', stringTarefas)
}

function carregarTarefas() {
    const stringTarefas = localStorage.getItem('tarefas')
    const arrayTarefas = JSON.parse(stringTarefas) || []
    arrayTarefas.forEach(elTxt => criarTarefa(elTxt))
}
carregarTarefas()

function criarTarefa(texto) {

    if (texto.trim() === '') return

    const tarefa = templateTarefas.content.cloneNode(true)
    const spanTitle = tarefa.querySelector('span')
    const btnExcluir = tarefa.querySelector('button')

    spanTitle.textContent = texto
    btnExcluir.addEventListener('click', () => {
        btnExcluir.closest('.tarefa').remove()
        salvarTarefas()
    })

    containerTarefas.appendChild(tarefa)
    salvarTarefas()
}


btnAdicionar.addEventListener('click', () => {
    const texto = inputAdicionar.value.trim()
    criarTarefa(texto)
    inputAdicionar.value = ''
})

inputAdicionar.addEventListener('keypress', (evt) => {
    if (evt.key !== 'Enter') return;
    btnAdicionar.click()
})


/*   -- EXTRAS / ANOTAÇÕES -- 

HTML --> DOM (Document Object Model). Por isso tem o "document"
ao procurar algo. 

CloneNode pega apenas o primeiro bagui. (true) faz com q ele
pegue os fiote tbm

 >> funcion criarTarefas
        poderia fazer tarefa.querySelector('span').textContent = texto
        mas isso aí é mto longo ent colocamos separados pra ficar mais
        organizado

Event Listener permite com que mais de um evento aconteça, o onclick só dá um :thumbs_up:

map é tipo um for; recebe uma função, e a executa para cada nó do array (so funciona coma array)
    
        --  fim de notes -- */