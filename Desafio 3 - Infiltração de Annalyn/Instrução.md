# Desafio 3 - Infiltração de Annalyn
Neste exercício, você estará implementando a lógica da missão para um novo jogo de RPG que um amigo está desenvolvendo. A personagem principal do jogo é Annalyn, uma garota corajosa com um cachorro feroz e leal. Infelizmente, um desastre acontece, pois sua melhor amiga foi sequestrada enquanto procurava por frutas na floresta. Annalyn tentará encontrar e libertar sua melhor amiga, opcionalmente levando seu cachorro com ela nesta missão.

Após algum tempo seguindo o rastro de sua melhor amiga, ela encontra o acampamento onde sua melhor amiga está aprisionada. Acontece que há dois sequestradores: um poderoso cavaleiro e um arqueiro astuto.

Ao encontrar os sequestradores, Annalyn considera quais das seguintes ações ela pode realizar:

Tarefa 1: Ataque rápido: um ataque rápido pode ser feito se o cavaleiro estiver dormindo, já que leva tempo para ele vestir sua armadura, então ele estará vulnerável.
Tarefa 2: Espionagem: o grupo pode ser espionado se pelo menos um deles estiver acordado. Caso contrário, espionar seria uma perda de tempo.
Tarefa 3: Sinalizar prisioneiro: o prisioneiro pode ser sinalizado usando sons de pássaros se o prisioneiro estiver acordado e o arqueiro estiver dormindo, pois os arqueiros são treinados em sinais de pássaros, então eles poderiam interceptar a mensagem.
Tarefa 4: Liberar prisioneiro: Annalyn pode tentar se infiltrar no acampamento para libertar o prisioneiro. Isso é arriscado e só pode ter sucesso de duas maneiras:
Se Annalyn estiver com seu cachorro, ela pode resgatar o prisioneiro se o arqueiro estiver dormindo. O cavaleiro tem medo do cachorro, e o arqueiro não terá tempo para se preparar antes que Annalyn e o prisioneiro possam escapar.
Se Annalyn não estiver com seu cachorro, ela e o prisioneiro precisam ser muito furtivos! Annalyn pode libertar o prisioneiro se o prisioneiro estiver acordado e o cavaleiro e o arqueiro estiverem ambos dormindo, mas se o prisioneiro estiver dormindo, eles não podem ser resgatados: o prisioneiro seria surpreendido pela súbita aparição de Annalyn e acordaria o cavaleiro e o arqueiro.

Você tem quatro tarefas: implementar a lógica para determinar se as ações acima estão disponíveis com base no estado dos três personagens encontrados na floresta e se o cachorro de Annalyn está presente ou não.

## TAREFAS:

### 1. Verifique se a ação 'Ataque Rápido' é possível
#### Teste 1 - Pode executar ataque rápido: acordado
#### Teste 2 - Pode executar ataque rápido: dormindo
Implemente uma função chamada `canExecuteFastAttack` que recebe um valor booleano indicando se o cavaleiro está acordado. Esta função retorna verdadeiro se a ação 'Ataque Rápido' estiver disponível com base no estado do personagem. Caso contrário, retorna falso:

param {boolean} knightIsAwake
@return {boolean} Se você pode ou não executar um ataque rápido.

### 2. Verifique se a ação 'Espionar' é possível
Implemente uma função chamada `canSpy` que recebe três valores booleanos, indicando se o cavaleiro, arqueiro e prisioneiro, respectivamente, estão acordados. A função retorna verdadeiro se a ação 'Espionar' estiver disponível com base no estado dos personagens. Caso contrário, retorna falso:

@param {boolean} knightIsAwake
@param {boolean} archerIsAwake
@param {boolean} prisonerIsAwake
@returns {boolean} Se você pode ou não espionar alguém.

### 3. Verifique se a ação 'Sinalizar Prisioneiro' é possível
Implemente uma função chamada `canSignalPrisoner` que recebe dois valores booleanos, indicando se o arqueiro e o prisioneiro, respectivamente, estão acordados. A função retorna verdadeiro se a ação 'Sinalizar Prisioneiro' estiver disponível com base no estado dos personagens. Caso contrário, retorna falso:

@param {boolean} archerIsAwake
@param {boolean} prisonerIsAwake
@returns {boolean} Se você pode ou não enviar um sinal ao prisioneiro.

### 4. Verifique se a ação 'Prisioneiro Livre' é possível
Implemente uma função chamada `canFreePrisoner` que recebe quatro valores booleanos. Os três primeiros parâmetros indicam se o cavaleiro, arqueiro e prisioneiro, respectivamente, estão acordados. O último parâmetro indica se o cachorro de estimação de Annalyn está presente. A função retorna verdadeiro se a ação 'Liberar Prisioneiro' estiver disponível com base no estado dos personagens e na presença do cachorro de Annalyn. Caso contrário, retorna falso:

@param {boolean} knightIsAwake
@param {boolean} archerIsAwake
@param {boolean} prisonerIsAwake
@param {boolean} petDogIsPresent
@returns {boolean} Se você pode ou não libertar a amiga de Annalyn.


