const gridContainer = document.getElementById('grid-container');

function createGrid(rowsNum, columnsNum){
    for(let i = 0; i< rowsNum; i++){
        const newRow = document.createElement('div'); 
        newRow.className = 'row';
        for(let j=0; j<columnsNum; j++){
            const newColumn  = document.createElement('div');
            newColumn.className = 'column';
            newColumn.style.setProperty('--num-interactions', 0);
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

    let numInteractions = parseInt(square.style.getPropertyValue('--num-interactions'));
    numInteractions++; 
    square.style.setProperty('--num-interactions', numInteractions); // Update the custom property
    
    let r = getRandomInteger(0, 255);
    let g = getRandomInteger(0, 255);
    let b = getRandomInteger(0, 255);

    r = Math.max(0, Math.min(255, Math.floor(r * (1 - 0.1 * numInteractions))));
    g = Math.max(0, Math.min(255, Math.floor(g * (1 - 0.1 * numInteractions))));
    b = Math.max(0, Math.min(255, Math.floor(b * (1 - 0.1 * numInteractions))));
   

    square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
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


