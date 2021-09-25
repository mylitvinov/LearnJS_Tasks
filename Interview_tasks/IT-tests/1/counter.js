let counterWidgetEl = document.querySelector('.js-counter')
let countValueEl = document.querySelector('.js-counter-value')

counterWidgetEl.addEventListener('click', ()=> {
  // console.log('Yes')
  
  let countCurrent = countValueEl.innerHTML
  // console.log(countCurrent)
  countCurrent ++

  // save to local storage
  localStorage.setItem('counter-value', countCurrent)

  countValueEl.innerHTML = countCurrent
} )

// restore saved current value
let savedCountValue = localStorage.getItem('counter-value')
if(savedCountValue) {
 countValueEl.innerHTML = savedCountValue 
}



