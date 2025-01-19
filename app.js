//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
  //Capturar o valor do campo de entrada: Utilize document.getElementById ou document.querySelector para obter o texto inserido pelo usuário.
  let campoNome = document.getElementById("amigo");
  let nome = campoNome.value.trim();
  //Validar a entrada: Implemente uma validação para garantir que o campo não esteja vazio.
  if (nome !== "") {
    //Atualizar o array de amigos: Se o valor for válido, adicione-o ao array que armazena os nomes dos amigos usando o método .push().
    amigos.push(nome);
    //Limpar o campo de entrada: Após adicionar o nome, redefina o campo de texto para uma string vazia.
    campoNome.value = ""; // Limpa o campo de texto
    console.log(amigos); // Exibe o array de amigos no console
    listarAmigos(); // Chama a função listarAmigos e Atualiza a lista visível
  } else {
    //Se estiver vazio, exiba um alerta com a mensagem de erro: "Por favor, insira um nome."
    alert("Digite um nome válido de amigo");
  }
}

function listarAmigos() {
  //Obter o elemento da lista: Utilize document.getElementById() ou document.querySelector() para selecionar a lista onde os amigos serão exibidos.
  let listaAmigos = document.getElementById("listaAmigos");
  //Limpar a lista existente: Defina lista.innerHTML = "" para garantir que não haja duplicados ao atualizar.
  listaAmigos.innerHTML = "";
  //Percorrer o array: Use um loop for para percorrer o array amigos e criar elementos de lista (<li>) para cada nome.
  for (let i = 0; i < amigos.length; i++) {
    //Criar um elemento de lista: Para cada amigo, crie um elemento de lista <li> e atribua o nome do amigo como seu texto.
    let itemLista = document.createElement("li");
    itemLista.textContent = amigos[i];
    //Adicionar elementos à lista: Para cada amigo, crie um novo elemento de lista.
    listaAmigos.appendChild(itemLista);
  }
}

// Escreva uma função que selecione aleatoriamente um dos nomes armazenados no array amigos.
// Use Math.random() e Math.floor() para obter um índice aleatório.
function sortearAmigo() {
  //Verificar se há amigos disponíveis: Antes de sortear, verifique se o array amigos não está vazio.
  if (amigos.length > 0) {
    //Gerar um índice aleatório: Use Math.random() e Math.floor() para selecionar um índice aleatório do array.
    let indice = Math.floor(Math.random() * amigos.length);
    //Obter o nome sorteado: Use o índice aleatório para acessar o nome correspondente no array.
    let amigoSorteado = amigos[indice];
    //Mostrar o resultado: Atualize o conteúdo do elemento de resultado usando document.getElementById() e innerHTML para exibir o amigo sorteado.
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `O amigo sorteado é: ${amigoSorteado}`;
  } else {
    alert("Adicione amigos para sortear!");
  }
}
