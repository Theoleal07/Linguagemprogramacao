function seguir(){
    alert('Você agora está seguindo Samuel P. Souza')
}
//exercício 1 
function exe1(){
    //vamos usar DOM para recuperar os dados do HTML
    //DOM - Document Object Model 
    let nro1 = Number(document.getElementById("nro1").value);
    let nro2 =  Number(document.getElementById("nro2").value);
    //vamos fazer a subtração 
    let sub = nro1 - nro2
   // alert("A subtração é " + sub)
   document.getElementById("sub").innerText = "O resultado é: " + sub 
}
function exe2(){
    let nro1 = Number(document.getElementById("nro1").value);
    let nro2 = Number(document.getElementById("nro2").value);
    let nro3 = Number(document.getElementById("nro3").value);
    //multiplicar 3 números
    let sub = nro1 * nro2 * nro3
    document.getElementById("sub").innerText = "O resultado é: " + sub 
}
function exe3(){
    let nro1 = Number(document.getElementById("nro1").value);
    let nro2 = Number(document.getElementById("nro2").value);

    let sub =  nro1 / nro2
    document.getElementById("sub").innerText = "O resultado é: " + sub 
}
function exe4(){
    let nro1 = Number(document.getElementById("nro1").value);
    let nro2 = Number(document.getElementById("nro2").value);

    let sub = (nro1 * 2 + nro2 * 3 ) / 5;
    document.getElementById("sub").innerText  = "O resultado é: " + sub 
}
function exe5(){
    let nro1 = Number(document.getElementById("nro1").value);

    let sub = nro1 - (nro1 * 10 / 100);
    document.getElementById("sub").innerText = "O preço do produto com 10% de desconto: " + sub
}
function exe6() {
    let nro1 = Number(document.getElementById("nro1").value); // Salário fixo
    let nro2 = Number(document.getElementById("nro2").value); // Valor das vendas

    // Calcula a comissão de 4% sobre as vendas
    let comissao = nro2 * 4 / 100;

    // Calcula o salário final com a comissão
    let sub = nro1 + comissao;

    // Exibe o resultado formatado com duas casas decimais
    document.getElementById("sub").innerText = "O salário final com a comissão de 4% é: " + sub.toFixed(2);
}
function exe7() {
    let nro1 = Number(document.getElementById("nro1").value);

    // Calcula o novo peso se engordar 15%
    let pesoEngordar = nro1 + (nro1 * 15 / 100);

    // Calcula o novo peso se emagrecer 20%
    let pesoEmagrecer = nro1 - (nro1 * 20 / 100);
    // Exibe os resultados corretamente no HTML
    document.getElementById("sub").innerHTML = 
        "Se engordar 15%: " + pesoEngordar.toFixed(2) + " kg<br>" +
        "Se emagrecer 20%: " + pesoEmagrecer.toFixed(2) + " kg";
}

    


