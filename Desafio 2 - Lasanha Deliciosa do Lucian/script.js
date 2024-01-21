// O número de minutos necessários para preparar uma única camada.
const EXPECTED_MINUTES_IN_OVEN = 40;

/* Determina o número de minutos que a lasanha ainda precisa permanecer no
forno para ser preparada adequadamente. */
function remainingMinutesInOven(actualMinutesInOven) {
    return EXPECTED_MINUTES_IN_OVEN - actualMinutesInOven;
}

console.log(`Tempo restante no forno: ${remainingMinutesInOven(30)} minutos`);

// Dado um número de camadas, determina o tempo total de preparo.
function preparationTimeInMinutes(numberOfLayers) {
    return numberOfLayers * 2;
}

console.log(`Tempo de preparo: ${preparationTimeInMinutes(2)} minutos`);

/* Calcula o tempo total de trabalho. Ou seja, o tempo para preparar todas as camadas
de lasanha e o tempo já gasto no forno. */
function totalTimeInMinutes(numberOfLayers, actualMinutesInOven) {
    const prepTime = preparationTimeInMinutes(numberOfLayers);
    return prepTime + actualMinutesInOven;
}

console.log(`Tempo total de trabalho: ${totalTimeInMinutes(1, 35)} minutos`);
