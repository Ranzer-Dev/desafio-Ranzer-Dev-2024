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

class RecintosZoo {

    analisaRecintos(animal, quantidade) {
    
            let podeSerTratado = animais.some(animais => animais.animal == animal);
                
            if (podeSerTratado == false) {
                return { erro:"Animal inválido"};
            } else if (podeSerTratado == true) {
                if (quantidade < 1) {
                    return { erro: "Quantidade inválida" }
                }
                if (animal == 'Macaco' && quantidade > 0) {
                    animal = animais[3]
                    tamanho = animal['tamanho'] * quantidade
                        if (recintosAtuais[0]['bioma'] == 'savana' && tamanho <= espacoDisponivel1) {
                            for(let i = 1; i <= quantidade; i++){
                            recintosAtuais[0]['animaisExistentes'].push(animal)
                            }
                        } else {
                            return { erro: "Não há recinto viável"}
                        }
                        
                }
            }
            let ocupacaoAtual = []
            let espacoOcupado1 = 0
            let espacoDisponivel1 = 0
            let animaisDiferentes1 = []
            let quantidadeDeAnimaisDiferentes1 = 0
        
                for (let i = 0; i < recintosAtuais.length; i++) {
                    ocupacaoAtual[i] = recintosAtuais[i]['animaisExistentes']
                }
                for (let n = 0; n < ocupacaoAtual[0].length;n++) {
                    animaisDiferentes1[n] = ocupacaoAtual[0][n]['animal']
                    espacoOcupado1 = Number(espacoOcupado1+(ocupacaoAtual[0][n]['tamanho']))
                }   
                quantidadeDeAnimaisDiferentes1 = Array.from(new Set(animaisDiferentes1)).length-1
                if(quantidadeDeAnimaisDiferentes1 != 0) {
                    espacoDisponivel1 = recintosAtuais[0]['tamanhoTotal'] - espacoOcupado1 -1
                } else {
                    espacoDisponivel1 = recintosAtuais[0]['tamanhoTotal'] - espacoOcupado1
                }
    }
}

export { RecintosZoo as RecintosZoo };
