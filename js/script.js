function setClassForAnimation() {
    var header = document.getElementById('idOfHeader');
    header.classList.add('animate')
}

document.addEventListener("scroll", function(){
    var elem = document.querySelector("#block-2");
    console.log(elem);
    // document.querySelector("#header > .content").classList[elem.getBoundingClientRect().top < window.innerHeight ? "add" : "remove"]("visible");
    document.querySelector(".screen-2").classList[elem.getBoundingClientRect().top < window.innerHeight ? "add" : "remove"]("visible");
   //Когда оно должно быть "видимо", имеет класс visible
});