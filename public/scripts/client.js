$(document).ready(onReady);

function onReady(){
    console.log('js');

$('#addPet').on('click', bookEm);
getPetHotel();
}

function getPetHotel(){
    $.ajax({
        type: 'GET',
        url: '/pet',
        success: function(res){
            console.log('gotten', res);
            $('#petTable').empty();
            for (var i =0; i < res.length; i++) {
                console.log('in for loop');
                var $trow = $('<tr>');
                $trow.append('<td>' + res[i].name + '</td>');
                $trow.append('<td>' + res[i].breed + '</td>');
                $trow.append('<td>' + res[i].color + '</td>');
                $trow.append('<td>' + res[i].checkedin + '</td>');
                $('#petTable').append($trow);
            } //end for loop
        } //end success
    }) //end success
} //end getPetHotel

function bookEm(  ) {
    console.log('I am clicked.')
    var petToBook = {
        name: $('#name').val(),
        breed: $('#breed').val(),
        color: $('#color').val(),
        checkedin: $('#checkedIn').val()
    }
    console.log(petToBook);
        $.ajax({
            type: 'POST',
            url: '/pet',
            data: petToBook,
            success: function(res){
                console.log('woof');
                getPetHotel();
            }
        })
    
}