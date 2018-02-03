connector.controller('UserTableCtrl', function ($scope,$ionicPopup, $timeout) {

    $scope.showAlert = function() {
        var alertPopup = $ionicPopup.alert({
        //   title: 'Don\'t eat that!',
          template: 'Your request has been sent successfully'
        });
        alertPopup.then(function(res) {
          console.log('Thank you for not eating my delicious ice cream cone');
        });
      };
   

});
