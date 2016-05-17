angular.module('app').controller('playerCtrl', function (playerFactory) {
   this.list = playerFactory.getPlayer();
});