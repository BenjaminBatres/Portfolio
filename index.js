let contrastToggle = false
const scaleFactor = 1 / 20
function toggleContrast() {
    contrastToggle = !contrastToggle
    if (contrastToggle) {
        document.body.classList += " light-theme"
    }
    else {
        document.body.classList.remove("light-theme")
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
        return document.body.classList.remove('modal--open', 'scroll--hidden')
    }
    // toggle modal
    isModalOpen = true
    document.body.classList += " modal--open scroll--hidden"
}

// FADE IN ANIMATION
const sr = ScrollReveal ({
    distance: '65px',
    duration: 3000,
    delay: 650,
    reset: false,
}) 

// sr.reveal('.nav__link--list', {delay:550, origin:'top'});
// sr.reveal('#personal-logo', {delay:550, origin:'top'});
sr.reveal('.social__list', {delay:600, origin:'bottom'});
// sr.reveal('.section__title', {delay:300, origin:'bottom'});
// sr.reveal('.project', {delay:200, origin:'left'});
// sr.reveal('.footer__row', {delay:200, origin:'top'});

// function displayTreactCloneProjectDescription() {
//     const displayProject = document.querySelector("#treact__project--description")
    
//     if (displayProject.innerHTML.trim() === "") {
//         displayProject.innerHTML = `
//             <div id="project__transition">
//                 <h3 class="project__description--title onTouch__description--title">
//                     Treact Clone Project
//                 </h3>
//                 <h4 class="project__description--sub-title onTouch__description--sub-title">
//                     Html, CSS, JavaScript
//                 </h4>
//                 <p class="project__description--para onTouch__description--para">
//                     I recreated this project with the skills I learned from Frontend Simplified, and I made it responsive on all devices.
//                 </p>
//                 <div class="project__description--links onTouch__description--links">
//                     <a href="https://github.com/Chaparro-ben/projects/blob/master/index.html" class="project__description--link onTouch__description--link" target="_blank">
//                         <i class="fab fa-github"></i>
//                     </a>
//                     <a href="https://chaparro-ben.github.io/projects/" target="_blank" class="project__description--link onTouch__description--link">
//                         <i class="fas fa-link"></i>
//                     </a>
//                 </div>
//             </div>` 
//     } else {
//         displayProject.innerHTML = ""
//     }
// }
// document.querySelector(".treact__project").addEventListener("touchstart", displayTreactCloneProjectDescription)

// function displayMovieAPIProjectDescription() {
//     const displayProject = document.querySelector("#movie__API--description")
    
//     if (displayProject.innerHTML.trim() === "") {
//         displayProject.innerHTML = 
//         `
//             <div id="project__transition">
//                 <h3 class="project__description--title onTouch__description--title">
//                     Movie API
//                 </h3>
//                 <h4 class="project__description--sub-title onTouch__description--sub-title">
//                     Html, CSS, JavaScript, and React
//                 </h4>
//                 <p class="project__description--para onTouch__description--para">
//                     This website I created uses API. This website shows any movie the users searches up and it has a sort selection that sorts from latest to oldest and oldest to latest.
//                 </p>
//                 <div class="project__description--links onTouch__description--links">
//                     <a href="https://github.com/Chaparro-ben/movie-api" class="project__description--link onTouch__description--link" target="_blank">
//                         <i class="fab fa-github"></i>
//                     </a>
//                     <a href="https://movie-api-taupe-five.vercel.app/" target="_blank" class="project__description--link onTouch__description--link">
//                         <i class="fas fa-link"></i>
//                     </a>
//                 </div>
//             </div>` 
//     } else {
//         displayProject.innerHTML = ""
//     }
// }
// document.querySelector(".movie__API").addEventListener("touchstart", displayMovieAPIProjectDescription)

// function displayLibraryProjectDescription() {
//     const displayProject = document.querySelector("#library__project--description")
    
//     if (displayProject.innerHTML.trim() === "") {
//         displayProject.innerHTML = `
//             <div id="project__transition">
//                 <h3 class="project__description--title onTouch__description--title">
//                     Library React Project
//                 </h3>
//                 <h4 class="project__description--sub-title onTouch__description--sub-title">
//                     Html, CSS, JavaScript, and React
//                 </h4>
//                 <p class="project__description--para onTouch__description--para">
//                     In this project I learned how to use components, hooks, and props to make a responsive and working website.
//                 </p>
//                 <div class="project__description--links onTouch__description--links">
//                     <a href="https://github.com/Chaparro-ben/library-react" class="project__description--link onTouch__description--link" target="_blank">
//                         <i class="fab fa-github"></i>
//                     </a>
//                     <a href="https://library-react-flor4pl34-chaparro-bens-projects.vercel.app/" target="_blank" class="project__description--link onTouch__description--link">
//                         <i class="fas fa-link"></i>
//                     </a>
//                 </div>
//             </div>` 
//     } else {
//         displayProject.innerHTML = ""
//     }
// }
// document.querySelector(".library__project").addEventListener("click", displayLibraryProjectDescription)

// function displayNetflixProjectDescription() {
//     const displayProject = document.querySelector("#netflix__project--description")
    
//     if (displayProject.innerHTML.trim() === "") {
//         displayProject.innerHTML = `
//             <div id="project__transition">
//                 <h3 class="project__description--title onTouch__description--title">
//                     Netflix Clone
//                 </h3>
//                 <h4 class="project__description--sub-title onTouch__description--sub-title">
//                     TypeScript, JavaScript, and Firebase
//                 </h4>
//                 <p class="project__description--para onTouch__description--para">
//                     I created a Netflix clone using React and Firebase to practice building a dynamic and responsive web application. The app fetches data from the TMDb API to display movies and TV shows by category, supports user authentication, and is fully responsive. Through this project, I strengthened my skills in API intergation, React hooks, and UI design.
//                 </p>
//                 <div class="project__description--links onTouch__description--links">
//                     <a href="https://github.com/Chaparro-ben/netflix-clone" class="project__description--link onTouch__description--link" target="_blank">
//                         <i class="fab fa-github"></i>
//                     </a>
//                     <a href="https://netflix-clone-murex-gamma.vercel.app/" target="_blank" class="project__description--link onTouch__description--link">
//                         <i class="fas fa-link"></i>
//                     </a>
//                 </div>
//             </div>` 
//     } else {
//         displayProject.innerHTML = ""
//     }
// }
// document.querySelector(".netflix__project").addEventListener("touchstart", displayNetflixProjectDescription)
