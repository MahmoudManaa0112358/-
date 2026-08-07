const hum = document.querySelector(".hum");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const uol = document.querySelector(".uol");
const header = document.querySelector(".header");
const list = document.querySelector(".list");

hum.addEventListener( "click" , function(){
    two.classList.toggle("hum2")
    one.classList.toggle("hum3")
    three.classList.toggle("hum4")
    one.classList.toggle("hum5")
    three.classList.toggle("hum5")
    hum.classList.toggle("hum6")
    uol.classList.toggle("hum7")
    //header.classList.toggle("hum8")

    list.appendChild(uol)
})