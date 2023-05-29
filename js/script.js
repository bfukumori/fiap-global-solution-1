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

// 2. Script para selecionar texto dinamicamente de acordo com a seleção do carrosel
let activeIndex = 0;
const companiesContent = document.getElementsByClassName('company-content');
const prevButton = document.querySelector('[data-bs-slide="prev"]');
const nextButton = document.querySelector('[data-bs-slide="next"]');

function handleNextClick() {
  const nextIndex =
    activeIndex + 1 <= companiesContent.length - 1 ? activeIndex + 1 : 0;

  const currentContent = document.querySelector(
    `[data-index="${activeIndex}"]`
  );
  const nextContent = document.querySelector(`[data-index="${nextIndex}"]`);

  setTimeout(() => {
    currentContent.dataset.status = '';
    nextContent.dataset.status = 'active';
    activeIndex = nextIndex;
  }, 600);
}

function handlePrevClick() {
  const nextIndex =
    activeIndex - 1 < 0 ? companiesContent.length - 1 : activeIndex - 1;

  const currentContent = document.querySelector(
    `[data-index="${activeIndex}"]`
  );
  const nextContent = document.querySelector(`[data-index="${nextIndex}"]`);

  setTimeout(() => {
    currentContent.dataset.status = '';
    nextContent.dataset.status = 'active';
    activeIndex = nextIndex;
  }, 600);
}

nextButton.addEventListener('click', handleNextClick);
prevButton.addEventListener('click', handlePrevClick);

// 3. Efeito de troca de tela ao mover o mouse
const left = document.getElementById('left-side');
const right = document.getElementById('right-side');

const handleOnMove = (e) => {
  const p = (e.clientX / window.innerWidth) * 100;
  left.style.width = `${p}%`;
};

left.onmousemove = (e) => handleOnMove(e);
right.onmousemove = (e) => handleOnMove(e);
left.ontouchmove = (e) => handleOnMove(e.touches[0]);
right.ontouchmove = (e) => handleOnMove(e.touches[0]);
