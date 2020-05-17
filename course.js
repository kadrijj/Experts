// Modal Read Me Popup
const modals = document.getElementsByClassName('modal');
const readMoreBtns = document.getElementsByClassName('btnreadmore');
const span = document.getElementsByClassName ('close');


// When the user clicks on the button, open the modal
for (let i = 0; i < readMoreBtns.length; i= i+1) {
  readMoreBtns[i].addEventListener('click', () => {
    for (let j = 0; j < modals.length; j = j + 1) {
      if (i === j) {
         modals[j].style.display = 'block';
      }
    }
  })  
}


// When the user clicks on <span> (x), close the modal
for (let i = 0; i < span.length; i= i+1) {
  span[i].addEventListener('click', () => {
    for (let j = 0; j < modals.length; j = j + 1) {
      if (i === j)
      {
         modals[j].style.display = 'none';
      }
    }
  })
}


// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function (event) {
//   if (event.target == modals) {
//     modals.style.display = 'none';
//   }
// }
