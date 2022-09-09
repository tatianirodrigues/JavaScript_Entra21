function start(){
    menu = "#menu-ativo";
    if($(menu).is(":visible")){
       esconderElemento(menu);
    }else{
        mostrarElemento(menu);
    }
}
function esconderElemento(elemento){
    $(elemento).hide();
}
function mostrarElemento(elemento){
    $(elemento).show();
}

function abrirJanela(elemento){
    if($(elemento).hasClass("tabuada")){
        $("#janela").find("#title").text("tabuada");
    }
    if($(elemento).hasClass("imc")){
        $("#janela").find("#title").text("imc");
    }
    if($(elemento).hasClass("calculadora")){
        $("#janela").find("#title").text("calculadora");
    }
    if($(elemento).hasClass("ajax")){
        $("#janela").find("#title").text("Exemplo ajax");
        const form = '<label> CEP: </label>' + 
                    '<input type="text" id="cep">' + 
                    '<button id="enviar_cep">Enviar</buttton>';
        $(form).appendTo("#janela-conteudo");

    }
    if($(elemento).hasClass("ibge")){
        $("#janela").find("#title").text("Exemplo IBGE");

        const select = '<label>Selecionde um estado: </label>'+ 
                        '<select id="estado"></select>';

        
        $(select).appendTo("#janela-conteudo"); 

        getEstados();
                 
    }
    mostrarElemento("#janela");
}




