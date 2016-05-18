angular.module('app').factory('playersFactory', function () {
   var service = {};


    var players = [
        {
            id: 1,
            name: 'Андрей Пятов',
            img: 'img/players/pyatov.jpg',
            position: 'goalkeepers'
        },
        {
            id: 2,
            name: 'Антон Каниболоцкий',
            img: 'img/players/Kanibolotsky.jpg',
            position: 'goalkeepers'
        },
        {
            id: 3,
            name: 'Дарио Срна',
            img: 'img/players/Srna.jpg',
            position: 'defenders'
        },
        {
            id: 4,
            name: 'Марлос',
            img: 'img/players/Marlos.jpg',
            position: 'midfielders'
        },
        {
            id: 5,
            name: 'Александр Гладкий',
            img: 'img/players/gladkyi.jpg',
            position: 'forwards'
        }
    ];




    service.getGoalkeepers = function () {
        var goalkeepers = [];
        for(var i = 0; i < players.length; i++){
            if(players[i].position === 'goalkeepers'){
                goalkeepers.push(players[i]);
            }
        }
        return goalkeepers;
    };
    service.getMidfielders = function () {
        var midfielders = [];
        for(var i = 0; i < players.length; i++){
            if(players[i].position === 'midfielders'){
                midfielders.push(players[i]);
            }
        }
        return midfielders;
    };
    service.getForwards = function () {
        var forwards = [];
        for(var i = 0; i < players.length; i++){
            if(players[i].position === 'forwards'){
                forwards.push(players[i]);
            }
        }
        return forwards;
    };
    service.getDefenders = function () {
        var defenders = [];
        for(var i = 0; i < players.length; i++){
            if(players[i].position === 'defenders'){
                defenders.push(players[i]);
            }
        }
        return defenders;
    };

    return service;
});