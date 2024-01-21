# Desafio 2 - Lasanha Deliciosa do Lucian

Este é um exercício simples em JavaScript para calcular o tempo total gasto na preparação de uma lasanha, levando em consideração o tempo de forno esperado.

## TAREFAS:

### 1. Defina o tempo esperado de forno em minutos
Defina a `EXPECTED_MINUTES_IN_OVEN` constante que representa quantos minutos a lasanha deve ficar no forno. De acordo com o livro de culinária, o tempo esperado de forno em minutos é '40'.

### 2. Calcule o tempo restante do forno em minutos
Implemente a função `remainingTimeInOven` que leva como parâmetro `remainingMinutesInOven`, os minutos reais que a lasanha esteve no forno, e retorna quantos minutos a lasanha ainda tem que permanecer no forno, com base no tempo de forno esperado.

@param {number} actualMinutesInOven
@returns {number} o número de minutos restantes

### 3. Calcule o tempo de preparo em minutos
Implemente a função `preparationTimeInMinutes` que leva como parâmetro `numberOfLayers`, o número de camadas que você adicionou à lasanha, e retorna quantos minutos você gastou preparando a lasanha, assumindo que cada camada leva 2 minutos para ser preparada.

@param {number} numberOfLayers
@returns {number} o tempo total de preparo

### 4. Calcule o tempo total de trabalho em minutos
Implemente a função `totalTimeInMinutes` que aceita dois parâmetros: `numberOfLayers` e `actualMinutesInOven`. A função deve retornar quantos minutos no total você trabalhou no cozimento da lasanha, que é a soma do tempo de preparo em minutos e o tempo em minutos que a lasanha ficou no forno no momento.

@param {number} numberOfLayers
@param {number} actualMinutesInOven
@returns {number} o tempo total de trabalho
