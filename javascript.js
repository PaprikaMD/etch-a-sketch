function main(){
    generateGrid('#grid', 16)

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
            innerElement.textContent = '#';
            newElement.appendChild(innerElement);
        }
        element.appendChild(newElement);
    }
}

main();