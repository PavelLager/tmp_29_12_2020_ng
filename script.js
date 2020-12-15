field = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
]
let value2 = 0;

function render() { 
  let str = '';

field.forEach((row, x) => {
  str += '<div class="field__row">';
  row.forEach((cell, y) => {
      str += '<div class="field__cell" data-x="' + y + '" data-y="' +x +'">' + cell + '</div>';
  });
  str += '</div>';
});

// wrapper.innerHtml = str;

wrapper = document.querySelector('.wrapper')
wrapper.innerHTML = str;
}

render();
wrapper.addEventListener('click', (event) => {
  debugger
  let element = event.target;
  let isCellClick = element.classList.contains('field__cell');

  if (!isCellClick) {
      return;
  }

  let value;
  value2 = (value2 + 1);

  if (value2 % 2 == 0) {
    value = "0";
  }
  else {
    value = "X";
  }

  setCell(element.dataset.y,element.dataset.x, value);
  render();
  console.log(field)
  
})

function setCell (y,x,value) {
  field[y][x] = value;
}

