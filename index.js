let contrastToggle = false
const scaleFactor = 1 / 20
function toggleContrast() {
    contrastToggle = !contrastToggle
    if (contrastToggle) {
        document.body.classList += " dark-theme"
    }
    else {
        document.body.classList.remove("dark-theme")
    }
}

function moveBackground(event) {
    const shapes = document.querySelectorAll(".shape")
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;

    for (let i = 0; i < shapes.length; i++) {
        const isOdd = i % 2 !== 0;
        const boolInt = isOdd ? -1 : 1; 
        shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`
        
    }
}

function contact(event) {
    event.preventDefault()
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    loading.classList += " modal__overlay--visible"
    emailjs
    .sendForm(
        'service_fgnmmlt',
        'template_t3c5ea6',
        event.target,
        'pX142FpbQfgFEPE4u'
    ).then(() => {
        loading.classList.remove("modal__overlay--visible")
        success.classList += " modal__overlay--visible"
    }).catch(() => {
        loading.classList.remove("modal__overlay--visible")
        alert("The email service is temporaily unavailable. Please try agian later")
    })
    
}

let isModalOpen = false;
function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false
        return document.body.classList.remove('modal--open')
    }
    // toggle modal
    isModalOpen = true
    document.body.classList += " modal--open"
}

// FADE IN ANIMATION
const sr = ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay: 650,
    reset: false,
}) 

sr.reveal('.nav__link--list', {delay:550, origin:'top'});
sr.reveal('#personal-logo', {delay:550, origin:'top'});
sr.reveal('.header__content', {delay:300, origin:'bottom'});
sr.reveal('.section__title', {delay:300, origin:'bottom'});
sr.reveal('.project', {delay:200, origin:'left'});
sr.reveal('.footer__row', {delay:200, origin:'top'});
