
function getEstados(){
    const cep = $("input#cep").val();
    $.ajax({
        type: "GET",
        url:"https://servicodados.ibge.gov.br/api/v1/localidades/estados",
        dataType: "json",

        success:function(data){
            let option = '<option value="">Selecione um estado</option>'
            $.each(data, function(i,value){
                option += ` <option value="${value.sigla}" id="${value.id}">${value.nome}</option> `
            });

            $(option).appendTo("#estado");
        },
        error:function(){
            alert("Ops! Algo deu errado");
        },
        beforeSend:function(){
           
        }
    })
}