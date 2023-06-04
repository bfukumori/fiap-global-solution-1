const thumbsAction = document.getElementsByClassName("thumb-plataforma");
const actionsContainer = document.getElementById("ods-tab");

function handleActionSelection(item) {
  const backGroundData = item.attributes["data-backgroud"].value;
  const outLineStyle = `1px solid ${backGroundData}`;
  actionsContainer.style.outline = outLineStyle;
  actionsContainer.style.backgroundColor = hexToRgb(backGroundData);
}

for (let i = 0; i < thumbsAction.length; i++) {
  const element = thumbsAction[i];
  element.addEventListener('click', function () {
    handleActionSelection(element);
  });
}

// // Just to initialize item
// thumbsAction[1].click();

function hexToRgb(hex) {
  // Remove o caractere # do início do valor hexadecimal, se estiver presente
  hex = hex.replace('#', '');

  // Verifica o comprimento da string hexadecimal
  if (hex.length === 3) {
    // Expande um valor hexadecimal de 3 dígitos para 6 dígitos duplicando cada dígito
    hex = hex.replace(/(.)/g, '$1$1');
  }

  // Converte os valores hexadecimais em números inteiros
  var r = parseInt(hex.substring(0, 2), 16);
  var g = parseInt(hex.substring(2, 4), 16);
  var b = parseInt(hex.substring(4, 6), 16);
  var opacity = parseFloat('0.4');

  // Retorna o valor RGB como uma string
  return 'rgb(' + r + ', ' + g + ', ' + b + ', ' + opacity + ')';
}

// prevent to show the wrong ods when changes to mobile using a navigator
function isMobile() {
  return window.innerWidth < 991;
}
function handleResize() {
  if (isMobile()) {
    thumbsAction[1].click();
  }
}
window.addEventListener('resize', handleResize);
