angular.module('netflix', [])
.controller('SampleDataController', function($http, $scope) {
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
      $scope.movies = $scope.movies.map(function(x) {
        return {data:x, rating:'?'}
      })
      // filter for the rated movies here .filter, _.contains
      $scope.toggleGenres();
      $scope.toggleMovies();
      $scope.$apply()},
    function(error){
      console.log(error)
    })
  };

  $scope.movieImages;
  $scope.movieTrailers;
  $scope.singleMovieVisibility = false;
  $scope.pickMovie = function(movie) {
    // just images
    theMovieDb.movies.getImages({'id':movie.data.id},
    function(data){
      console.log(data)
      $scope.movieImages = JSON.parse(data).backdrops;
      $scope.toggleMovies();
      $scope.toggleSingleMovie();
      $scope.$apply()
    },
    function(error){
      console.log(error)
    })

    theMovieDb.movies.getTrailers({'id':movie.data.id},
    function(data){
      var movieTrailerCallResults = JSON.parse(data).youtube;

      $scope.movieTrailers = movieTrailerCallResults.filter(function(x) {
        return x.type === "Trailer"
      })

      $scope.$apply();
    },
    function(error){
      console.log(error)
    })
    // other calls for movie info
  };

  $scope.rating = function(movie, movieRating) {

    var postReq = {
      method: 'POST',
      headers: {
        'Access-Control-Allow-Origin':'*'
      },
      url: 'http://www.localhost:3001/movieratings',
      data: {movie: movie, movierating: movieRating}
    }

    $http(postReq)
    .then(function(data) {
      console.log('success')
    },
    function(data) {
      console.log('error')
    })
  }

  $scope.ratedMovies = [];

  $http.get('http://www.localhost:3001/movieratingids')
  .then(function(data) {
    data.data.forEach(function(x) {
      $scope.ratedMovies.push(x.movie.data.id)
    })
  });


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
.directive('filter', function() {
  return {
    templateUrl: './widgets/filter.html'
  }
})
.directive('genrePickingView', function() {
  return {
    templateUrl: './views/genrepickingview.html'
  }
})
.directive('moviesListingView', function() {
  return {
    templateUrl: './views/movieslistingview.html'
  }
})
.directive('singleView', function() {
  return {
    templateUrl: './views/singleMovie.html'
  }
})




