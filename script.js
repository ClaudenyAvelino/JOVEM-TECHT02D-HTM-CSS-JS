// Espera o DOM carregar antes de rodar o script
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector(".formulario-contato");

    // Escuta o evento de envio do formulário
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // impede o reload da página

        // Captura os valores dos campos
        const primeiroNome = document.getElementById("fname").value;
        const sobrenome = document.getElementById("lname").value;

        // Exemplo de ação: mostrar uma mensagem na tela
        const mensagem = `Olá, ${primeiroNome} ${sobrenome}! Obrigado por entrar em contato.`;

        // Exibe a mensagem abaixo do formulário
        const mensagemDiv = document.createElement("p");
        mensagemDiv.textContent = mensagem;
        mensagemDiv.style.color = "#22D4FD";
        mensagemDiv.style.fontFamily = "Montserrat, sans-serif";
        mensagemDiv.style.marginTop = "20px";

        // Remove mensagens anteriores (opcional)
        const antiga = form.querySelector("p");
        if (antiga) antiga.remove();

        form.appendChild(mensagemDiv);

        // (opcional) limpar campos
        form.reset();
    });
});
