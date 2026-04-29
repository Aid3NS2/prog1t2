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

    btnExcluir.onclick = () => btnExcluir.closest('.tarefa').remove()
    }

// (correto) btnAdicionar.addEventListener('click', () => {}) , 
// nao tempos a capacidade cerebral p isso nao (d acordo c prof)
// portanto:
btnAdicionar.onclick = function() {
    const texto = inputAdicionar.value.trim()
    criarTarefa(texto)
    inputAdicionar.value = ''
}


/*   -- EXTRAS / ANOTAÇÕES -- 

HTML --> DOM (Document Object Model). Por isso tem o "document"
ao procurar algo. 

CloneNode pega apenas o primeiro bagui. (true) faz com q ele
pegue os fiote tbm

 >> funcion criarTarefas
        poderia fazer tarefa.querySelector('span').textContent = texto
        mas isso aí é mto longo ent colocamos separados pra ficar mais
        organizado


    
        --  fim de notes -- */