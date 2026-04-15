//função para verificar idade 
function verificaridade() {
    let idade = parseInt(document.getElementById("idade").value);
    getElementById9(("idade").value);
    if (idade < 18) {
        alert("para viajar sozinho, é necessario ser maior de idade");
    }
}
// função para a partir do cep, buscar o endereço do usuario.
async function buscarCep(){
     //pegar o valor digitado no input do CEP
     let cep = document.getElementById("cep").value;
     cep = cep.replace(/\D/g, "");

     //validar se o CEP tem 8 numeros
     if(cep.length !== 8){
        document.getElementById("mensagem").textContent =
        "Cep inválido";
        return;
     }

     try{
        //faz a requisição para a api do viaCEP
        let resposta = await fetch('https://viacep.com.br/ws/${cep}/json/');

        let dados = await resposta.json();

        //verificar se o cep não foi encontrado

        if(dados.erro){
            document.getElementById("mensagem").textContent ="cep não encontrado";
        }

        //preencher os campos do formulario:

        document.getElementById("logradouro").value = dados.logradouro;
        document.getElementById("Bairro").value = dados.bairro;
        document.getElementById("cidade").value = dados.localidade;
        document.getElementById("UF").value = dados.UF;

        document.getElementById("mensagem").textContent ="endereço encontrado com sucesso";
    }catch (erro){
        document.getElementById("mensagem").textContent = "erro ao buscar cep"
    }

}
function enviarFormulario(event) {
    //a linha abaixo impede o recarregamento da pagina
    event.preventDefault();

    let nome = document.getElementById("nome").value;
    let idade = document.getElementById("idade").value;
    let email = document.getElementById("email").value;
    let telefone = document.getElementById("telefone").value;
    let destino = document.getElementById("destino").value;
    let dtIda = document.getElementById("dataIda").value;
    let dtVolta = document.getElementById("dataVolta").value;

    //selecionar uma div para exibir o resultado
    let resultado = document.getElementById("resultado")

    //exibindo na tela
    resultado.innerHTML = `
    <div class="card p-3 mt-3>"
        <h4> dados do cadastro </h4>
            <p><strong>nome:</strong> ${nome}</p>
            <p><strong>idade:</strong> ${idade}</p>
            <p><strong>email:</strong> ${email}</p>
            <p><strong>telefone:</strong> ${telefone}</p>
            <p><strong>destino:</strong> ${destino}</p>
            <p><strong>dtIda:</strong> ${dtIda}</p>
            <p><strong>dtVolta:</strong> ${dtVolta}</p>
    `;
}