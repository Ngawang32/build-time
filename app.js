
const navBtn = document.querySelector('.nav-btn');
const closeBtn = document.querySelector('.close-btn');

// Event Listeners
navBtn.addEventListener('click', () => {
  document.querySelector('.nav-lists').classList.add('show');
  document.querySelector('.hero').classList.remove('close-btn')

})
closeBtn.addEventListener('click', () => {
  document.querySelector('.nav-lists').classList.remove('show');
})






