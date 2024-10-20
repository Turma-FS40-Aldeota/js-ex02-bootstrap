// Arquivo: operacoes.js

// Funções Calcular Operações
function somar() {

    // Obtendo os valores dos inputs
    const num1 = parseFloat(document.getElementById('number1').value);
    const num2 = parseFloat(document.getElementById('number2').value);

    // Verificando se os valores são números
    if (!isNaN(num1) && !isNaN(num2)) {
        const soma = num1 + num2; // Realiza a soma
        document.getElementById('resultado').textContent = "Resultado da Soma: " + soma.toFixed(1); // Exibe o resultado
    } else {
        document.getElementById('resultado').textContent = '*** Favor Informar Números Válidos.';
    }
}

function subtrair() {

    // Obtendo os valores dos inputs
    const num1 = parseFloat(document.getElementById('number1').value);
    const num2 = parseFloat(document.getElementById('number2').value);

    // Verificando se os valores são números
    if (!isNaN(num1) && !isNaN(num2)) {
        const subtracao = num1 - num2; // Realiza a soma
        document.getElementById('resultado').textContent = "Resultado da Subtração: " + subtracao.toFixed(1); // Exibe o resultado
    } else {
        document.getElementById('resultado').textContent = '*** Favor Informar Números Válidos.';
    }
}

function multiplicar() {

    // Obtendo os valores dos inputs
    const num1 = parseFloat(document.getElementById('number1').value);
    const num2 = parseFloat(document.getElementById('number2').value);

    // Verificando se os valores são números
    if (!isNaN(num1) && !isNaN(num2)) {
        const multiplicacao = num1 * num2; // Realiza a soma
        document.getElementById('resultado').textContent = "Resultado da Multiplicação: " + multiplicacao.toFixed(1); // Exibe o resultado
    } else {
        document.getElementById('resultado').textContent = '*** Favor Informar Números Válidos.';
    }
}

function dividir() {

    // Obtendo os valores dos inputs
    const num1 = parseFloat(document.getElementById('number1').value);
    const num2 = parseFloat(document.getElementById('number2').value);

    // Verificando se os valores são números
    if(num2=== 0)
    {
        document.getElementById('resultado').textContent = '*** Numerador Não Pode ser ZERO.';
    }
    else if (!isNaN(num1) && !isNaN(num2)) {
        const divisao = num1 / num2; // Realiza a soma
        document.getElementById('resultado').textContent = "Resultado da Divisão: " + divisao.toFixed(2); // Exibe o resultado
    } else {
        document.getElementById('resultado').textContent = '*** Favor Informar Números Válidos.';
    }
}

// Função Limpar Mensagens
function limpar() {
    document.getElementById('number1').value = "";
    document.getElementById('number2').value = "";
    document.getElementById('resultado').textContent = "Área de Mensagens";
}