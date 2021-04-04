function upload(file){
    var log = document.getElementById('log');
    var request = new XMLHttpRequest();
    
    request.upload.onprogress = function(event){
        log.innerHTML = event.loaded + ' /' + event.total;
    }
    
    request.onload = request.onerror = function(){
        if(this.status == 200){
            log.innerHTML = "success";
        }else{
            log.innerHTML = "error";
        }
    }
    
    request.open('POST', 'ajax2.php', true);
    request.send(file);
}