/*
function calcAverage(score1, score2, score3) {
    const average = (score1+score2+score3)/3;
    return average;
}
const teamDolphin = calcAverage(85,54,41);
const teamCoala = calcAverage(23,34,27);
console.log(teamDolphin,teamCoala);

function checkWinner(teamDolphin, teamCoala){
    if(teamCoala===teamDolphin){
        return(console.log(`Match is draw with score for Team Dolphin ${teamDolphin} average points and for Team Coala ${teamCoala} average points.`))
    }
    else if(teamDolphin>=(2*teamCoala)){
        return(console.log(`Team Dolphin has clearly won the game by scoring ${teamDolphin} average points against Team Coala scored ${teamCoala} average.`));
    }
    else if(teamCoala>=(2*teamDolphin))
    {
        return(console.log(`Team Coala has clearly won the game by scoring ${teamCoala} average points against Team Dolphin scored ${teamDolphin} average.`));
    }
    else{
        return(console.log(`No one won the match and score for Team Dolphin is ${teamDolphin} average points and for Team Coala is ${teamCoala} average points.`))
    }
}

const winner = checkWinner(teamDolphin, teamCoala);
console.log(winner);
*/
/*
let calcTip = function(bill) {
   return bill<50?0:bill>=50&&bill<=300?bill*0.15:bill*0.20;
};

let bills = [125,404,44];
let tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);

let totals = [tips[0]+bills[0],tips[1]+bills[1],tips[2]+bills[2]];
console.log(totals);

console.log(bills,tips,totals);
*/
const Kapil = {
    firstName: "Kapil",
    lastName: "Chaulagai",
    age: 24,
    profession: "teacher",
    friends: ["Vaishakh", "Faisal", "Anilkumar"]
};

Kapil.location="Nepal";
Kapil['gmail']="kapilchaulagai123@gmail.com";
Kapil['bestfriend'] = Kapil.friends[0];
const interestedIn = prompt("What do you want to know about me? Choose among firstName, lastName, age, profession, friends, location, gmail and bestfriend.");
if(interestedIn){
    console.log(Kapil[interestedIn]);
}
else{
    console.log("Wrong Choice! Choose among firstName, lastName, age, profession, friends.")
}