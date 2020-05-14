// Modal Read Me Popup
const modal = document.getElementById('mymodal');
const readMore = document.getElementsByClassName('btnreadmore');
const span = document.getElementsByClassName ('close') [0];


console.log(readMore.length)
// When the user clicks on the button, open the modal
for (let i = 0; i < readMore.length; i= i+1) {
  readMore[i].addEventListener('click', () => {
    modal.style.display = 'block';
  })  
}~


// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = 'none';
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}