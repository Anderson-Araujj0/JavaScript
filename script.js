// Seleção de elementos
const inputTarefa = document.getElementById('inputTarefa');
const btnAdicionar = document.getElementById('btnAdicionar');
const listaTarefas = document.getElementById('listaTarefas');

// Função para adicionar tarefa
function adicionarTarefa() {
    const tarefaTexto = inputTarefa.value.trim();

    // Verifica se o campo de input está vazio
    if (tarefaTexto === '') {
        alert('Por favor, insira uma tarefa!');
        return;
    }

    // Criar elemento de lista (li)
    const li = document.createElement('li');
    li.textContent = tarefaTexto;

    // Criar botão de remover
    const btnRemover = document.createElement('button');
    btnRemover.textContent = '❌';
    btnRemover.classList.add('remove');
    btnRemover.onclick = () => li.remove(); // Função de remoção

    // Adicionar o botão de remover à tarefa
    li.appendChild(btnRemover);

    // Marcar a tarefa como concluída ao clicar
    li.onclick = () => li.classList.toggle('completed');

    // Adicionar a tarefa à lista
    listaTarefas.appendChild(li);

    // Limpar o campo de input
    inputTarefa.value = '';
}

// Adicionar a tarefa ao clicar no botão
btnAdicionar.addEventListener('click', adicionarTarefa);

// Adicionar a tarefa ao pressionar Enter
inputTarefa.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        adicionarTarefa();
    }
});
