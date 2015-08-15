angular.module('netflix', [])
.controller('SampleDataController', function($scope) {
  $scope.ratedMovies = [{'title':'Back to the Future', 'actors':['Michael J. Fox', 'Christopher Lloyd'], 'producers':['John Smith','Michael Smith'],'rating':5, 'points':null},
{'title':'Gangs of New York', 'actors':['Leonardo DiCaprio', 'Daniel Day Lewis'], 'producers':['Jack Jones','Frank Mitchell'],'rating':4, 'points':null}];

  $scope.allMovies = [{'title':'Back to the Future 2', 'actors':['Michael J. Fox', 'Christopher Lloyd'], 'producers':['John Smith','Michael Smith'],'rating':null, 'points':0},
{'title':'Inception', 'actors':['Leonardo DiCaprio', 'Joseph Gorden Leavitt'], 'producers':['Joe Johnson','Paul Paulson'],'rating':null, 'points':0}];

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




