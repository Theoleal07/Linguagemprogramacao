function seguir(){
    alert("Você está seguindo Théo Leal Cunha")
}
function exe1(){
    //vamos umas DOM para recuperar os dados do html
    // DOM - documento, object and model
    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)
    let sub = n1 + n2
    //alert("A subtração é: " + sub)
    document.getElementById("sub").innerText= "O resultado é" + sub
}
function exe2(){
    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)
    let n3 = Number(document.getElementById("n3").value)
    let sub = (n1 * n2) * n3
    document.getElementById("sub").innerText="O resultado é: " + sub
}
function exe3(){
    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)
    let div = n1 / n2
    document.getElementById("div").innerText="O resultado é: " + div
}
function exe4(){
    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)
    let resp = ((n1 * 2) + (n2 * 3)) / 2
    document.getElementById("resp").innerText="O resultado é: " + resp
}
function exe5(){
    let n1 = Number(document.getElementById("n1").value)
    let n2 = n1 * 0.1
    let resp = (n1 - n2)
    document.getElementById("resp").innerText="O resultado do desconto é: " + resp
}
function exe6(){
    let sal= Number(document.getElementById("n1").value)
    let sells= Number(document.getElementById("n2").value)
    let resp = sal + sells + (sells * 0.04)
    document.getElementById("resp").innerText="O salário final é: " + resp
}
function exe7(){
    let peso= Number(document.getElementById("n1").value)
    let peso_engorda= peso + (peso * 0.15) 
    let peso_emagrece= peso - (peso * 0.20)
    document.getElementById("peso_emagrece").innerText="Se seu peso emagrecer 20% será de: " + peso_emagrece
    document.getElementById("peso_engorda").innerText="Se seu peso engordar 15% será de: " + peso_engorda
}
function exe8(){
    let peso= Number(document.getElementById("n1").value)
    let peso_grama= peso * 1000
    document.getElementById("peso_grama").innerText="O seu peso em gramas é: " + peso_grama

}
function exe9(){
    let base_maior= Number(document.getElementById("b1").value)
    let base_menor= Number(document.getElementById("b2").value)
    let altura= Number(document.getElementById("alt").value)
    let area= ((base_maior + base_menor)* altura / 2)
    document.getElementById("area").innerText="A área é: " + area
}
function exe10(){
    let lado= Number(document.getElementById("lado").value)
    let area= lado * lado
    document.getElementById("area").innerText="A área é: " + area
}
function L2exe8(){
    let salario= Number(document.getElementById("salario").value)
    if(salario < 0){
        document.getElementById("novo").innerHTML = "Salario negativo"
    }
    else if (salario <= 300){
        document.getElementById("novo").innerHTML = "Novo Salario" + (salario + salario*30/100)
    }   
    else{
        document.getElementById("novo").innerHTML = "Novo salário" + (salario + salario*15/100)
    }
}
function exe9(){
    let saldo = Number(document.getElementById("saldo").value)
    let credito = 0
    if (saldo >400){
        credito = saldo *30/100
    }
    else if ((saldo > 300) && (saldo <= 400)){
        credito = saldo * 25/100
    }
    else if ((saldo > 200) && (saldo <= 300)){
        credito = saldo * 20/100
    }
    else if((saldo >= 0 ) && (saldo <= 200)){
        credito = saldo * 10/100
    }
    else{
        document.getElementById("credito").value = "Saldo não pode ser negativo"
        return
    }
    document.getElementById("credito").innerHTML = 'Saldo e crédito ' + saldo + credito
}