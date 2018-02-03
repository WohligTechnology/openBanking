connector.controller('UserTableCtrl', function ($scope,$ionicPopup, $timeout) {

    $scope.showConfirm = function() {
        var confirmPopup = $ionicPopup.confirm({
        //   title: 'Consume Ice Cream',
          template: 'Are you sure you want to  this ice cream?'
        });
        confirmPopup.then(function(res) {
          if(res) {
            console.log('You are sure');
          } else {
            console.log('You are not sure');
          }
        });
      };

});
