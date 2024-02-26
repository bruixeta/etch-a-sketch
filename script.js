const gridContainer = document.getElementById('grid-container');

function createGrid(rowsNum, columnsNum){
    for(let i = 0; i< rowsNum; i++){
        const newRow = document.createElement('div'); 
        newRow.className = 'row';
        for(let j=0; j<columnsNum; j++){
            const newColumn  = document.createElement('div');
            newColumn.className = 'column';
            newRow.style.setProperty('--num-columns', columnsNum);
            newRow.appendChild(newColumn);
        }
        gridContainer.appendChild(newRow);
    }

    const squares = Array.from(document.getElementsByClassName('column'));

    squares.forEach((square) => {
    square.addEventListener('mouseover', mouseOver);
});
}

function mouseOver(event){
    let square = event.target;
    square.style.backgroundColor = getRandomRGB();
}

const button = document.querySelector('button');
button.addEventListener('click', clickNewGrid);

function clickNewGrid(event){
    let button = event.target;
    let gridSize = prompt("Grid's size?");
    if(gridSize <1){
        alert("Please, insert a positive number");
    }
    else if(gridSize < 101){
        const squares = Array.from(document.getElementsByClassName('column'));
        squares.forEach((square) => {
        square.remove();
});
        createGrid(gridSize,gridSize);
    }
    else{
        alert("The maximum size allowed is 100. Please, introduce a smaller number.")
    }
}

function getRandomInteger(start, end) {
    return start + Math.floor(Math.random() * (end - start + 1))
 }

function getRandomRGB() {
    return `rgb(${getRandomInteger(0, 255)}, ${getRandomInteger(0, 255)}, ${getRandomInteger(0, 255)})`;
 }




