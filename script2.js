const c = document.querySelector(".container");
const b = document.querySelector("button");

function change() {
  const
    { width: cWidth, height: cHeight } = c.getBoundingClientRect(),
    { width: bWidth, height: bHeight } = b.getBoundingClientRect(),
    i = Math.floor(Math.random() * (cWidth - bWidth)) + 1,
    j = Math.floor(Math.random() * (cHeight - bHeight)) + 1;

  b.style.left = i + "px";
  b.style.top = j + "px";
}

b.addEventListener("click", change);

function sendMail2 (){
    (function (){
        emailjs.init("ZBkQs96MvNUyzVOJH");
    })()

    let serviceId = "service_t3aby8i"
    let template = "template_jhwdexh"

    emailjs.send(serviceId,template)
    .then ( res =>{
        alert ("success full, check ur email")
    })
    .catch()
}
function sendMail3 (){
    (function (){
        emailjs.init("ZBkQs96MvNUyzVOJH");
    })()

    let serviceId = "service_t3aby8i"
    let template = "template_borwr09"

    emailjs.send(serviceId,template)
    .then ( res =>{
        alert ("success full, check ur email")
    })
    .catch()
}

const btn8 = document.getElementById ("btn-8").onclick = function ButtonClick (){
    location.href = "last.html"
}