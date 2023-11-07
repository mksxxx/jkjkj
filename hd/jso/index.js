function buscaCep1(){
    let cep = document.getElementById('cep1').value;
    if(cep !== ""){
        let url = "https://brasilapi.com.br/api/cep/v1/" + cep;
        let req = new XMLHttpRequest();
        req.open("GET", url);
        req.send();

        //resposta req

        req.onload = function() {
            if(req.status === 200){
                let endereco = JSON.parse(req.response);
                document.getElementById("rua1").value = endereco.street;
                document.getElementById("bairro1").value = endereco.neighborhood;
                document.getElementById("cdd1").value = endereco.city;
                document.getElementById("estado1").value = endereco.state;
            }
            else if(req.status === 404){
                alert("CEP inválido");
            }
            else{
                alert("Erro ao fazer a requisição");
            }
        }
    }
}

window.onload = function(){
    let txtcep = document.getElementById("cep1");
    txtcep.addEventListener("blur", buscaCep1);
}