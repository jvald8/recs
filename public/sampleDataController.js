angular.module('netflix', [])
.controller('SampleDataController', function($scope) {
  $scope.ratedMovies = [{'title':'Back to the Future', 'actors':['Michael J. Fox', 'Christopher Lloyd'], 'producers':['John Smith','Michael Smith'],'rating':5, 'points':null},
{'title':'Gangs of New York', 'actors':['Leonardo DiCaprio', 'Daniel Day Lewis'], 'producers':['Jack Jones','Frank Mitchell'],'rating':4, 'points':null}];

  $scope.allMovies = [{'title':'Back to the Future 2', 'actors':['Michael J. Fox', 'Christopher Lloyd'], 'producers':['John Smith','Michael Smith'],'rating':null, 'points':0},
{'title':'Inception', 'actors':['Leonardo DiCaprio', 'Joseph Gorden Leavitt'], 'producers':['Joe Johnson','Paul Paulson'],'rating':null, 'points':0}];

  $scope.genres;
  $scope.genrePickerVisibility = true;

  $scope.getListOfGenres = theMovieDb.genres.getList({},
    function(data){
      $scope.genres = JSON.parse(data).genres;
      console.log(data)
      console.log('success')},
    function(error){
      console.log(error)
      console.log('error')}
  );

  $scope.pickGenre = function(genre) {
    theMovieDb.genres.getMovies({'id':genre.id},
    function(data){
      $scope.genreMovies = JSON.parse(data);
      console.log(data)
      console.log('success')
      $scope.genrePickerVisibility = false;
      $scope.$apply()},
    function(error){
      console.log(error)
      console.log('error')}
  )};

  $scope.pickMovieBasedOnActors = function(array, arrayToChooseFrom) {
    for(var i = 0; i < array.length; i++) {
      for(var j = 0; j < arrayToChooseFrom.length; j++) {
        array[i].actors.forEach(function(x) {
          if(_.contains(arrayToChooseFrom[j].actors, x)) {
            arrayToChooseFrom[j].points++;
          }
        })
      }
    }

    $scope.allMovies = arrayToChooseFrom;

    arrayToChooseFrom.forEach(function(x) {
      console.log('Title: ' + x.title + ', Points: ' + x.points);
    })

  }
  //invoking method
  //$scope.pickMovieBasedOnActors(ratedMovies, allMovies);

})




