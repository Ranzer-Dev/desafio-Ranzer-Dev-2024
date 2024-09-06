class RecintosZoo {

    biomas = {
        1: "savana",
        2: "floresta",
        3: "rio"
    };

    animais = [
        {
            animal: "Leão",
            tamanho: 3,
            bioma: biomas[1]
        },
        {
            animal: "Leopardo",
            tamanho: 2,
            bioma: biomas[1]
        },
        {
            animal: "Crocodilo",
            tamanho: 3,
            bioma: biomas[3]
        },
        {
            animal: "Macaco",
            tamanho: 1,
            bioma: [biomas[1], biomas[2]]
        },
        {
            animal: "Gazela",
            tamanho: 2,
            bioma: biomas[1]
        },
        {
            animal: "Hipopotamo",
            tamanho: 4,
            bioma: [biomas[1], biomas[3]]
        }
    ];

    recintosAtuais = [
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

    analisaRecintos(animal, quantidade) {
        for (var i = 0; i <= animais.length; i++){

            if (animais[i]['animal'] == animal){
                console.log(animal);
            } else {
                return {erro: "Animal inválido"};
            }
        }
    }
}

export { RecintosZoo as RecintosZoo };
