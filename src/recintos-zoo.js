
const biomas = {
    1: "savana",
    2: "floresta",
    3: "rio",
    4: "campos",
    5: "deserto",
    6: "tundra",
    7: "taiga"
}

const animais = [
    {
        animal: "LEAO",
        tamanho: 3,
        bioma: biomas[1],
        tipo: "carnivoro"
    },
    {
        animal: "LEOPARDO",
        tamanho: 2,
        bioma: biomas[1],
        tipo: "carnivoro"
    },
    {
        animal: "CROCODILO",
        tamanho: 3,
        bioma: biomas[3],
        tipo: "carnivoro"
    },
    {
        animal: "MACACO",
        tamanho: 1,
        bioma: [biomas[1], biomas[2]]
    },
    {
        animal: "GAZELA",
        tamanho: 2,
        bioma: biomas[1]
    },
    {
        animal: "HIPOPOTAMO",
        tamanho: 4,
        bioma: [biomas[1], biomas[3]]
    }
];


let recintosAtuais = [
    {
        numero: 1,
        bioma: [biomas[1]],
        espacoTotal: 10,
        animaisExistentes: [animais[3],animais[3],animais[3]],
    },
    {
        numero: 2,
        bioma: [biomas[2]],
        espacoTotal: 5,
        animaisExistentes: [],
    },
    {
        numero: 3,
        bioma: [biomas[1],biomas[3]],
        espacoTotal: 7,
        animaisExistentes: [animais[4]],
    },
    {
        numero: 4,
        bioma: [biomas[3]],
        espacoTotal: 8,
        animaisExistentes: [],
    },
    {
        numero: 5,
        bioma: [biomas[1]],
        espacoTotal: 9,
        animaisExistentes: [animais[1]]
    }
]

let todosAnimaisDoRecinto = []
let espacoOcupado = []

for (let recinto of recintosAtuais){
    todosAnimaisDoRecinto.push(recinto['animaisExistentes'])
}
for (let i = 0; i < todosAnimaisDoRecinto.length; i++ ){
    for (let a = 0; a < todosAnimaisDoRecinto[i].length; a++ ){
        if (espacoOcupado[i] == undefined){
            espacoOcupado[i] = 0;
        }
        espacoOcupado[i] = espacoOcupado[i] + todosAnimaisDoRecinto[i][a]['tamanho']
        if(todosAnimaisDoRecinto[i][a]['tipo'] == 'carnivoro'){
            recintosAtuais[i].temCarnivoro = todosAnimaisDoRecinto[i][a]['tipo']
        }
    }
} 
for (let recinto = 0; recinto < recintosAtuais.length; recinto++){
    if(espacoOcupado[recinto] == undefined){
        espacoOcupado[recinto] = 0
    }
    recintosAtuais[recinto].espacoLivre = recintosAtuais[recinto]['espacoTotal'] - espacoOcupado[recinto]
}

class RecintosZoo {

    analisaRecintos(animal, quantidade) {

        let recintosViaveis = [];
        let biomasDoAnimal = [];
        let podeSerTratado = animais.some(animais => animais.animal == animal);
        
        if (podeSerTratado == false) {
            return { erro:"Animal inválido"}
        } else if (podeSerTratado == true) {
            if (quantidade < 1) {
                return { erro: "Quantidade inválida"}
            } 
            if (animal == 'LEAO') {
                animal = animais[0]
                var tamanhoDosAnimais = animal['tamanho'] * quantidade
                biomasDoAnimal = animal['bioma']
                var tipoDoAnimal =  animal['tipo']
            }
            if (animal == 'LEOPARDO') {
                animal = animais[1]
                tamanhoDosAnimais = animal['tamanho'] * quantidade
                biomasDoAnimal = animal['bioma']
                tipoDoAnimal =  animal['tipo']
            }
            if (animal == 'CROCODILO') {
                animal = animais[2]
                tamanhoDosAnimais = animal['tamanho'] * quantidade
                biomasDoAnimal = animal['bioma']
                tipoDoAnimal =  animal['tipo']
            }
            if (animal == 'MACACO') {
                animal = animais[3]
                tamanhoDosAnimais = animal['tamanho'] * quantidade
                biomasDoAnimal = animal['bioma']
                tipoDoAnimal =  animal['tipo']
            }
            if (animal == 'GAZELA') {
                animal = animais[4]
                tamanhoDosAnimais = animal['tamanho'] * quantidade
                biomasDoAnimal = animal['bioma']
                tipoDoAnimal =  animal['tipo']
            }
            if (animal == 'HIPOPOTAMO') {
                animal = animais[5]
                tamanhoDosAnimais = animal['tamanho'] * quantidade
                biomasDoAnimal = animal['bioma']
                tipoDoAnimal =  animal['tipo']
            }
    
            for(let i = 0; i < recintosAtuais.length;i++){
                if(recintosAtuais[i]['espacoLivre'] > tamanhoDosAnimais){
                    for(let a = 0; a < recintosAtuais[i]['bioma'].length; a++){
                        for(let b = 0; b < biomasDoAnimal.length; b++){
                            if(recintosAtuais[i]['bioma'][a] == biomasDoAnimal[b] && tipoDoAnimal == recintosAtuais[i]['temCarnivoro'] ){
                                    recintosViaveis.push(`Recinto ${recintosAtuais[i]['numero']} (espaço livre: ${recintosAtuais[i]['espacoLivre']-quantidade} total: ${recintosAtuais[i]['espacoTotal']})`)
                            }
                        }
                    }
                }else{
                    return { erro:"Não há recinto viável"}
                }
            }
        }
    }
}


export { RecintosZoo as RecintosZoo };
