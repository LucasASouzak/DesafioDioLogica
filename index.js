//Classificador de nivel de heroi

const heroName = "Shury"
const heroExperience= 2250;

let heroLevel;

if (heroExperience< 1000) {
    heroLevel = "Iron";
}
else if (heroExperience > 1000 && heroExperience <= 2000){
    heroLevel = "Bronze";
}
else if (heroExperience > 2000 && heroExperience <= 5000){
    heroLevel =  "Silver";
}
else if (heroExperience > 5000 && heroExperience <= 7000){
    heroLevel = "Gold";
}
else if 
else {
    heroLevel = "God"
}



console.log(heroLevel)
