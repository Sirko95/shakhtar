angular.module('app').factory('playersFactory', function () {
   var service = {};


    var goalkeepers = [
        {
            id: 1,
            name: 'Андрей Пятов',
            img: 'img/players/pyatov.jpg'
        },
        {
            id: 2,
            name: 'Антон Каниболоцкий',
            img: 'img/players/Kanibolotsky.jpg'
        }
    ];

    var defenders = [
        {
            id: 1,
            name: 'Дарио Срна',
            img: 'img/players/Srna.jpg'
        }

    ];

    var midfielders = [
        {
            id: 1,
            name: 'Марлос',
            img: 'img/players/Marlos.jpg'
        }
    ];

    var forwards = [
        {
            id: 1,
            name: 'Александр Гладкий',
            img: 'img/players/gladkyi.jpg'
        }  
    ];

    /*var players =[
        {
            id: 1,
            name: 'Андрей Пятов',
            img: 'img/players/pyatov.jpg'
        },
        {
            id: 2,
            name: 'Дарио Срна',
            img: 'img/players/Srna.jpg'
        },
        {
            id: 3,
            name: 'Марлос',
            img: 'img/players/Marlos.jpg'
        },
        {
            id: 4,
            name: 'Александр Гладкий',
            img: 'img/players/gladkyi.jpg'
        }
    ];*/

    service.getGoalkeepers = function () {
      return goalkeepers;
    };
    service.getMidfielders = function () {
        return midfielders;
    };
    service.getForwards = function () {
        return forwards;
    };
    service.getDefenders = function () {
        return defenders;
    };

    return service;
});