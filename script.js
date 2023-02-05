// BURGER MENU

let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
})

//  PRICES SCRIPT

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

//  SERVICES SCRIPT

document.querySelector('#gardenbutton').addEventListener('click', function () {
    document.querySelector('#gardenbutton').classList.toggle('activeBtn');
    // console.log(document.querySelector('#gardenbutton').classList.contains('activeBtn'));
    if (document.querySelector('#gardenbutton').classList.contains('activeBtn') === true &&
        document.querySelector('#lawnbutton').classList.contains('activeBtn') === false &&
        document.querySelector('#plantingbutton').classList.contains('activeBtn') === false) {
        for (let elem of document.querySelectorAll('.planting, .lawn')) {
            elem.classList.add('blur');
        }
    }
    if (document.querySelector('#gardenbutton').classList.contains('activeBtn') === true &&
        document.querySelector('#lawnbutton').classList.contains('activeBtn') === true &&
        document.querySelector('#plantingbutton').classList.contains('activeBtn') === false) {
        for (let elem of document.querySelectorAll('.garden')) {
            elem.classList.remove('blur');
        }
    }
    if (document.querySelector('#gardenbutton').classList.contains('activeBtn') === true &&
        document.querySelector('#lawnbutton').classList.contains('activeBtn') === false &&
        document.querySelector('#plantingbutton').classList.contains('activeBtn') === true) {
        for (let elem of document.querySelectorAll('.garden')) {
            elem.classList.remove('blur');
        }
    }
    if (document.querySelector('#gardenbutton').classList.contains('activeBtn') === true &&
        document.querySelector('#lawnbutton').classList.contains('activeBtn') === true &&
        document.querySelector('#plantingbutton').classList.contains('activeBtn') === true) {
        for (let elem of document.querySelectorAll('.planting, .lawn')) {
            elem.classList.add('blur');
        }
        for (let elem of document.querySelectorAll('.garden')) {
            elem.classList.remove('blur');
        }
        document.querySelector('#lawnbutton').classList.remove('activeBtn');
        document.querySelector('#plantingbutton').classList.remove('activeBtn');
    }
    if (document.querySelector('#gardenbutton').classList.contains('activeBtn') === false &&
        document.querySelector('#lawnbutton').classList.contains('activeBtn') === false &&
        document.querySelector('#plantingbutton').classList.contains('activeBtn') === true) {
        for (let elem of document.querySelectorAll('.garden')) {
            elem.classList.add('blur');
        }
    }
    if (document.querySelector('#gardenbutton').classList.contains('activeBtn') === false &&
        document.querySelector('#lawnbutton').classList.contains('activeBtn') === true &&
        document.querySelector('#plantingbutton').classList.contains('activeBtn') === false) {
        for (let elem of document.querySelectorAll('.garden')) {
            elem.classList.add('blur');
        }
    }
    if (document.querySelector('#gardenbutton').classList.contains('activeBtn') === false &&
        document.querySelector('#lawnbutton').classList.contains('activeBtn') === false &&
        document.querySelector('#plantingbutton').classList.contains('activeBtn') === false) {
        for (let elem of document.querySelectorAll('.planting, .lawn')) {
            elem.classList.remove('blur');
        }
    }
})

document.querySelector('#lawnbutton').addEventListener('click', function () {
    document.querySelector('#lawnbutton').classList.toggle('activeBtn');
    if (document.querySelector('#lawnbutton').classList.contains('activeBtn') === true &&
        document.querySelector('#gardenbutton').classList.contains('activeBtn') === false &&
        document.querySelector('#plantingbutton').classList.contains('activeBtn') === false) {
        for (let elem of document.querySelectorAll('.garden, .planting')) {
            elem.classList.add('blur');
        }
    }
    if (document.querySelector('#lawnbutton').classList.contains('activeBtn') === true &&
        document.querySelector('#gardenbutton').classList.contains('activeBtn') === true &&
        document.querySelector('#plantingbutton').classList.contains('activeBtn') === false) {
        for (let elem of document.querySelectorAll('.lawn')) {
            elem.classList.remove('blur');
        }
    }
    if (document.querySelector('#lawnbutton').classList.contains('activeBtn') === true &&
        document.querySelector('#gardenbutton').classList.contains('activeBtn') === false &&
        document.querySelector('#plantingbutton').classList.contains('activeBtn') === true) {
        for (let elem of document.querySelectorAll('.lawn')) {
            elem.classList.remove('blur');
        }
    }
    if (document.querySelector('#lawnbutton').classList.contains('activeBtn') === true &&
        document.querySelector('#gardenbutton').classList.contains('activeBtn') === true &&
        document.querySelector('#plantingbutton').classList.contains('activeBtn') === true) {
        for (let elem of document.querySelectorAll('.garden, .planting')) {
            elem.classList.add('blur');
        }
        for (let elem of document.querySelectorAll('.lawn')) {
            elem.classList.remove('blur');
        }
        document.querySelector('#gardenbutton').classList.remove('activeBtn');
        document.querySelector('#plantingbutton').classList.remove('activeBtn');
    }
    if (document.querySelector('#lawnbutton').classList.contains('activeBtn') === false &&
        document.querySelector('#gardenbutton').classList.contains('activeBtn') === false &&
        document.querySelector('#plantingbutton').classList.contains('activeBtn') === true) {
        for (let elem of document.querySelectorAll('.lawn')) {
            elem.classList.add('blur');
        }
    }
    if (document.querySelector('#lawnbutton').classList.contains('activeBtn') === false &&
        document.querySelector('#gardenbutton').classList.contains('activeBtn') === true &&
        document.querySelector('#plantingbutton').classList.contains('activeBtn') === false) {
        for (let elem of document.querySelectorAll('.lawn')) {
            elem.classList.add('blur');
        }
    }
    if (document.querySelector('#lawnbutton').classList.contains('activeBtn') === false &&
        document.querySelector('#gardenbutton').classList.contains('activeBtn') === false &&
        document.querySelector('#plantingbutton').classList.contains('activeBtn') === false) {
        for (let elem of document.querySelectorAll('.planting, .garden')) {
            elem.classList.remove('blur');
        }
    }
})

document.querySelector('#plantingbutton').addEventListener('click', function () {
    document.querySelector('#plantingbutton').classList.toggle('activeBtn');
    if (document.querySelector('#plantingbutton').classList.contains('activeBtn') === true &&
        document.querySelector('#gardenbutton').classList.contains('activeBtn') === false &&
        document.querySelector('#lawnbutton').classList.contains('activeBtn') === false) {
        for (let elem of document.querySelectorAll('.garden, .lawn')) {
            elem.classList.add('blur');
        }
    }
    if (document.querySelector('#plantingbutton').classList.contains('activeBtn') === true &&
        document.querySelector('#gardenbutton').classList.contains('activeBtn') === true &&
        document.querySelector('#lawnbutton').classList.contains('activeBtn') === false) {
        for (let elem of document.querySelectorAll('.planting')) {
            elem.classList.remove('blur');
        }
    }
    if (document.querySelector('#plantingbutton').classList.contains('activeBtn') === true &&
        document.querySelector('#gardenbutton').classList.contains('activeBtn') === false &&
        document.querySelector('#lawnbutton').classList.contains('activeBtn') === true) {
        for (let elem of document.querySelectorAll('.planting')) {
            elem.classList.remove('blur');
        }
    }
    if (document.querySelector('#plantingbutton').classList.contains('activeBtn') === true &&
        document.querySelector('#gardenbutton').classList.contains('activeBtn') === true &&
        document.querySelector('#lawnbutton').classList.contains('activeBtn') === true) {
        for (let elem of document.querySelectorAll('.garden, .lawn')) {
            elem.classList.add('blur');
        }
        for (let elem of document.querySelectorAll('.planting')) {
            elem.classList.remove('blur');
        }
        document.querySelector('#gardenbutton').classList.remove('activeBtn');
        document.querySelector('#lawnbutton').classList.remove('activeBtn');
    }
    if (document.querySelector('#plantingbutton').classList.contains('activeBtn') === false &&
        document.querySelector('#gardenbutton').classList.contains('activeBtn') === false &&
        document.querySelector('#lawnbutton').classList.contains('activeBtn') === true) {
        for (let elem of document.querySelectorAll('.planting')) {
            elem.classList.add('blur');
        }
    }
    if (document.querySelector('#plantingbutton').classList.contains('activeBtn') === false &&
        document.querySelector('#gardenbutton').classList.contains('activeBtn') === true &&
        document.querySelector('#lawnbutton').classList.contains('activeBtn') === false) {
        for (let elem of document.querySelectorAll('.planting')) {
            elem.classList.add('blur');
        }
    }
    if (document.querySelector('#plantingbutton').classList.contains('activeBtn') === false &&
        document.querySelector('#gardenbutton').classList.contains('activeBtn') === false &&
        document.querySelector('#lawnbutton').classList.contains('activeBtn') === false) {
        for (let elem of document.querySelectorAll('.garden, .lawn')) {
            elem.classList.remove('blur');
        }
    }
})

// CONTACTS SCRIPT

let accordion = document.querySelector('.contacts_city');
let info = accordion.nextElementSibling;
let arrows = document.querySelector('.city_pic');
let city = document.querySelectorAll('.city-name');
let cityMassive = document.querySelectorAll('.city-block');
let cityMassiveDir = [];

cityMassive.forEach((el) => {
    cityMassiveDir.push(el.parentElement.className);
})
accordion.addEventListener('click', () => {
    if (info.style.maxHeight) {
        info.style.maxHeight = null;
        accordion.classList.remove('activeAccordion');
        arrows.src = './plants/accordion_dropdown_grey.png';

    } else {
        info.style.maxHeight = info.scrollHeight + 'px';
        accordion.classList.add('activeAccordion');
        arrows.src = './plants/arrow_up.png';

        for (let i = 0; i < cityMassiveDir.length; i++) {
            if (cityMassive[i].parentElement.className === '') {
                cityMassive[i].parentElement.classList.add(cityMassiveDir[i]);
            }
        }
    }
})
city.forEach((elem) => {
    elem.addEventListener('click', () => {
        document.querySelector('.contact_city_txt').innerHTML = elem.firstChild.textContent;
        info.style.maxHeight = null;
        arrows.src = './plants/accordion_dropdown_grey.png';

        cityMassive.forEach((el) => {
            if (el.parentElement.className === elem.firstChild.textContent[0]) {
                el.parentElement.classList.remove(elem.firstChild.textContent[0]);
        }
    })
    })
})

//END

console.log(`
PLANTS#3

Ваша оценка - 112.5 баллов`)
