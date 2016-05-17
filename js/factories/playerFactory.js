angular.module('app').factory('playerFactory', function () {
   var service = {};

    var player =[
        {
            id: 1,
            name: 'Андрей Пятов'
        },
        {
            id: 2,
            name: 'Дарио Срна'
        },
        {
            id: 3,
            name: 'Марлос'
        },
        {
            id: 4,
            name: 'Александр Гладкий'
        }
    ];

    service.getPlayer = function () {
      return player;
    };

    return service;
});