function calcular() {
    // Obtendo os valores dos inputs
    const num1 = parseFloat(document.getElementById('number1').value);
    const num2 = parseFloat(document.getElementById('number2').value);

    // Verificando se os valores são números
    if (!isNaN(num1) && !isNaN(num2)) {
        const resultado = num1/num2; // Calula o consumo médio
        document.getElementById('resultado').textContent = "Consumo de Combustível: " + resultado.toFixed(1) + "Km/l"; // Exibe o resultado
    } else {
        document.getElementById('resultado').textContent = '*** Favor Informar Medidas Válidas.';
    }
}

function limpar() {
    document.getElementById('number1').value = "";
    document.getElementById('number2').value = "";
    document.getElementById('resultado').textContent = "Área de Mensagens";
}