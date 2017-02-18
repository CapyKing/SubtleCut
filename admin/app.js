var subtleCutAdmin = angular.module('subtleCutAdminApp', ['ngResource']);

subtleCutAdmin.controller('filmController', ['$scope', '$resource', 'FilmToUpdate', function ($scope, $resource, FilmToUpdate) {

  var Film = $resource('/api/film');

  Film.query(function (films) {
    $scope.films = films;
  });

  $scope.deleteFilm = function (id, index) {
    var FilmToDelete = $resource('/api/film/:id', {id: id});
    var filmToDelete = new FilmToDelete();
    filmToDelete.$delete(function (res) {
      $scope.films.splice(index, 1);
    });
  };

  $scope.addFilm = function () {
    var film = new Film();
    film.title = $scope.filmTitle;
    console.log(film.title);
    film.url = $scope.filmURL;
    film.$save(function (addedFilm) {
      $scope.films.push(addedFilm); // Saved film object from MongoDB
      $scope.filmTitle = '';
      $scope.filmURL = '';
    });
  };

  $scope.editFilm = function (id) {
    var filmToUpdate = FilmToUpdate.get({id:id});
    filmToUpdate.title = $scope.filmTitle;
    filmToUpdate.url = $scope.filmURL;
    FilmToUpdate.update({id:id}, filmToUpdate);
  };

}]);

subtleCutAdmin.factory('FilmToUpdate', ['$resource', function($resource) {
return $resource('/api/film/:id', null,
{
    'update': { method:'PUT' }
});
}]);

subtleCutAdmin.filter('trusted', ['$sce', function ($sce) {
  return function(url) {
          var video_id = url.split('v=')[1].split('&')[0];
      return $sce.trustAsResourceUrl("https://www.youtube.com/embed/" + video_id);
}}]);
