//Classificador de nivel de heroi

const heroName = "Shury"
const heroExperience = 10001;

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
else if (heroExperience > 7000 && heroExperience <= 8000){
    heroLevel = "Platinum";
}
else if (heroExperience > 8000 && heroExperience <= 9000){
    heroLevel = "Ascending";
}
else if (heroExperience > 9000 && heroExperience <= 10000){
    heroLevel = "Immortal";
}
else {
    heroLevel = "Radiant";
}
    
console.log(heroLevel)
