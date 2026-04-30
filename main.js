const containerAdicionar = document.querySelector('.adicionar')
const btnAdicionar = containerAdicionar.querySelector('button')
const inputAdicionar = containerAdicionar.querySelector('input')

const containerTarefas = document.querySelector('.tarefas')
const templateTarefas = containerTarefas.querySelector('template')

function criarTarefa(texto) {

    if (texto.trim() === '') return

    const tarefa = templateTarefas.content.cloneNode(true)
    const spanTitle = tarefa.querySelector('span')
    const btnExcluir = tarefa.querySelector('button')
    spanTitle.textContent = texto
    containerTarefas.appendChild(tarefa)

    btnExcluir.addEventListener('click'), () => btnExcluir.closest('tarefa'.remove())}


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
    
        --  fim de notes -- */