function randomNumber(){
    return  Math.floor(Math.random()*6)+1;
}

let randNumber1 = randomNumber();
let randNumber2 = randomNumber();

/* console.log(randNumber1 + " " + randNumber2); */


let randImageSource1 = "./images/dice" + randNumber1 + ".png";
let randImageSource2 = "./images/dice" + randNumber2 + ".png";

document.querySelectorAll("img")[0].setAttribute("src",randImageSource1);
document.querySelectorAll("img")[1].setAttribute("src",randImageSource2);

if(randNumber1==randNumber2)
{
    
    document.querySelector("h1").textContent="Brojevi su jednaki!"
}
else if(randNumber1>randNumber2)
{

document.querySelector("h1").textContent="Igrac 1 je pobjedio!"
}
else if(randNumber1<randNumber2)
{

document.querySelector("h1").textContent="Igrac 2 je pobjedio!"
}