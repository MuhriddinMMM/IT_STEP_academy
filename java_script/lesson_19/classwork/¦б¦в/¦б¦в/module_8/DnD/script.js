/* Поиск элемента по идентификатору */
function _(id) {
    return document.getElementById(id);
}

var droppedIn = false;// Состояние брошенного элемента

/* Начало перетаскивания */
function drag_start(e){
    _('app_status').innerHTML = "Dragging the " + e.target.getAttribute('id');
    e.dataTransfer.setData("text", e.target.getAttribute('id'));
}

/* Когда перетаскиваемый элемент находится в области родителя */
function drag_enter(e) {
    _('app_status').innerHTML = "You are dragging over the " + e.target.getAttribute('id');
}

/* Элемент покинул область родителя */
function drag_leave(e) {
    _('app_status').innerHTML = "You left the " + e.target.getAttribute('id');
}

/* Бросили элемент в родителя:) */
function drag_drop(e) {
    event.preventDefault();
    var elem_id = e.dataTransfer.getData('text');
    event.target.appendChild(_(elem_id));
    _('app_status').innerHTML = "Dropped " + elem_id + " into the " + e.target.getAttribute('id');
    _(elem_id).removeAttribute('draggable');
    _(elem_id).style.cursor = "default";
    droppedIn = true;
}

/* Событие после перетаскивания элемента */
function drag_end(e) {
    if(droppedIn == false){
        _('app_status').innerHTML = "You let the " + e.target.getAttribute('id') + " go";
    }
    droppedIn = false;
}

/* Выводим в консоль какие элементы попали в блок */
function readDropZone(e) {
    for(var i = 0; i < _('drop_zone').children.length; i++){
        console.log(_('drop_zone').children[i].id + " is in the drop zone");
    }
}