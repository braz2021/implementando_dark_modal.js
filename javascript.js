let listaCarro = [
    {
        "nome": "Drako GTE",
        "img": "img/drako-gte.webp",
        "descrição": " o drago gte e um sedan"
    },
    {
        "nome": "Tomaso",
        "img": "img/tomaso.webp",
        "descrição": " o De Tomaso p72"
    },
    {
        "nome": "Ferrari laFerrari",
        "img": "img/ferrari-laferrari.webp",
        "descrição": " ferrari-f150"
    },
    {
        "nome": "Pagani Huayra",
        "img": "img/pagani-huayra.webp",
        "descrição": " pagani-huayra.webp"
    },
    {
        "nome": "Mclaren Elva",
        "img": "img/mclaren-elva.webp",
        "descrição": " mclaren-elva"
    },
    {
        "nome": "Czinger 21C",
        "img": "img/czinger-21c.webp",
        "descrição": " Czinger 21C"
    }

]
listaCarro.map((carro, posicao) => {
    let cardCarro = document.getElementById("cards");
    cardCarro.innerHTML += `
        <div class="col-md-4">
            <div class="card h-100 m-4">
                <img src="${carro.img}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${carro.nome}</h5>
                    <a href="#" class="btn btn-secondary" onClick="zoomImg('${posicao}')"><i class="bi bi-zoom-in"></i></a>
                </div>
            </div>
        </div>
    `
})
function zoomImg(posicao){
    let  carroSelecionado = listaCarro[posicao];
    document.getElementById("nomeCarro").innerHTML = carroSelecionado.nome;
    document.getElementById("descricaoCarro").innerHTML = carroSelecionado.descrição;
    document.getElementById("imgModal").src = carroSelecionado.img;

    new bootstrap.Modal('#zoomImg').show();
}

function alterarTemaSite(){
    let tema = document.querySelector("html").getAttribute("data-bs-theme");
    if(tema === "dark"){
        document.querySelector("html").setAttribute("data-bs-theme","ligth");
        document.querySelector("#alterarTemaSite").innerHTML = `<i class="bi bi-moon-fill"></i>`
    }else{
        document.querySelector("html").setAttribute("data-bs-theme","dark");
        document.querySelector("#alterarTemaSite").innerHTML = `<i class="bi bi-brightness-high-fill"></i>`
    }
}