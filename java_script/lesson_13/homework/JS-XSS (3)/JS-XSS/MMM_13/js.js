let draggedItem = null;
ball = document.querySelectorAll('.ball');
console.log(ball);
ball.forEach(element => {
    element.ondragstart = function (e) {
        e.dataTransfer.setData('id', e.target.id);

    }
});

ball.ondragend = function () {
    console.log('drag-end')
}

let dropzones = document.querySelectorAll('.dropzone');
console.log(dropzones)
dropzones[1].ondragover = function (event) {
    event.preventDefault();
    event.target.style.borderColor = 'red';
    event.target.style.borderWidth = '5px';
}
dropzones[0].ondrop = function (event) {
    let id = event.dataTransfer.getData('id');
   let draggItem = document.getElementById(id);
    console.log(draggItem);
    draggItem.parentNode.removeChild(draggItem);
    event.target.appendChild(draggItem)
}
dropzones[1].ondrop = function (event) {
    let id = event.dataTransfer.getData('id');
    let draggItem = document.getElementById(id);
    draggItem.parentNode.removeChild(draggItem);
    event.target.appendChild(draggItem);
}
dropzones[2].ondragover = function (event) {
    event.preventDefault();
    event.target.style.borderColor = 'red';
    event.target.style.borderWidth = '5px';
}
dropzones[2].ondrop = function (event) {
    let id = event.dataTransfer.getData('id');
    let draggItem = document.getElementById(id);
    draggItem.parentNode.removeChild(draggItem);
    event.target.appendChild(draggItem);
}
dropzones[3].ondragover = function (event) {
    event.preventDefault();
    event.target.style.borderColor = 'red';
    event.target.style.borderWidth = '5px';
}
dropzones[3].ondrop = function (event) {
    let id = event.dataTransfer.getData('id');
    let draggItem = document.getElementById(id);
    draggItem.parentNode.removeChild(draggItem);
    event.target.appendChild(draggItem);
}
dropzones[4].ondragover = function (event) {
    event.preventDefault();
    event.target.style.borderColor = 'red';
    event.target.style.borderWidth = '5px';
}
dropzones[4].ondrop = function (event) {
    let id = event.dataTransfer.getData('id');
    let draggItem = document.getElementById(id);
    draggItem.parentNode.removeChild(draggItem);
    event.target.appendChild(draggItem);
}
