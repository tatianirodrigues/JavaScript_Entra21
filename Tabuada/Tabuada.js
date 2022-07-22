function calcular(){

    //pega o valor do input do formulário
    let tab1 = document.getElementById("tab1").value;
    let tab2 = document.getElementById("tab2").value;

    //validação dos valores caso o primeiro seja menor que o segundo
    if (tab1 < 10 && tab1 > 0 && tab2 < 10 && tab2 > 0){
        if(tab2<tab1){
            let aux =  tab2;
            tab2 = tab1;
            tab1 = aux;
        }
    
        //criar um elemento UL no HTML da pagina 
        const container = document.createElement("ul");
    
        //responsavel por gerenciar quantas vezes vai rodar a tabuada
        do{
            for (let i = 1; i <=10; i++) {
                let linha = document.createElement("li");
                linha.className = "tab" + tab1;
                let resultado = tab1 + "*" + i + " = " + tab1*i;
                linha.appendChild( document.createTextNode(resultado));
                container.appendChild(linha); 
            }
            tab1++;
        }while(tab1<=tab2)
    
        // add o container dentro do body quando chamo a função calcular
        document.body.appendChild(container);//vai add um elemento num elemento pai. ta colocando o container criado ali em cima pra dentro do body
    }
    else{
        alert("Dados inválidos!!!!! Digite um número entre 0 e 9!")
    }

}