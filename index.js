//Classificador de nível de herói

// Variável constante para armazenar o nome do herói
const heroName = "Shury"

// Variável constante para armazenar os pontos de experiência do herói(Necessario alterar manualmente)
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
