const searchTag = document.querySelector(".search")

searchTag.addEventListener( "input" , function(event){

    const usertext = event.target.value.toLowerCase().trim();
    const AllCards = document.querySelectorAll(".contaner")

    AllCards.forEach(card => {
        const cardText = card.innerHTML.toLowerCase();

        if(!cardText.includes(usertext)){
            card.style.display ="none"
        }
        else{
            card.style.display =""
        }
    })

})