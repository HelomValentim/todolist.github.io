function adicionar(){
  //Função para adicionar uma nova tarefa no BD localStorage
  var caixa = document.getElementById("caixa");
  var item = caixa.value;
  item = item[0].toUpperCase() + item.substring(1);
  var chave = localStorage.length + 1;
  localStorage.setItem(chave,item);
  caixa.value = "";
  caixa.focus();
//Chama a função carregar para mostrar a lista de tarefas na tela.
  carregar();
};

function carregar(){
  //Função para carregar a lista com as tarefas do BD localStorage
  var lista = document.querySelector(".lista_interna");
  lista.innerHTML = "";
  var store = localStorage;
  if (store.length == 0){
    return;
    console.log('nada');
  };
  for (x = 0; x < localStorage.length; x++ ){
    var chave = localStorage.key(x);
    var valor = localStorage.getItem(chave);
    if (valor != null){
      var textoAntigo = lista.innerHTML;
      var texto = "<li class='fundo' id=" + chave +"> " + valor + "<button type='submit' id='btnCancelar' onclick='excluir(" + chave + ")'>Excluir</button></li>";
      lista.innerHTML = texto + textoAntigo;
      if (x % 2 == 0){
        var listagem = document.getElementById(chave);
        listagem.classList.add("escuro");
        
      };
    };
  };
};

function excluir(chave){
  //Função para excluir a tarefa desejada
  localStorage.removeItem(chave);
  carregar();
  reChavear();
};

function reChavear(){
//Função para alterar as Key's do localStorege para ficarem sempre na sequencia apartir de 1 e recarregar a lista de tarefas.
  var chaves = Array.from(document.querySelectorAll('li'));
  var valores = [];
  chaves.forEach(function(valor){
    valores.push(localStorage.getItem(valor.id));
  });
  localStorage.clear();
  var i = 1;
  valores.forEach(function(vl){
    localStorage.setItem(i,vl);
    i++;
  });
  carregar();
};

