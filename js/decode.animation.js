// 1. Efeito de descriptografia
const letters = 'abcdefghijklmnopqrstuvwxyz';

const decode = document.querySelector('#decode');

function hackerNumber() {
  let iterations = 0;

  const interval = setInterval(() => {
    decode.innerText = decode.innerText
      .split('')
      .map((_, index) => {
        if (index < iterations) {
          return decode.dataset.value[index];
        }
        return letters[Math.floor(Math.random() * 26)];
      })
      .join('');

    if (iterations >= decode.dataset.value.length) {
      clearInterval(interval);
    }

    iterations += 1 / 3;
  }, 30);
}
hackerNumber();
