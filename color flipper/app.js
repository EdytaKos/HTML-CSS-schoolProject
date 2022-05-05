const colors = ["green", "red", "rgba(133,122,200)","caramel", "rgba(45,95,111,77)", "yellow", "rgba(122,29,77,77)"];
const btn = document.getElementById("btn");

// queryselector chwyta pierwszy napotkany pasujący element
const color = document.querySelector(".color"); 

//aby btn reagował na jakieś zdarzenie (click) dodaj eventListener. przyjmuje argumenty: nazwaZdareznie, coMaSięWykonać
btn.addEventListener("click",function(){
    // wybierze losowy kolor z tablicy
    const randomNumber = getRandomNumber();  // wybierze losowy kolor z tablicy
    console.log(randomNumber);


    // ustawiamy, że tło przyjmuje kolor z tablicy colors
    document.body.style.backgroundColor = colors[randomNumber];

    //ustawiamy wartość tekstową w selektorze (temu też braliśmy selektor nie ID. Selektor działa na wszystkim )
    color.textContent = colors[randomNumber];
})

function getRandomNumber(){
    //przemnażamy przez długość tablicy (lepsze niż mnożenie przez sztywną liczbę, łatwa rozbudowa)
    // zokrąglamy
    return Math.floor(Math.random()*colors.length);
}