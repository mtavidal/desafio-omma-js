
const form = document.querySelector("form");

const painel = document.querySelector(".painel-receitas");
const articleReceitas = document.createElement("article");


form.addEventListener ("submit", (evento) => {
    evento.preventDefault();

    const titulo = document.querySelector("#titulo").value;
    const dificuldade = document.querySelector("#dificuldade").value;
    const ingredientes = document.querySelector("#ingredientes").value;
    const preparo = document.querySelector("#preparo").value;
    const link = document.querySelector("#link").value;
    const isVegano = document.querySelector("#vegano-false");

    const itemReceita = `
    <div>
        <ul>
            <li>Título: ${titulo}</li>
            <li>Dificuldade: ${dificuldade}</li>
            <li>Ingredientes: ${ingredientes}</li>
            <li>Preparo: ${preparo}</li>
            <li>Link: ${link}</li>
            <li> ${isVegano.checked ? "Não é vegano" : "é vegano"}</li>
        </ul>
    </div>
    <hr>
    `;

    articleReceitas.innerHTML += `${itemReceita}`;
    painel.append(articleReceitas);

})