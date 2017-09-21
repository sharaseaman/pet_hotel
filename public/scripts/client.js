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

    vm.deletePet = function() {
        var theThing = vm.pet.id;
        console.log('In deletePet with vm ->', theThing);

        // $http({
        //     method: 'DELETE',
        //     url: '/pet',
        //     data: 
        // })
    }
}); //end controller function
