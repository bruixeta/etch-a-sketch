const gridContainer = document.getElementById('grid-container');

function createGrid(rowsNum, columnsNum){
    for(let i = 0; i< rowsNum; i++){
        const newRow = document.createElement('div'); 
        newRow.className = 'row';
        for(let j=0; j<columnsNum; j++){
            const newColumn  = document.createElement('div');
            newColumn.className = 'column';
            newRow.appendChild(newColumn);
        }
        gridContainer.appendChild(newRow);
    }
}


