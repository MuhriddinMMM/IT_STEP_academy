var dragSrcEl = null;

function dragStart(e) {
    this.style.opacity = '0.4';
    this.style.borderColor = 'red';

    dragSrcEl = this;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
}

function dragOver(e) {
    if(e.preventDefault()){
        e.preventDefault();
    }
    e.dataTransfer.dropEffect = 'move';

    return false;
}

function dragEnter(e) {
    // this / e.target is the current hover target.
    this.classList.add('over');
}

function dragLeave(e) {
    this.classList.remove('over');  // this / e.target is previous target element.
}

function drop(e) {
    // this / e.target is current target element.

    if (e.stopPropagation) {
        e.stopPropagation(); // stops the browser from redirecting.
    }

    // Don't do anything if dropping the same column we're dragging.
    if (dragSrcEl != this) {
        // Set the source column's HTML to the HTML of the columnwe dropped on.
        dragSrcEl.innerHTML = this.innerHTML;
        this.innerHTML = e.dataTransfer.getData('text/html');
    }

    // See the section on the DataTransfer object.

    return false;
}

function dragEnd(e) {
    // this/e.target is the source node.

    [].forEach.call(cols, function (col) {
        col.classList.remove('over');
    });
}

var cols = document.getElementsByClassName('column');

[].forEach.call(cols, function (col) {
    col.addEventListener('dragstart', dragStart);
    col.addEventListener('dragenter', dragOver);
    col.addEventListener('dragover', dragEnter);
    col.addEventListener('dragleave', dragLeave);
    col.addEventListener('drop', drop);
    col.addEventListener('dragend', dragEnd);
});