function exe1(){
    let numeros = []
    for(let i=0; i<6; i++){
        //inserir números no vetor
        numeros.push(Number(prompt(`Informe o elemento ${i}`)))
    }
    //calcula os pares e ímpares
    let pares = [] //guarda os números pares 
    let impares = [] //guarda os números ímpares
    for(let i=0; i<numeros.length; i++){// .length retorna o tamanho do vetor
        if(numeros[i] % 2 == 0){ //par 
            pares.push(numeros[i])
        }else{ //ímpar
            impares.push(numeros[i])
        }
    }
    alert(`Números pares: ${pares} e a quantidade ${pares.length}`)
    alert(`Números ímpares: ${impares} e a quantidade ${impares.length}`)
}
function exe2(){
    let numeros = []
    for(let i=0; i<7; i++){
       numeros.push(Number(prompt(`Informe o elemento ${i}`)))   
    }
    let multiplosde2e3 = []
    let multiplosde2 = []
    let multiplosde3 = []
    for(i = 0;i < numeros.length;i++) {
        if (numeros[i] % 2 == 0 && numeros[i] % 3 == 0){
            multiplosde2e3.push(numeros[i])
        }else if (numeros[i] % 2 == 0){
            multiplosde2.push(numeros[i])
        }else if (numeros[i] % 3 == 0){
            multiplosde3.push(numeros[i])
        }
    }
    document.getElementById("resultado").innerHTML = `Números múltiplos de 2: ${multiplosde2} e a quantidade ${multiplosde2.length} 
    <br> Números múltiplos de 3: ${multiplosde3} e a quantidade ${multiplosde3.length} 
    <br> Números múltiplos de 2 e 3: ${multiplosde2e3} e a quantidade ${multiplosde2e3.length}`
}
function exe3(){
    //CADASTRA CÓDIGO E QUANTIDADE DE ESTOQUE 
    let codigos = [], estoque = [] //declara os vetores
    for(let i=0; i<3; i++){
        codigos.push(prompt(`Informe o código do produto ${i}`)) //inserir códigos no vetor
        estoque.push(Number(prompt(`Informe a quantidade do produto ${i}`))) //inserir quantidade no vetor
    }
    //CADASTRA CÓDIGO E QUANTIDADE DE VENDAS
    let cliente = Number(prompt("Informe o código do cliente"))
    do{ //innicia o loop para inserir o código do cliente
    
        codigo = prompt("Informe o código do produto")//inserir código do produto

    quantidade = Number(prompt("Informe a quantidade do produto"))//inserir quantidade do produto
    //procura para verificar se o código do produto existe
    let posicao = codigos.indexOf(codigo) //procura o código do produto no vetor de códigos
    if(posicao == -1){ //se o código não existe
        alert("Código do produto não existe")
    }
    else{ //se o código existe
        if(estoque[posicao] >= quantidade){ //se a quantidade do produto no estoque é menor que a quantidade desejada
            estoque[posicao] = estoque[posicao] - quantidade //atualiza o estoque
            alert(`Venda realizada com sucesso!`)
        }
        else{ //se a quantidade do produto no estoque é maior que a quantidade desejada
            alert(`Venda não realizada! Estoque insuficiente!`)
        }
      }cliente = Number(prompt(`Informe o código do novo cliente. Digite 0 para sair`))//inserir código do cliente
    }//fecha o do 
    while(cliente != 0) //enquanto o código do cliente for diferente de 0)
        alert(`${codigos} ${estoque}`)//exibe os códigos e as quantidades do estoque
}
function exe4() {
    let elementos = []
    for (let i = 0; i < 15; i++) {
        elementos.push(Number(prompt(`Entre com 15 números para o vetor. Posição ${i + 1}:`)))
    }
    let posicoes = [] 
    for(let i = 0; i < elementos.length; i++) {
    if (elementos[i] === 30) {
        posicoes.push(i)
    } 
    }
    if (posicoes.length > 0) {
        alert(`O número 30 está na posição ${posicoes}`)
    } else {
        alert("O número 30 não foi encontrado.")
    }
}
