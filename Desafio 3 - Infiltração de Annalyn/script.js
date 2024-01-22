// O ataque rápido está disponível quando o cavaleiro está dormindo.
function canExecuteFastAttack(knightIsAwake) {
    return !knightIsAwake
}
canExecuteFastAttack()

// Um espião útil captura informações, o que eles não podem fazer se todos estiverem dormindo
function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
    return knightIsAwake || archerIsAwake || prisonerIsAwake
}

canSpy()

// Você será pego pelo arqueiro se sinalizar enquanto eles estiverem acordados.
function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
    return !archerIsAwake && prisonerIsAwake
}

canSignalPrisoner()

// A etapa final no plano: libertar a melhor amiga de Annalyn.
function canFreePrisoner(knightIsAwake, archerIsAwake, prisonerIsAwake, petDogIsPresent,) {
    if(petDogIsPresent){
        return !archerIsAwake
    }
    return !knightIsAwake && !archerIsAwake && prisonerIsAwake
}

canFreePrisoner()