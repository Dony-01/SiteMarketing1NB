
document.addEventListener("DOMContentLoaded", function () {
    // Array com os carros disponíveis
    const carros = [
        { nome: "PRISMA", imagem: "img/PrismaNovo.jpeg", descricao: "Descrição do veículo 1" },
        { nome: "GOL", imagem: "img/SANDERO WEL.jpeg", descricao: "Descrição do veículo 2" },
        { nome: "Carro 3", imagem: "img/UNO MILLE RADAR.jpeg", descricao: "Descrição do veículo 3" },
        { nome: "Carro 4", imagem: "img/GOL G4 2014.jpeg", descricao: "Descrição do veículo 4" },
        { nome: "Carro 5", imagem: "img/carro.png", descricao: "Descrição do veículo 5" },
        { nome: "Carro 6", imagem: "img/carro.png", descricao: "Descrição do veículo 6" },
        { nome: "Carro 7", imagem: "img/carro.png", descricao: "Descrição do veículo 7" },
        { nome: "Carro 8", imagem: "img/carro.png", descricao: "Descrição do veículo 8" },
        { nome: "Carro 9", imagem: "img/carro.png", descricao: "Descrição do veículo 9" },
        { nome: "Carro 10", imagem: "img/carro.png", descricao: "Descrição do veículo 10" },
        { nome: "Carro 11", imagem: "img/carro.png", descricao: "Descrição do veículo 11" },
        { nome: "Carro 12", imagem: "img/carro.png", descricao: "Descrição do veículo 12" },
    ]
    // Seleciona a seção onde os carros serão inseridos
    const catalogo = document.getElementById("catalogo");

    // Função para criar e adicionar os carros dinamicamente
    function adicionarCarros() {
        carros.forEach(carro => {
            const div = document.createElement("div");
            div.classList.add("carro");
            div.innerHTML = `
                <img src="${carro.imagem}" alt="${carro.nome}">
                <h3>${carro.nome}</h3>
                <p>${carro.descricao}</p>
            `;
            catalogo.appendChild(div);
        });
    }

    // Chama a função para adicionar os carros
    adicionarCarros();
});
