const hamburger = document.querySelector(".hamburger");
const header = document.querySelector("header");

hamburger.addEventListener("click", () => {
    header.classList.toggle("open");
    if (header.classList.contains("open")) {document.body.style.overflow = "hidden"}
    else {document.body.style.overflow = "visible"}
})

document.querySelectorAll(".header-link").forEach(n =>
    n.addEventListener("click", () => {
        header.classList.remove("open");
        document.body.style.overflow = "visible"
    }))

document.querySelector(".overlay").addEventListener("click", () => {
    header.classList.remove("open");
    document.body.style.overflow = "visible"
})




