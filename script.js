function adicionar(){
  var caixa = document.getElementById("caixa");
  var item = caixa.value;
  item = item[0].toUpperCase() + item.substring(1);
  var chave = localStorage.length + 1;
  localStorage.setItem(chave,item);
  caixa.value = "";
  caixa.focus();

  carregar();
};

function carregar(){
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
  localStorage.removeItem(chave);
  carregar();
};

/*function reChavear(){
  var store = localStorage;
  for (i = 0; i <= store.length; i++){
    console.log(store.key(i));
    var chave = store.key(i);
    var valor = store.getItem(chave);
    store.setItem(i, valor);
  };
  };
*/
