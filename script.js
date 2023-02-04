// Burger Script

let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
})

// Prices Script
document.querySelectorAll('.accordion').forEach((elem) => {
    elem.addEventListener('click', () => {
        let content = elem.nextElementSibling;
        let parent = elem.parentElement;
        let accordionImg = elem.getElementsByTagName('img')[0];

        document.querySelectorAll('.prices_button').forEach((element) => {
            element.classList.remove('active');
            accordionImg.src = './plants/arrow.svg';
        })

        document.querySelectorAll('.emb_pic').forEach((element) => {
            element.src = './plants/arrow.svg';
        })

        if (content.style.maxHeight) {
            document.querySelectorAll('.content').forEach((el) => { el.style.maxHeight = null })
        } else {
            document.querySelectorAll('.content').forEach((el) => { el.style.maxHeight = null })
            content.style.maxHeight = content.scrollHeight + 'px';
            parent.classList.add('active');
            accordionImg.src = './plants/arrow_up.png';
        }

    })
})



