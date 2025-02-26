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
   document.getElementById("sub").innerText = "O resultado é " + sub 
}