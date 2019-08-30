function flip(){
    let card = document.querySelectorAll(".gridItem");
    for(var i = 0; i < card.length; i++){
        card[i].classList.toggle('flipped');
    }
}


var textBox = document.querySelector(".textBox");

