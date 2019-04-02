// Sections
const landing = document.querySelector('#hero');
const work = document.querySelector('#work');
const about = document.querySelector('#about');
// Buttons
const workBtn = document.querySelector('.work-btn');
const aboutBtn = document.querySelector('.about-btn');
const backBtn = document.querySelector('.back-btn');
const logoMark = document.querySelector('.logo-mark')

// Have landing slide up and make work appear
workBtn.addEventListener('click', () => {
    landing.classList.add('work-selected');
    work.classList.add('active')
    logoMark.classList.add('move-me');
})

// Toggle and remove the about section
aboutBtn.addEventListener('click', () => {
    about.classList.add('active');
})

backBtn.addEventListener('click', () => {
    about.classList.remove('active');
})


// Move the hero back down
logoMark.addEventListener('click', () => {
    landing.classList.remove('work-selected');
    logoMark.classList.remove('move-me');
    work.classList.remove('active')
})


//When project is clicked make it expand to full page before it transitions to the next page
const projectSections = document.querySelectorAll('.project a');

