window.onload = function () {
    alert(
        "Bem-vindo ao melhor evento de Gastronomia dos Donuts! Aqui você vai aprender muito e se deliciar com os melhores donuts do mundo. Clique em OK para explorar nossas atrações e se preparar para um mundo de sabores!"
    );
};

// Validação de formulário
const form = document.querySelector("form");
form.addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio automático

    // Captura os valores dos campos
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const idade = document.getElementById("idade").value;

    // Validação simples

    if (!nome || !email || !telefone || !idade) {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return;
    }

    if (idade < 18) {
        alert("Desculpe, apenas maiores de 18 anos podem se inscrever.");
        return;
    }

    // Exibe uma mensagem de confirmação
    alert(
        `Inscrição efetuada com sucesso, ${nome}! Verifique seu e-mail para mais detalhes.`
    );

    // Aqui você pode permitir o envio
    form.submit();
});

// Alteração dinâmica na página
const dataLimite = document.getElementById("data_limite_insc");
const hoje = new Date();
const dataEvento = new Date("2025-03-12");
const diasRestantes = Math.ceil((dataEvento - hoje) / (1000 * 60 * 60 * 24));

if (diasRestantes > 0) {
    dataLimite.innerText = `Garanta sua vaga! Faltam ${diasRestantes} dias para o fim das inscrições.`;
} else {
    dataLimite.innerText = "As inscrições foram encerradas!";
}
