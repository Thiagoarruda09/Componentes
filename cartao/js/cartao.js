const INPUT_NUMERO = document.getElementById("card-numero");
const INPUT_TITULAR = document.getElementById("card-nome");
const INPUT_CVV = document.getElementById("card-cvv");
const SELECT_MES = document.getElementById("card-mes");
const SELECT_ANO = document.getElementById("card-ano");
const RESULT_NUMERO = document.getElementById("result-numero");
const RESULT_NOME = document.getElementById("result-nome");
const RESULT_ANO = document.getElementById("result-ano");
const RESULT_MES = document.getElementById("result-mes");
const BANDEIRA_VISA = document.getElementById("bandeira-visa");
const BANDEIRA_MASTER = document.getElementById("bandeira-master");
const RESULT_CVV = document.getElementById("result-cvv");
const RESULT_DATA = document.getElementById("result-data");
const CARTAO = document.getElementById("cartao");
const CARTAO_VIRADO = document.getElementById("cartao-virado");
const CARTAO_VERSO= document.getElementById('cartao-verso');

// pega o ano atual e adiciona 10 anos no select

let hoje = new Date();
let anoFim = hoje.getFullYear() + 10;

for (let ano = hoje.getFullYear(); ano <= anoFim; ano++) {
    SELECT_ANO.innerHTML += `<option>${ano}</option>`;
}

// adiciona os meses no select
const meses = [
    "janeiro", "fevereiro", "março", "abril", "maio", "junho",
    "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
];

meses.forEach((mes) => {
    SELECT_MES.innerHTML += `<option>${mes}</option>`;
});

function preencherNumero() {
    RESULT_NUMERO.innerHTML = INPUT_NUMERO.value;
}

function preencherNome() {
    RESULT_NOME.innerHTML = INPUT_TITULAR.value;
}

function preencherAno() {
    RESULT_ANO.innerHTML = SELECT_ANO.value;
}

function preencherMes() {
    let m = SELECT_MES.selectedIndex;
    RESULT_MES.innerHTML = m < 10 ? "0" + m : m;
}

function formatarNumeroDoCartao() {
    let valor = INPUT_NUMERO.value.replace(/\D/g, "");
    let formatado = valor.match(/.{1,4}/g)?.join(" ") || "";
   
    INPUT_NUMERO.value = formatado;

   mudarCorDoCartao()
}

function mudarCorDoCartao(){
CartaoVisa()
CartaoMaster()
}
function CartaoVisa(){
  if (INPUT_NUMERO.value.startsWith("4")) {
        
    BANDEIRA_VISA.style.display = "block";
    CARTAO.style.backgroundColor = "#0288C4";
    CARTAO_VIRADO.style.backgroundColor = "#F7A023";
    CARTAO_VERSO.style.backgroundColor = "#0288C4";
} else {
    BANDEIRA_VISA.style.display = "none";
    CARTAO.style.backgroundColor = "#121212";
}

}

function CartaoMaster(){
  let valor = INPUT_NUMERO.value.replace(/\D/g, "");
  let primeirosDigitos = parseInt(valor.slice(0, 4));
  if (primeirosDigitos >= 5099 && primeirosDigitos <= 5599) {
   
    CARTAO_VIRADO.style.backgroundColor = "#3F51B5";
    BANDEIRA_MASTER.style.display = "block";
    CARTAO.style.backgroundColor = "#E86418";
    CARTAO_VERSO.style.backgroundColor = "#E86418";
} else {
    BANDEIRA_MASTER.style.display = "none";
}
}


function preencherCvv() {
    RESULT_CVV.innerHTML = INPUT_CVV.value;
}

function mostrarFrente() {
    document.getElementById('cartao').style.display = 'block';
    document.getElementById('cartao-verso').style.display = 'none';
}

function mostrarVerso() {
    document.getElementById('cartao').style.display = 'none';
    document.getElementById('cartao-verso').style.display = 'block';
}