var data = new Date();
var btn = document.getElementById('invio');
var annooggi = data.getFullYear();

const contenitore = [];

function Eta (_nome,_cognome,_anni) {
  this.nome = _nome;
  this.cognome = _cognome;
  this.anni = _anni;
}


btn.addEventListener('click', (e) => {
  // e.preventDefault();
  let newNome = document.getElementById('nome').value;
  let newCognome = document.getElementById('cognome').value;
  let newNascita = document.getElementById('nascita').value;

  let newEta = new Eta (newNome,newCognome,newNascita);
  contenitore.push(newEta);

  lista();
  cancella();
});


var calcoloanni= (anno) => {
  let mioanno = new Date(anno);
  let nascita = mioanno.getFullYear();

  if (data.getMonth() >= mioanno.getMonth() && data.getDate() >= mioanno.getDate() ){
    return annooggi - nascita;
  }

  else {
    return (annooggi - nascita) - 1;
  }
}


function lista() {
  let lista = document.getElementById('dati');
  lista.innerHTML = '';
  contenitore.forEach((item) => {
    let eta = calcoloanni(item.anni);
    let colonna1 = `<td>${item.nome}</td>`;
    let colonna2 = `<td>${item.cognome}</td>`;
    let colonna3 = `<td>${eta}</td>`;

    lista.innerHTML += `<tr> ${colonna1}${colonna2}${colonna3} </tr>`;
  });
}

function cancella(){
  document.getElementById("nome").value = "";
  document.getElementById("cognome").value = "";
  document.getElementById("nascita").value = "";
  
}




