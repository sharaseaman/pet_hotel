$(document).ready(onReady);

function onReady(){
    console.log('js');

    
}

function getPetHotel(){
    $.ajax({
        type: 'GET',
        url: '/pet',
        success: function(res){
            console.log('gotten', res);
        }
    })
}