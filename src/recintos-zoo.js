
// Dicionário contendo os biomas possíveis, não só os dentro do zoológico.
const biomas = {
    1: "savana",
    2: "floresta",
    3: "rio",
    4: "campos",
    5: "deserto",
    6: "tundra",
    7: "taiga"
};

//Declarando os animais que o zoológico tem condições de cuidar e suas especificações.

let animais = [
    {
        animal: "LEAO",
        tamanho: 3,
        bioma: [biomas[1]],
        dieta: "carnivoro",
        familiaDoCanivoro: "felideos"
    },
    {
        animal: "LEOPARDO",
        tamanho: 2,
        bioma: [biomas[1]],
        dieta: "carnivoro",
        familiaDoCanivoro: "felideos"
    },
    {
        animal: "CROCODILO",
        tamanho: 3,
        bioma: [biomas[3]],
        dieta: "carnivoro",
        familiaDoCanivoro: "alligatoridae"
    },
    {
        animal: "MACACO",
        tamanho: 1,
        bioma: [biomas[1], biomas[2]]
    },
    {
        animal: "GAZELA",
        tamanho: 2,
        bioma: [biomas[1]]
    },
    {
        animal: "HIPOPOTAMO",
        tamanho: 4,
        bioma: [biomas[1], biomas[3]]
    }
];

//Recintos com o seu respectivo bioma e habitantes

var recintosDoZoologico = [
    {
        numero: 1,
        bioma: [biomas[1]],
        espacoTotal: 10,
        animaisNoRecinto: [animais[3],animais[3],animais[3]],
    },
    {
        numero: 2,
        bioma: [biomas[2]],
        espacoTotal: 5,
        animaisNoRecinto: [],
    },
    {
        numero: 3,
        bioma: [biomas[1],biomas[3]],
        espacoTotal: 7,
        animaisNoRecinto: [animais[4]],
    },
    {
        numero: 4,
        bioma: [biomas[3]],
        espacoTotal: 8,
        animaisNoRecinto: [],
    },
    {
        numero: 5,
        bioma: [biomas[1]],
        espacoTotal: 9,
        animaisNoRecinto: [animais[1]]
    }
];

// análise para criar propriedades únicas para cada recinto
// dependendo do indivíduo que cada um comporta

var animaisPorRecinto = [];
var capacidadeOcupada = [];

// isolando os animais de objeto recinto para variável de array
for (let recinto of recintosDoZoologico){
    animaisPorRecinto.push(recinto['animaisNoRecinto']);
}

// laço de repetição aninhado que itera sobre cada animal no recinto para poder definir o
// tamanho disponível no recinto para receber novos animais
for (let i = 0; i < animaisPorRecinto.length; i++ ){

        // atribuindo zeros ao array capacidadeOcupada para ele não ficar vazio
        // e não retornar NaN quando eu executar os cálculos
    for (let a = 0; a < animaisPorRecinto[i].length; a++ ){
        if (capacidadeOcupada[i] == undefined){
            capacidadeOcupada[i] = 0;
        }
        capacidadeOcupada[i] = capacidadeOcupada[i] + animaisPorRecinto[i][a]['tamanho'];
           // adicionando a família do animal ao recinto (famílias de carnívoros diferentes tendem a rivalizar)
        if(animaisPorRecinto[i][a]['dieta'] == 'carnivoro' && animaisPorRecinto[i][a]['familiaDoCanivoro'] == 'felideos'){
            recintosDoZoologico[i].dieta = animaisPorRecinto[i][a]['dieta'];
            recintosDoZoologico[i].familia = animaisPorRecinto[i][a]['familiaDoCanivoro'];
        } else if(animaisPorRecinto[i][a]['dieta'] == 'carnivoro' && animaisPorRecinto[i][a]['familiaDoCanivoro'] == 'alligatoridae'){
            recintosDoZoologico[i].dieta = animaisPorRecinto[i][a]['dieta'];
            recintosDoZoologico[i].familia = animaisPorRecinto[i][a]['familiaDoCanivoro'];
        }
    }
} 
// laço para adicionar a nova propriedade espaçoLivre aos objetos recintosDoZoológico do zoológico
for (let recinto = 0; recinto < recintosDoZoologico.length; recinto++){
    // se o recinto não tem nenhum animal o valor retorna como vazio ou undefined
    // tratamento para um dieta número, já que ele vai guardar um dado numérico
    if(capacidadeOcupada[recinto] == undefined){
        capacidadeOcupada[recinto] = 0;
    }
    recintosDoZoologico[recinto].espacoLivre = recintosDoZoologico[recinto]['espacoTotal'] - capacidadeOcupada[recinto]
}

class RecintosZoo {

    analisaRecintos(animal, quantidade) {

        var recintosViaveis = [];
        var habitats = [];
        var especiesDiferentes = [];
        var dietaDoAnimal;
        var tamanhoDosAnimais;

        //verifica se o animal adicionado ao parametro animal da função
        //é igual a algum animal que o zoologico aceita no momento
        let podeSerTratado = animais.some(animais => animais.animal == animal);
    
        if (podeSerTratado == false) {
            return {erro: "Animal inválido"};
        } else if (podeSerTratado == true) {
            if (quantidade < 1) {
                return {erro: "Quantidade inválida"};
            }
            // verifica se o animal adicionado ao parâmetro animal da função
            // é igual a algum animal que o zoológico aceita no momento
            if (animal == 'LEAO') {
                animal = animais[0];
                tamanhoDosAnimais = animal['tamanho'] * quantidade;
                habitats = animal['bioma'];
                dietaDoAnimal = animal['dieta'];
            }
            if (animal == 'LEOPARDO') {
                animal = animais[1];
                tamanhoDosAnimais = animal['tamanho'] * quantidade;
                habitats = animal['bioma'];
                dietaDoAnimal = animal['dieta'];
            }
            if (animal == 'CROCODILO') {
                animal = animais[2];
                tamanhoDosAnimais = animal['tamanho'] * quantidade;
                habitats = animal['bioma'];
                dietaDoAnimal = animal['dieta'];
            }
            if (animal == 'MACACO') {
                animal = animais[3];
                tamanhoDosAnimais = animal['tamanho'] * quantidade;
                habitats = animal['bioma'];
                dietaDoAnimal = animal['dieta'];
            }
            if (animal == 'GAZELA') {
                animal = animais[4];
                tamanhoDosAnimais = animal['tamanho'] * quantidade;
                habitats = animal['bioma'];
                dietaDoAnimal = animal['dieta'];
            }
            if (animal == 'HIPOPOTAMO') {
                animal = animais[5];
                tamanhoDosAnimais = animal['tamanho'] * quantidade;
                habitats = animal['bioma'];
                dietaDoAnimal = animal['dieta'];
            }
    
            // esses laços aninhados definem para qual recinto cada animal vai
            // de acordo com o exigido de cada um
            for (let i = 0; i < recintosDoZoologico.length; i++) {
                // verifica qual dos 5 recintos tem espaço disponível para a quantidade informada
                if (recintosDoZoologico[i]['espacoLivre'] > tamanhoDosAnimais) {
                   // itera sobre cada bioma do Recinto
                    for (let a = 0; a < recintosDoZoologico[i]['bioma'].length; a++) {
                        // itera sobre cada bioma do Animal
                        for (let b = 0; b < habitats.length; b++) {
                            // essa comparação verifica se os dois laços acima são iguais
                            // se a dieta do animal é a mesma que a do recinto
                            // ou se o tem todo o espaço livre (se for ocupado e a dieta for carnívora ele procura um vazio)
                            if (recintosDoZoologico[i]['bioma'][a] == habitats[b] && (dietaDoAnimal == recintosDoZoologico[i]['dieta'] || recintosDoZoologico[i]['espacoLivre'] - recintosDoZoologico[i]['espacoTotal'] == 0)) {
                                // se o recinto é compatível adiciono a quantidade de animais especificada ao recinto
                                for (let c = 0; c < quantidade; c++) {
                                    // Macaco não vive sozinho, se tem algum animal no recinto adiciona macaco,
                                    // ou se forem dois macacos adiciona macaco
                                    // se não for macaco, só adiciona
                                    if (recintosDoZoologico[i]['animaisNoRecinto'].length != 0 || animal['animal'] == "MACACO" && tamanhoDosAnimais > 1) {
                                        recintosDoZoologico[i]['animaisNoRecinto'].push(animal);
                                    } else {
                                        recintosDoZoologico[i]['animaisNoRecinto'].push(animal);
                                    }
                                }
                                // se o recinto tem mais de uma espécie tira um espaço adicional, caso não se
                                // for vazio não tira nada, caso contrário tira só o espaço que o animal ocupa
                                especiesDiferentes[i] = recintosDoZoologico[i]['animaisNoRecinto'].some(elemento => elemento.animal != animal['animal']);
                                if (especiesDiferentes[i] == true) {
                                    recintosViaveis.push(`Recinto ${recintosDoZoologico[i]['numero']} (espaço livre: ${recintosDoZoologico[i]['espacoLivre'] - tamanhoDosAnimais - 1} total: ${recintosDoZoologico[i]['espacoTotal']})`);
                                } else if (recintosDoZoologico[i]['animaisNoRecinto'].length == 0) {
                                    recintosViaveis.push(`Recinto ${recintosDoZoologico[i]['numero']} (espaço livre: ${recintosDoZoologico[i]['espacoLivre']} total: ${recintosDoZoologico[i]['espacoTotal']})`);
                                } else {
                                    recintosViaveis.push(`Recinto ${recintosDoZoologico[i]['numero']} (espaço livre: ${recintosDoZoologico[i]['espacoLivre'] - tamanhoDosAnimais} total: ${recintosDoZoologico[i]['espacoTotal']})`);
                                }
                            }
                        }
                    }
                } else {
                    return {erro: "Não há recinto viável"}
                }
                
            }
            return {recintosViaveis: recintosViaveis}
        }
    }
}


export { RecintosZoo as RecintosZoo };
