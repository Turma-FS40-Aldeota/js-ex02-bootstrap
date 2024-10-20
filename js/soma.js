// Arquivo: soma.js

// Função Calcular Soma
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

// Função Limpar Mensagens
function limpar() {
    document.getElementById('number1').value = "";
    document.getElementById('number2').value = "";
    document.getElementById('resultado').textContent = "Área de Mensagens";
}