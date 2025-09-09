const listaDeCompras = { // Isto é um JSON = Javascript, Object, Notation
    "nome": "Lista De Compras",
    "data": "21/8/2025",
    "itens": [
        {"item": "maçã",
         "quantidade":5
        },
        {"item": "pão",
         "quantidade":2
        }
    
    ]
}

//Criar um objeto perfil de usuario com nome, idade, email e hobbies, sendo um hobbie pra cada dia da semana
const perfil = {
    "nome": "chaves",
    "idade": "23",
    "email": "Carloseduardo@gmail.com",
    "hobbies":[
        {"hobbie": "Jogar de Bola",
         "dia": "Domingo"
        },
        {"hobbie": "Ir ao Museu",
         "dia": "Segunda"
        },
        {"hobbie": "Gravar Live",
         "dia": "Terça"
        },
        {"hobbie": "Assistir Filme",
         "dia": "Quarta"
        },
        {"hobbie": "Fazer uma Musica",
         "dia": "Quinta"
        },
        {"hobbie": "Contar Piadas",
         "dia": "Sexta"
        },
        {"hobbie": "Maratonar alguma Série",
         "dia": "Sabado"
        }
    ]
}

console.log(perfil.nome)
console.log(perfil.idade)
console.log(perfil.email)
console.log(perfil.hobbies[0].hobbie)
console.log(perfil.hobbies[4].dia)

const catalogodelivro ={
    "livros":[
    {
        "titulo": "A Arte da Travesura",
        "autor": "Charles Chevalier",
        "ano publicado": "1995",
        "disponivel": true
    },
    {
        "titulo": "IMPERADØR",
        "autor": "Lhz",
        "ano publicado": "2025",
        "disponivel": true
    },
    {
        "titulo": "JoJo Part7",
        "autor": "Hioriko Araki",
        "ano publicado": "2004",
        "disponivel": false
    }
]}
console.log(catalogodelivro.livros[0].autor)
fetch("htpps://pokeapi.co/api/v2/pokemon/25")
.then(response => {
    return response.json()
})