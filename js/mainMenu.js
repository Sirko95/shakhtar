var app = angular.module('app', []);

app.directive('menu', function () {
    var menuLists = [
        {
            id: 1,
            nameSection: 'Домашняя страница',
            href: '#/'
        },
        {
            id: 2,
            nameSection: 'Игроки',
            href: '#/player'
        }
    ];
   return {
       link: function (scope, element, attrs) {
           for(var i = 0; i < menuLists.length; i++){
                element.append('<li><a href=' + menuLists[i].href + '>' + menuLists[i].nameSection + '</a></li>');
           }
       }
   }
});