var subtleCut = angular.module('subtleCutApp', ['ngResource']);

subtleCut.controller('filmController', ['$scope', '$resource', function ($scope, $resource) {

  var Film = $resource('/api/film');

  Film.query(function (films) {
    $scope.films = films;
  });

}]);

subtleCut.filter('trusted', ['$sce', function ($sce) {
  return function(url) {
          var video_id = url.split('v=')[1].split('&')[0];
      return $sce.trustAsResourceUrl("https://www.youtube.com/embed/" + video_id);
}}]);

subtleCut.controller('contentController', ['$scope', '$resource', function ($scope, $resource) {

  var Content = $resource('/api/content');

  Content.query(function (content) {
    $scope.content = content;
    console.log(content);
  });

}]);
