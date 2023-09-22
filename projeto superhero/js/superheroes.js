// quando ouver o carregamento do meu html. esse dom ele vai fazer isso tlg //
document.addEventListener("DOMContentLoaded", function () {

    var dadosSuperHeroi = {
        "nomeEsquadro": "Esquadrao de herois",
        "cidade": "Brasilia city",
        "formado": 2019,
        "baseSecreta": "taverna do marcos",
        "ativa": true,
        "membros": [
            {
                "nome": "Marcos",
                "idade": 28,
                "identidadeSecreta": "Comentador de código man",
                "poderes": ["Escrever boas linhas de código", "boleiro", "cc"]
            },
            {
                "nome": "Breno",
                "idade": 85,
                "identidadeSecreta": "Bernardo",
                "poderes": ["Jornalismo", "investigador", "injustiçado"]
            },
            {
                "nome": "Suzana perigosa",
                "idade": 21,
                "identidadeSecreta": "CoringaGirl",
                "poderes": ["Jiu-Jtsu", "turismo", "Capoerista"]
            }
        ]
    };

    //Selecionar a lsita de super-heroies onde a gente deseja inserir os membros
    var listaSuperHerois = document.getElementById("superheroes-list")

    //iteração sobre os membros da equipe criando os elementos de lista para cada um
    dadosSuperHeroi.membros.forEach(function (membro) {
        var li = document.createElement("li")
        li.className = "lista-group-item"
        li.innerHTML = `<strong>${membro.nome}</strong> (idade: ${membro.idade},
         Identidade Secreta: ${membro.identidadeSecreta})
         Poderes: ${membro.poderes.join(",")}`   //aqui tem que usar a craze ( ``)
         listaSuperHerois.appendChild(li)
    })

})