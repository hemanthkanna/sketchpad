const container = document.getElementById('container');

// creates a grid based on size(input)

function createGrid(size) {
  container.style.setProperty(`--size`, size);

  for (let index = 0; index < size*size ; index++) {
    let cell = document.createElement("div");
    cell.style.minHeight = "0";
    cell.style.minWidth = "0";
    cell.style.overflow = "hidden";
    container.appendChild(cell);
    cell.className = "grid-item";
  
   cell.addEventListener('mouseover', () => {
      cell.style.backgroundColor = "black";
    });
  } 
}

let gridSize =prompt("enter grid no columns and rows (max-100)",16);

  // checks maximum grid size if its exceeds 100 reloads and asks again
  if (gridSize > 100) {
    alert("Exceeds maximum size !!!");
    reloadPage();
  } else {
    createGrid(gridSize);
  }  
  

let cells = document.querySelectorAll('.grid-item');


// changes the color of grid item to an random colors( rainbow color)
function changeColor() {
  cells.forEach(item => {
    item.addEventListener('mousemove', () => {
      let red = Math.floor(Math.random() * 255);
      let green = Math.floor(Math.random() * 255);
      let blue = Math.floor(Math.random() * 255);
      item.style.backgroundColor = "rgb("+red+","+green+","+blue+")";
    });
  });
}

// an eraser to erase the sketchpad
function erase() {
  cells.forEach(item => {
    item.addEventListener('mousemove', () => {
      item.style.backgroundColor = "white";
  });
});
}

// resets the page
function reloadPage(){
  window.location.reload(); 
}

const resetButton = document.getElementById('resetButton');
resetButton.addEventListener('click', reloadPage);


 



