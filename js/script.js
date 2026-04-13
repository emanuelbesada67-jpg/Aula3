//função para verificar idade 
function verificaridade() {
    let idade = parseInt(document.getElementById("idade").value);
    getElementById9(("idade").value);
    if (idade < 18) {
        alert("para viajar sozinho, é necessario ser maior de idade");
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