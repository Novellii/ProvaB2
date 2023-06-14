// ------------------------------------------------------------------------------- //

// Aqui há o verificador de número primo //

// Função que verifica se é um número primo, caso seja maior que 1, ele será considerado //

function verificarNumeroPrimo(primoNumero) {
  if (primoNumero <= 1) {
    return false;
  }
  for (var i = 2; i <= Math.sqrt(primoNumero); i++) {
    if (primoNumero % i === 0) {
      return false;
    }
  }
  return true;
}

// Função que verifica se é, ou não é, um número primo, em cada caso será avisado, em caso negativo será colocado todos os números primos. //

function numeroprimo() {
  var primoNumero = prompt("Escreva um número");
  
  if (verificarNumeroPrimo(primoNumero)) {
    alert(primoNumero + " é um número primo, por isso não listaremos os primos, digite um número não primo para podermos listar.");
    return numeroprimo()
  } else {
    alert(primoNumero + " não é um número primo, logo, listaremos os primos no final da página:")
    var paragrafo = document.createElement("h1");
    paragrafo.textContent = primoNumero + " não é primo, os números primos são 2 3 5 7 11 13 17 19 23 29 31 37 41 43 47 53 59 61 67 71 73 79 83 89 97 101 103 107 109 113 127 131 137 139 149 151 157 163 167 173 179 181 191 193 197 199 211 223 227 229 233 239 241 251 257 263 269 271 277 281 283 293 307 311 313 317 331 337 347 349 353 359 367 373 379 383 389 397 401 409 419 421 431 433 439 443 449 457 461 463 467 479 487 491 499 503 509 521 523 541 547 557 563 569 571 577 587 593 599 601 607 613 617 619 631 641 643 647 653 659 661 673 677 683 691 701 709 719 727 733 739 743 751 757 761 769 773 787 797 809 811 821 823 827 829 839 853 857 859 863 877 881 883 887 907 911 919 929 937 941 947 953 967 971 977 983 991 997.";
    document.body.appendChild(paragrafo);

  }
}

// ------------------------------------------------------------------------------- //

// Aqui há o verificador de Senhas //

// Inicialmente é verificado se o tamanho da senha é maior que 8 //
function funçãoSenha(senha) {
  if (senha.length < 8) {
    return false;
  }
  //Depois, é criado três variáveis para verificar maiúscula, minúscula e numero //
  var temMaiuscula = false;
  var temMinuscula = false;
  var temNumero = false;

  for (var i = 0; i < senha.length; i++) {
    var caractere = senha.charAt(i);

    if (caractere >= "A" && caractere <= "Z") {
      temMaiuscula = true;
    } else if (caractere >= "a" && caractere <= "z") {
      temMinuscula = true;
    } else if (!isNaN(caractere)) {
      temNumero = true;
    }
  }

  // Utilizando a matéria do Alessandro, é verificado se todas as três variáveis são verdadeiras. //

  return temMaiuscula && temMinuscula && temNumero;
}

// Se for tudo true, a senha é aceita, se algum for false, ou todos forem, a senha é rejeitada //

function senhaVerificar() {
  var senhaInserida = prompt("Digite uma senha:");
  var senhaDigitada = funçãoSenha(senhaInserida);
  if (senhaDigitada == false) {
    alert("Senha não Válida")
  }
  if (senhaDigitada == true) {
    alert("Senha Válida")
  }
}

// ------------------------------------------------------------------------------- //

function calcularFatorial(numero) {
  if (numero === 0 || numero === 1) {
    return 1;
  }

  var resultado = 1;

  for (var i = 2; i <= numero; i++) {
    resultado *= i;
  }

  return resultado;
}

// Calculador de Fatorial para qualquer número //

function VerificarNumeroGeral() {
  var numeroInserido = prompt("Digite um número");
  var resultadoCalculo = calcularFatorial(numeroInserido);
  alert("O fatorial do número inserido é de " + resultadoCalculo)
}

// Calculador de fatorial, para os números 1, 2, 3, 4, 5, 6, 7, 8, 9 e 10 //

function verificarNumero1() {
  var resultadoCalculo1 = calcularFatorial(1);
  alert("O fatorial do número inserido é de " + resultadoCalculo1)
}
function verificarNumero2() {
  var resultadoCalculo2 = calcularFatorial(2);
  alert("O fatorial do número inserido é de " + resultadoCalculo2)
}
function verificarNumero3() {
  var resultadoCalculo3 = calcularFatorial(3);
  alert("O fatorial do número inserido é de " + resultadoCalculo3)
}
function verificarNumero4() {
  var resultadoCalculo4 = calcularFatorial(4);
  alert("O fatorial do número inserido é de " + resultadoCalculo4)
}
function verificarNumero5() {
  var resultadoCalculo5 = calcularFatorial(5);
  alert("O fatorial do número inserido é de " + resultadoCalculo5)
}
function verificarNumero6() {
  var resultadoCalculo6 = calcularFatorial(6);
  alert("O fatorial do número inserido é de " + resultadoCalculo6)
}
function verificarNumero7() {
  var resultadoCalculo7 = calcularFatorial(7);
  alert("O fatorial do número inserido é de " + resultadoCalculo7)
}
function verificarNumero8() {
  var resultadoCalculo8 = calcularFatorial(8);
  alert("O fatorial do número inserido é de " + resultadoCalculo8)
}
function verificarNumero9() {
  var resultadoCalculo9 = calcularFatorial(9);
  alert("O fatorial do número inserido é de " + resultadoCalculo9)
}
function verificarNumero10() {
  var resultadoCalculo10 = calcularFatorial(10);
  alert("O fatorial do número inserido é de " + resultadoCalculo10)
}
// ------------------------------------------------------------------------------- //

// Verificador de quadrado perfeito //

function verificarQuadradoPerfeito(numero) {
  var raiz = Math.sqrt(numero);

  return raiz % 1 === 0;
}

function numeroperfeito() {
  var quadradoAnalisar = prompt("Escreva um número");
  var quadradoResultado = verificarQuadradoPerfeito(quadradoAnalisar)
  if (quadradoResultado == false) {
    alert("Não é um quadrado perfeito")
  }
  if (quadradoResultado == true) {
    alert("É sim um quadrado perfeito")
  }
}

// ------------------------------------------------------------------------------ //