function calculaIMC() {
    const peso = parseFloat(document.getElementById('peso').value)
    const altura = parseFloat(document.getElementById('altura').value)
    // se não for um número ele retonra abaixo/
    if (!isNaN(peso) && !isNaN(altura) && altura > 0){
        const imc = peso / (altura * altura)
        document.getElementById('resultado').textContent = imc.toFixed(2)

        if (imc < 18.5){
            document.getElementById('mensagem').textContent = 'Você está baixo do peso ideal'
        } else if (imc >= 18.5 && imc < 24.9){
            document.getElementById('mensagem').textContent = 'Você está no peso ideal'
        } else if (imc >= 18.5 && imc < 29.9){
            document.getElementById('mensagem').textContent = 'Você está acima do peso ideal. Para sua altura, o peso ideal seria' + (24.9 * (altura * altura)).toFixed(2) + 'Kg.'
        }else{
            document.getElementById('mensagem').textContent = 'Você está obeso. Para sua altura, o peso ideal seria' + (24.9 * (altura * altura )).toFixed(2) + 'Kg.'
        }
        }else{
            documento.getElementById('resultado').textContent = 'Informe um valor válido'
            documento.getElementById('mensagem').textContent = ''
    }
} 