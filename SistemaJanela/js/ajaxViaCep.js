
function submitCep(){
    const cep = $("input#cep").val();
    $.ajax({
        type: "GET",
        url:"https://viacep.com.br/ws/" +  cep + "/json/",
        dataType: "json",
        
        //url: "https://localhost:8080/api/vacina"

        success:function(data){
            //console.log(data);
            const elemento = '<div>' + 
                             '<span> logradouro:' + data.logradouro + '</span>' + 
                             '</div>'
                            
            $(elemento).appendTo('#janela-conteudo');
        },
        error:function(){
            alert("Ops! Algo deu errado");
        },
        beforeSend:function(){
           
        }
    })
}