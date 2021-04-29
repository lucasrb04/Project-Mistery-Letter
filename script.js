const generateLetter = () => {
  const inputValue = document.querySelector('#carta-texto').value;
  const spanArray = inputValue.split(' ');
  const text = document.querySelector('#carta-gerada');
  text.innerText = '';
  spanArray.forEach((word) => {
    const spanElement = document.createElement('span');
    spanElement.innerHTML = word;
    text.appendChild(spanElement);
  });
};

const generateBtn = document.querySelector('#criar-carta');
generateBtn.addEventListener('click', generateLetter);
