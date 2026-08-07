import { other } from './data/other.js';

const AON = other.length - 1;
let counter = 0;
const main = document.querySelector(".main")
const otherSec = document.querySelector("#other")

const location = document.querySelector(".location2")
const call = document.querySelector(".call2")

while (counter <= AON){
    let div1 = document.createElement("div");
    div1.className = "contaner";

    let div2 = document.createElement("div");
    div2.className = "btn";

    let div3 = document.createElement("div");
   let divText1 = document.createTextNode( other[counter].name );
   div3.appendChild(divText1);
   div3.className = "pra";

   let callBtn = document.createElement("button");
   callBtn.innerHTML = `${call.outerHTML}`;
   callBtn.className = "call";

   let locationBtn = document.createElement("button");
   locationBtn.innerHTML = `${location.outerHTML}`;
   locationBtn.className = "location";

   div2.appendChild(callBtn);
   div2.appendChild(locationBtn);

   div1.appendChild(div2);
   div1.appendChild(div3);

   otherSec.appendChild(div1);

   const link = other[counter].location;

   locationBtn.addEventListener("click" , function(){
    window.open(link, "_blank");
   })

      const phonNumper = other[counter].phon;

      function callNow() {
    let div = document.createElement("div");
    let div4 = document.createElement("div")
    let div5 = document.createElement("div")

  let divText2 = document.createTextNode(phonNumper);
  let divText3 = document.createTextNode("اضغط علي المربع للخروج");

  div4.appendChild(divText2);
  div5.appendChild(divText3);
  div.appendChild(div4);
  div.appendChild(div5);

  div.className = "number";

  document.body.appendChild(div);

  div.addEventListener("click" , function(){
    div.remove()
  })
   }


   callBtn.addEventListener("click" , function(){

        callNow()
        callBtn.blur();
   })


   counter++;
}