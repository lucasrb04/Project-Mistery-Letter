const generateLetter = () => {
  const inputValue = document.querySelector('#carta-texto').value;
  const spanArray = inputValue.split(' ');
  spanArray.forEach((word) => {
    const text = document.querySelector('#carta-gerada');
    const spanElement = document.createElement('span');
    spanElement.innerHTML = word;
    text.appendChild(spanElement);
  });
};

const generateBtn = document.querySelector('#criar-carta');
generateBtn.addEventListener('click', generateLetter);
