function main(){
    generateGrid('#grid', 16);
    const button = document.querySelector('button');
    button.addEventListener('click', () => {
        let newSize = prompt('Enter grid size');
        if (newSize > 100) alert('Size must be 100 or below')
        else resetGrid(newSize);
    });

}

function generateGrid(elementName, size){
    let element = document.querySelector(elementName);
    for(let i = 0; i < size; i++){
        let newElement = document.createElement('div');
        newElement.setAttribute('class', 'column');
        newElement.setAttribute('index', i);
        for(let j = 0;j < size; j++){
            let innerElement = document.createElement('div');
            innerElement.setAttribute('class', 'row square');
            innerElement.setAttribute('index',i);
            newElement.appendChild(innerElement);
        }
        element.appendChild(newElement);
    }
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.addEventListener('mouseover', () => square.style.backgroundColor = 'white')
    })
}

function resetGrid(size){
    const grid = document.querySelector('#grid');
    const columns = document.querySelectorAll('.column');
    columns.forEach(column => grid.removeChild(column));
    generateGrid('#grid', size)
}


main();