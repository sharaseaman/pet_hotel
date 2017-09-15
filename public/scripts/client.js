$(document).ready(onReady);

function onReady(){
    console.log('js');
    getPetHotel();
}

function getPetHotel(){
    $.ajax({
        type: 'GET',
        url: '/',
        success: function(res){
            console.log('gotten', res);
        }
    })
}