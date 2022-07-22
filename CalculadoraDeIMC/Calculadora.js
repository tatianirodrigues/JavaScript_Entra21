function calcular(){
    let altura = document.getElementById("altura").value;
    let peso = document.getElementById("peso").value;
        
    if (altura > 0 && peso > 0 ){
        var imc = peso/ (altura * altura);
        let linha = document.createElement("p");
        let mensagem = document.createElement("p");
        linha.appendChild(document.createTextNode("Seu imc e: " + imc));

        if(imc < 18.5){
            mensagem.appendChild(document.createTextNode("Voce esta abaixo do peso!"));
        }
        else if(imc>= 18.5 && imc<= 25){
            mensagem.appendChild(document.createTextNode("Voce esta com o peso normal!"));
        }
        else if(imc>25 && imc<=30){
            mensagem.appendChild(document.createTextNode("Voce esta acima do peso!"));
        }
        else{
            mensagem.appendChild(document.createTextNode("Voce esta obeso!"));
        }
        document.body.appendChild(linha);
        document.body.appendChild(mensagem);
    }
    else{
        alert("Dados inválidos!")
    } 
}


