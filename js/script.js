// Script para selecionar texto dinamicamente de acordo com a seleção do carrosel
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

// Efeito de troca de tela ao mover o mouse
const left = document.getElementById('left-side');
const right = document.getElementById('right-side');

const handleOnMove = (e) => {
  if (e instanceof TouchEvent) {
    const p = (e.touches[0].clientX / window.innerWidth) * 100;
    left.style.width = `${p}%`;
  }
  const p = (e.clientX / window.innerWidth) * 100;
  left.style.width = `${p}%`;
};

left.addEventListener('mousemove', handleOnMove);
right.addEventListener('mousemove', handleOnMove);
left.addEventListener('touchmove', handleOnMove, {
  passive: true,
});
right.addEventListener('touchmove', handleOnMove, {
  passive: true,
});

// Efeito de fade in do texto
function reveal() {
  const revealElement = document.querySelector('.reveal');

  const windowHeight = window.innerHeight;
  const elementTop = revealElement.getBoundingClientRect().top;
  const elementVisible = 150;

  if (elementTop < windowHeight - elementVisible) {
    revealElement.classList.add('active');
  } else {
    revealElement.classList.remove('active');
  }
}

window.addEventListener('scroll', reveal);
