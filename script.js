const form = document.getElementById('form-contatos');
let linhas = '';
let contador = 0;
const contatos = [];

form.addEventListener('submit', function (e) {
  e.preventDefault();

  addContatos();
  somaContatos();
});

function addContatos() {
  const inputNome = document.getElementById('nome-contato');
  const inputTel = document.getElementById('tel-contato');
  const imgContato = '<img src="./images/contato.png">';

  if(inputTel.value.length > 11 || inputTel.value.length < 11){
    alert('Insira um número de telefone válido, sem símbolos, ou espaços, o campo deve conter 11 dígitos');
  } else {
    let linha = '<tr>';
    linha += `<td>${imgContato}</td>`;
    linha += `<td>${inputNome.value}</td>`;
    linha += `<td>${inputTel.value}</td>`;
    linha += '</tr>';

    linhas += linha;

    document.querySelector('tbody').innerHTML = linhas;

    contatos.push(inputNome.value);
  }

  inputNome.value = '';
  inputTel.value = '';
};

function somaContatos() {
  const inputQtdContatos = document.getElementById('num-contatos');

  contador = contatos.length;
  inputQtdContatos.innerHTML = `${contador}`;
};
