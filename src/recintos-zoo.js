class RecintosZoo {

    biomas = {
        1: "savana",
        2: "floresta",
        3: "rio"
    }

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
            animaisExistentens: [animais[3],animais[3],animais[3]],
        },
        {
            numero: 1,
            bioma: biomas[1],
            tamanhoTotal: 10,
            animaisExistentens: [animais[3],animais[3],animais[3]],
        },
        {
            numero: 1,
            bioma: biomas[1],
            tamanhoTotal: 10,
            animaisExistentens: [animais[3],animais[3],animais[3]],
        },
        {
            numero: 1,
            bioma: biomas[1],
            tamanhoTotal: 10,
            animaisExistentens: [animais[3],animais[3],animais[3]],
        }
    ]

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
    ]

    analisaRecintos(animal, quantidade) {
    }

}

export { RecintosZoo as RecintosZoo };
