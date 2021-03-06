// Based off the movies rated by the user, which movie do you choose next?
var _ = require('underscore');
// contains functions and make stuff easier.

var ratedMovies = [{'title':'Back to the Future', 'actors':['Michael J. Fox', 'Christopher Lloyd'], 'producers':['John Smith','Michael Smith'],'rating':5, 'points':null},
{'title':'Gangs of New York', 'actors':['Leonardo DiCaprio', 'Daniel Day Lewis'], 'producers':['Jack Jones','Frank Mitchell'],'rating':4, 'points':null}];

var allMovies = [{'title':'Back to the Future 2', 'actors':['Michael J. Fox', 'Christopher Lloyd'], 'producers':['John Smith','Michael Smith'],'rating':null, 'points':0},
{'title':'Inception', 'actors':['Leonardo DiCaprio', 'Joseph Gorden Leavitt'], 'producers':['Joe Johnson','Paul Paulson'],'rating':null, 'points':0}];

function pickMovieBasedOnActors(array, arrayToChooseFrom) {
  for(var i = 0; i < array.length; i++) {
    for(var j = 0; j < arrayToChooseFrom.length; j++) {
      array[i].actors.forEach(function(x) {
        if(_.contains(arrayToChooseFrom[j].actors, x)) {
          arrayToChooseFrom[j].points++;
        }
      })
    }
  }

  arrayToChooseFrom.forEach(function(x) {
    console.log('Title: ' + x.title + ', Points: ' + x.points);
  })
}

pickMovieBasedOnActors(ratedMovies, allMovies)
