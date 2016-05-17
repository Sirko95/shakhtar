angular.module('app').controller('playersCtrl', function (playersFactory) {
   this.goalkeepers = playersFactory.getGoalkeepers();
   
   this.defenders = playersFactory.getDefenders();
   
   this.midfielders = playersFactory.getMidfielders();
   
   this.forwards = playersFactory.getForwards();
});