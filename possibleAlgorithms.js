// recommendation methods
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
