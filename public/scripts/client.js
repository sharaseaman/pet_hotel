console.log('In js');

var myApp = angular.module('myApp', []);

myApp.controller('WardenController', function ($http) {
    console.log('WController');

    // VM
    var vm = this;

    vm.getPets = function () {
        console.log('In getPets');
        $http({
            method: 'GET',
            url: '/pet',
        }).then(function (response) {
            console.log('Response:', response);
            vm.pets = response.data;    
        }); //end then
    }//end getPets function

    vm.addPet = function () {
        console.log('In postPets');
        
        $http({
            method: 'POST',
            url: '/pet',
            data: {name: vm.nameIn, breed: vm.breedIn, color: vm.colorIn, checked: vm.checkedIn}
            }).then(function(response){
                vm.getPets(); 
                console.log('response', response);
        }) //and then done
    }; //end addPet function

    vm.deletePet = function(item) {
        
        console.log('In deletePet with item ->', item);

        $http({
            method: 'DELETE',
            url: '/pet/' + item
        }).then(function (response){
            console.log('in deletePet trying to get button');
            vm.getPets();
        });
    }
    
    vm.putPet =function(item){
    //      console.log('put pet function');
    //console.log('In deletePet with item ->', item);

        $http({
            method: 'PUT',
            url: '/pet/' + item
        }).then(function (response) {
            console.log('in putPET not PUSH trying to get button');
            vm.getPets();
        });
    }
}); 

//end warden controller function


myApp.controller('RecordsController', function ($http) {
    console.log('RController');

    // VM
    var vm = this;
    vm.getnames = function(){

        console.log('In getnames');
        $http({
            method: 'GET',
            url: '/records',
        }).then(function (response) {
            console.log('Response:', response);
            vm.name = response.data;
        }); //end then
    }

    vm.bookPet = function () {
        console.log('In bookpostPets');

        $http({
            method: 'POST',
            url: '/records',
            data: { name: vm.nameIn, breed: vm.breedIn, color: vm.colorIn, checked: vm.checkedIn }
        }).then(function (response) {
            vm.getPets();
            console.log('response', response);
        }) //and then done
     }; //end addPet function
});