// Função para manipular o envio do formulário
function resposta(event) {
    // Impede o comportamento padrão de envio do formulário
    event.preventDefault();
  
    // Obtém os valores dos campos de entrada
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    var language = document.getElementById('language').value;
  
    // Cria um novo elemento de parágrafo para exibir a resposta
    var respostaElement = document.createElement('p');
    respostaElement.innerHTML = 'Hi ' + name + ', good to see you! Well, i can see that you are ' + age + ' years old, and you are spending  time sudying ' + language;
  
    // Adiciona a resposta ao elemento de destino
    var respostasContainer = document.getElementById('respostas');
    respostasContainer.appendChild(respostaElement);
  
    // Limpa os campos de entrada após o envio do formulário
    document.getElementById('name').value = '';
    document.getElementById('age').value = '';
    document.getElementById('language').value = '';
  }
  
  // Adiciona um ouvinte de eventos ao formulário para capturar o envio
  var formulario = document.getElementById('formulario');
  formulario.addEventListener('submit', resposta);
  