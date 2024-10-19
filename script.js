//nextindex.html
let btn3 = document.getElementById("btn-3")
btn3.addEventListener("click", function Click() {
    let text2 = document.getElementById("text-2")
    text2.style.display = "block"
    if (btn3) {
        btn3.style.display = "none"
    }
})

btn3.addEventListener ("click", function playMusic(){
    audio.play()
})


let btn4 = document.getElementById("btn-4")
btn4.addEventListener("click", function click() {
    location.href = "index-2.html"
})

