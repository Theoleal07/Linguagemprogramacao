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
function exe3() {
    // cadastra código, qtde em estoque e preço
    let vetor = [] // vetor de objetos
    for (let i = 0; i < 3; i++) {
        let objeto = {
            codigo: prompt("Informe o código do produto"),
            estoque: Number(prompt("Informe a qtde em estoque")),
            preco: Number(prompt("Informe o preço do produto"))
        }
        vetor.push(objeto)
    }

    // processo de compra
    let cliente = Number(prompt("Informe o código do cliente"))
    do {
        let codigo = prompt("Informe código do produto para compra")
        let qtde = Number(prompt("Informe a qtde do produto para compra"))

        // procura o produto
        let produtoEncontrado = null
        for (let i = 0; i < vetor.length; i++) {
            if (vetor[i].codigo === codigo) {
                produtoEncontrado = vetor[i]
                break
            }
        }

        if (!produtoEncontrado) {
            alert(`Código ${codigo} inexistente`)
        } else {
            if (produtoEncontrado.estoque >= qtde) {
                produtoEncontrado.estoque -= qtde
                alert("Pedido atendido. Obrigado e volte sempre")
            } else {
                alert("Não temos estoque suficiente desta mercadoria")
            }
        }

        cliente = Number(prompt("Informe o código do novo cliente. Digite 0 para encerrar"))
    } while (cliente != 0)

    console.log(vetor)
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
function exe5() {
    let matLog = []
    let matProg = []

    for(let i =0; i < 15; i++) {
        matLog.push(Number(prompt(`Entre com as  matrículas dos alunos de lógica ${i + 1}: `)))
    }
    for(let i =0; i < 10; i++) {
        matProg.push(Number(prompt(`Entre com as  matrículas dos alunos de  Lin.programação ${i + 1}: `)))
    }
    let repetidos = [] //guarda as matrículas repetidas
    for(let i = 0; i < matLog.length; i++) {
        for(let j = 0; j < matProg.length; j++) {
            if(matLog[i] == matProg[j]) {
                repetidos.push(matLog[i])
            }
        }
    }
    if(repetidos.length > 0) {
        alert(`As matrículas repetidas são: ${repetidos.join(", ")}`)
    }else {
        alert("Não há matrículas repetidas.")
    }
}
function exe6() {
    let nomes = []
    let vendasVendedor = []
    let comissao = []   
    
    for(let i= 0; i < 3; i++) {
        nomes.push(prompt(`Informe o nome do vendedor ${i + 1}: `))
        vendasVendedor.push(Number(prompt(`Informe o valor das vendas do vendedor ${i + 1}: `)))
        comissao.push(Number(prompt(`Informe o valor da comissão do vendedor ${i + 1}: `)))
        comissao[i] = vendasVendedor[i] * comissao[i] / 100 //calcula a comissão
    }
        alert(`Vendedores: ${nomes.join(", ")}\nvendas: ${vendasVendedor.join(", ")}\ncomissão: ${comissao.join(", ")}`)
        let maiorVenda = Math.max(...vendasVendedor) //pega o maior valor do vetor vendasVendedor 
        alert(`A maior venda foi de ${maiorVenda} e o vendedor foi: ${nomes[vendasVendedor.indexOf(maiorVenda)]}`) //pega o índice do maior valor do vetor vendasVendedor e mostra o nome do vendedor
        let maiorComissao = Math.max(...comissao) //pega o maior valor do vetor comissao`)
        alert(`A maior comissão foi de ${maiorComissao} e o vendedor foi: ${nomes[comissao.indexOf(maiorComissao)]}`) //pega o índice do maior valor do vetor comissao e mostra o nome do vendedor
        let menorComissao = Math.min(...comissao) //pega o menor valor do vetor comissao`)
        alert(`A menor comissão foi de ${menorComissao} e o vendedor foi: ${nomes[comissao.indexOf(menorComissao)]}`) //pega o índice do menor valor do vetor comissao e mostra o nome do vendedor  
}
function exe7() {
    let numReais = [];
    for(let i = 0; i < 10; i++) {
        numReais.push(Number(prompt(`Entre com 10 números reais. Posição ${i + 1}: `)));
    }

    let qtdNegativos = 0;
    let somaPositivos = 0;

    for(let i = 0; i < numReais.length; i++) {
        if(numReais[i] < 0) {
            qtdNegativos++;
        } else if(numReais[i] > 0) {
            somaPositivos += numReais[i];
        }
    }
    alert(`Quantidade de números negativos: ${qtdNegativos}\nSoma dos números positivos: ${somaPositivos}`);
}
function exe8() {
    let alunos = []
    let media = []

    for (let i = 0; i < 7; i++) {
        alunos.push(prompt(`Entre com o nome dos alunos. Posição ${i + 1}: `))
        media.push(Number(prompt(`Entre com a média do aluno ${alunos[i]}: `)))
    }

    let maiorMedia = media[0];
    let maior = 0;
    for (let i = 1; i < media.length; i++) {
        if (media[i] > maiorMedia) {
            maiorMedia = media[i];
            maior = i;        
        }
    }
    alert(`O aluno com a maior média é ${alunos[maior]} com média ${maiorMedia}`)
    for (let i = 0; i < 7; i++) {
        if (media[i] < 5) {
            let notaNecessaria = (5 * 2) - media[i];
            notaNecessaria = notaNecessaria < 0 ? 0 : notaNecessaria.toFixed(2);
            alert(`${alunos[i]} não foi aprovado. Precisa tirar pelo menos ${notaNecessaria} no exame final.`);
        }
    }
}
function exe9() {
    let nomes = [], codigos = [], precos = []
    for(let i = 0; i < 5; i++) {
        nomes.push(prompt(`Informe o nome do produto ${i + 1}: `))
        codigos.push(prompt(`Informe o código do produto ${i + 1}: `))
        precos.push(Number(prompt(`Informe o preço do produto ${i + 1}: `)))
    }
    for(let i = 0; i < 5; i++) {
        let novo
        if(codigos[i] % 2 == 0 && preços[i] > 1000) {
            novo = precos[i]+ precos[i] * 20/100
        }
       else if(codigos[i] % 2 == 0 ){
            novo = precos[i] + precos[i] * 15/100   
        }else if (precos[i] > 100) {
            novo = precos[i] + precos[i] * 10/100
        }else {
            novo = precos[i] 
        }
        alert(`O produto ${nomes[i]} com código: ${codigos[i]} tem o preço de: ${precos[i]} e o novo preço é: ${novo}`)
        }
}
function exe10() {
    let vet1 = []
    let vet2 = []
    let vetResul1= []
    let vetResul2 = []
    for(let i = 0; i < 10; i++) {
        vet1.push(Number(prompt(`Informe o número inteiro ${i + 1} do vetor 1:`)))
    }
    for(let i = 0; i < 5; i++)
        vet2.push(Number(prompt(`Informe o número inteiro ${i + 1} do vetor 2:`)))
   //calculara soma dos elementos do vet2
    let somaVet2 = 0
    for(let i = 0; i < 5; i++) {
        somaVet2 += vet2[i]
    }
    for(let i = 0; i < 10; i++){
        if (vet1[i] % 2 == 0) {
            vetResul1.push(vet1[i] + somaVet2)
        }
    }
    alert(`O vetor resultante 1 é: ${vetResul1}`)
    
    for(let i = 0; i < 10; i++){
        if (vet1[i] % 2 == 1) {
            let quantDivisores = 0
            for(let j = 0; j < 5; j++) {
                if (vet1[i] % vet2[j] == 0) {
                    quantDivisores++
                }
            }vetResul2.push(quantDivisores)
        }
    }alert(`O vetor resultante 2 é: ${vetResul2}`)
}