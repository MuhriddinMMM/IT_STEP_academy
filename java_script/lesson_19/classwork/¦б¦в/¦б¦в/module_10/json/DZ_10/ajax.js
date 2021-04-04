function Ajax(options){
    this._method = options.method;
    this._path = options.path;
    this._data = options.data;
    this._success = options.success;
    console.log(this._success);
    if(this._method == 'get'){
        this._get();
    }
}
 /* Создаем кроссбраузерный объект XMLHTTP */ 
Ajax.prototype._xmlhttp = function(){
    var xmlhttp;
    try {
        xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {
    try {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    } catch (E) {
        xmlhttp = false;
    }
    }
    if (!xmlhttp && typeof XMLHttpRequest!='undefined') {
        xmlhttp = new XMLHttpRequest();
    }
    return xmlhttp;
}
Ajax.prototype._get = function(){
    var success = document.getElementById(this._success);
    var request = this._xmlhttp();
    request.open('GET', this._path +"?" + this._data, true);
    request.onreadystatechange = function() {
        if (request.readyState == 4 && request.status == 200){
            success.innerHTML = request.responseText;
            console.log(this._success);
        }else{
            success.innerHTML = 'Error';
        }
    };
    request.send();
}