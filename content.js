var button = document.querySelector('.form-button');
button.style.backgroundColor = '#47216D';

window.document.onkeydown = (e) => {
  if (e.key === 'Enter') {
    button.click();
  }
};