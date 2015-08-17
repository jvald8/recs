angular.module('netflix', [])
.controller('SampleDataController', function($scope) {
  // genre view
  $scope.genres;
  $scope.genrePickerVisibility = true;
  $scope.getListOfGenres = theMovieDb.genres.getList({},
    function(data){
      $scope.genres = JSON.parse(data).genres;
      console.log(data)},
    function(error){
      console.log(error)}
  );

  // movies view
  $scope.movies;
  $scope.movieListingVisibility = false;
  $scope.pickGenre = function(genre) {
    theMovieDb.genres.getMovies({'id':genre.id},
    function(data){
      $scope.movies = JSON.parse(data).results;
      $scope.toggleGenres();
      $scope.toggleMovies();
      $scope.$apply()},
    function(error){
      console.log(error)
    })
  };

  $scope.imageUri = theMovieDb.common.images_uri;
  $scope.singleMovie;
  $scope.singleMovieVisibility = false;
  $scope.pickMovie = function(movie) {
    // just images
    theMovieDb.movies.getImages({'id':movie.id},
    function(data){
      console.log(data)
      $scope.singleMovie = JSON.parse(data).backdrops;
      $scope.toggleMovies();
      $scope.toggleSingleMovie();
      $scope.$apply()},
    function(error){
      console.log(error)
    })
    // other calls for movie info
  };

  $scope.toggleGenres = function() {
    $scope.genrePickerVisibility = !$scope.genrePickerVisibility;
  }

  $scope.toggleMovies = function() {
    $scope.movieListingVisibility = !$scope.movieListingVisibility;
  }

  $scope.toggleSingleMovie = function() {
    $scope.singleMovieVisibility = !$scope.singleMovieVisibility;
  }

})




