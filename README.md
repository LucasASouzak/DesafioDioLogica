Conclusão desafio do Felipão-D.I.O.

Explicação do Código:

Métodos Usados:

    Declaração de Variáveis:
        const: Usado para declarar variáveis ​​constantes (nomeDoHeroi, experienciaDoHeroi) cujos valores não podem ser alterados após a atribuição.
        let: Usado para declarar uma variável (nivelDoHeroi) cujo valor pode ser modificado posteriormente no código.

    Instruções Condicionais:
        if...else if...else: Esta é uma instrução condicional em cadeia que verifica várias condições e executa o bloco de código correspondente se a condição for verdadeira.
            A instrução if verifica se experienciaDoHeroi é menor que 1000. Se sim, atribue "Ferro" a nivelDoHeroi.
            As instruções else if fornecem condições adicionais para determinar o nível com base em faixas de experiência.
            O bloco else final atua como um caso geral para qualquer valor de experiência acima de 10000, atribuindo "Radiante" a nivelDoHeroi.

    Saída do Console:
        console.log(nivelDoHeroi): Esta instrução imprime o valor da variável nivelDoHeroi no console do desenvolvedor do navegador ou no console do Node.js, dependendo do ambiente de execução.

Em essência, o código:

    Define o nome e a experiência do herói.
    Usa uma série de instruções condicionais para determinar o nível do herói com base em seus pontos de experiência, atribuindo valores de nível apropriados ("Ferro", "Prata", etc.) à variável nivelDoHeroi.
    Imprime o nível do herói determinado para o console.

```
//Classificador de nível de herói

// Variável constante para armazenar o nome do herói
const heroName = "Shury"

// Variável constante para armazenar os pontos de experiência do herói
const heroExperience = 13820;

// Variável para armazenar o nível do herói (declarada sem valor inicial)
let heroLevel;

// Instrução condicional para verificar o nível de experiência
if (heroExperience< 1000) {

// Atribui "Ferro" ao nivelDoHeroi se a experiência for inferior a 1000
    heroLevel = "Iron";
}

//semelhante para outras faixas de experiência e atribuições de nível.
else if (heroExperience > 1000 && heroExperience <= 2000){
    heroLevel = "Bronze";
}
else if (heroExperience > 2000 && heroExperience <= 5000){
    heroLevel =  "Silver";
}
else if (heroExperience > 5000 && heroExperience <= 7000){
    heroLevel = "Gold";
}
else if (heroExperience > 7000 && heroExperience <= 8000){
    heroLevel = "Platinum";
}
else if (heroExperience > 8000 && heroExperience <= 9000){
    heroLevel = "Ascending";
}
else if (heroExperience > 9000 && heroExperience <= 10000){
    heroLevel = "Immortal";
}

//Classificador geral para experiencia acima de 10000
else {
    heroLevel = "Radiant";
}

//Imprime uma mensagem informando o jogador qual seu nível e classificação de herói.
console.log("The Heroin named " +heroName+ " is at level " + heroLevel+".")
´´´
