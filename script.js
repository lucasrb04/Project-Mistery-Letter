const generateLetter = () => {
  const inputValue = document.querySelector('#carta-texto').value;
  const spanArray = inputValue.split(' ');
  const text = document.querySelector('#carta-gerada');
  if (inputValue.trim() === '') {
    text.innerText = 'por favor, digite o conteúdo da carta.';
    return false;
  }
  text.innerText = '';
  const contador = document.querySelector('#carta-contador');
  contador.innerText = spanArray.length;
  spanArray.forEach((word) => {
    const spanElement = document.createElement('span');
    spanElement.innerHTML = word;
    text.appendChild(spanElement);
  });
};

const generateBtn = document.querySelector('#criar-carta');
generateBtn.addEventListener('click', generateLetter);
