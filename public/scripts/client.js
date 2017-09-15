$(document).ready(onReady);

function onReady(){
    console.log('js');
$('#addPet').on('click', bookEm);

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

function bookEm() {
    console.log('I am clicked.')
}