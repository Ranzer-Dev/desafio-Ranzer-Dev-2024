const biomas = {
    1: "savana",
    2: "floresta",
    3: "rio"
};

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
        bioma: biomas[1], bioma: biomas[2]
    },
    {
        animal: "GAZELA",
        tamanho: 2,
        bioma: biomas[1]
    },
    {
        animal: "HIPOPOTAMO",
        tamanho: 4,
        bioma: biomas[1], bioma: biomas[3]
    }
];

let recintosAtuais = [
    {
        numero: 1,
        bioma: biomas[1],
        tamanhoTotal: 10,
        animaisExistentens: [animais[3],animais[3],animais[3]],
    },
    {
        numero: 2,
        bioma: biomas[2],
        tamanhoTotal: 5,
        animaisExistentens: [],
    },
    {
        numero: 3,
        bioma: [biomas[1],biomas[3]],
        tamanhoTotal: 7,
        animaisExistentens: [animais[5]],
    },
    {
        numero: 4,
        bioma: biomas[3],
        tamanhoTotal: 8,
        animaisExistentens: [],
    },
    {
        numero: 5,
        bioma: biomas[1],
        tamanhoTotal: 9,
        animaisExistentens: [animais[1]],
    }
];

let todosAnimaisDoRecinto = []
let espacoOcupado = [] 

for ( recinto of recintosAtuais){
    todosAnimaisDoRecinto.push(recinto['animaisExistentes'])
}
for (let i = 0; i < todosAnimaisDoRecinto.length; i++ ){
    for (let a = 0; a < todosAnimaisDoRecinto[i].length; a++ ){
        if (espacoOcupado[i] == undefined){
            espacoOcupado[i] = 0;
        }
        espacoOcupado[i] = espacoOcupado[i] + todosAnimaisDoRecinto[i][a]['tamanho']
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

        let podeSerTratado = animais.some(animais => animais.animal == animal);

        if (podeSerTratado == false) {
            return { erro: "Animal inválido" }
        }
        if (podeSerTratado == true) {
            if (quantidade < 1) {
                return { erro: "Quantidade inválida" };
            }
        } 
        if (animal == "MACACO") {
            animal = animais[3]
            var tamanho1 = animal['tamanho'] * quantidade
            for (let i = 0; i < recintosAtuais.length; i++) {
                if (recintosAtuais[i]['espacoLivre'] < tamanho1) {
                    return { erro: "Não há recinto viável" }
                }
            }
        }
    }
}


export { RecintosZoo as RecintosZoo };
