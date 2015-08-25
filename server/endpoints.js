var mongo = require('mongodb');
var Server = mongo.Server;
var Db = mongo.Db;
var server = new Server('localhost', 27017, {auto_reconnect:true});
var db = new Db('moviesdb', server);

db.open(function(err, db) {
  if(!err) {
    console.log('connection to the database is a go');
    db.collection('movies', {strict:true}, function(err, collection) {
      if(err) {
        console.log('Couldn\'t find the collection, let\'s create it and populate it with a question');
        populateDb();
      }
    });
  }
});

exports.addMovieRating = function(request, response) {
  console.log(request.body)

  var movie = {
    movie: request.body.movie,
    movieRating: request.body.movierating
  }

  //console.log(movieRating)

  db.collection('movies', function(err, collection) {
    if(err) {
      console.log(err)
    } else {
      collection.insert(movie, {safe:true}, function(err, result) {
        if(err) {
          console.log('theres been an error adding the movie: ' + err);
          response.send({'error':'theres been an error'});
        } else {
          response.setHeader('Access-Control-Allow-Origin', '*');
          response.send(result);
        }
      });
    }
  });
};

exports.getRatedMovieIds = function(request, response) {

  db.collection('movies', function(err, collection) {
    if(err) {
      console.log(err)
    } else {
      collection.find({}, {'movie.data.id':1, _id:0}).toArray(function(err, result) {
        console.log(result)
        if(err) {
          console.log('theres been an error getting rated movies: ' + err);
          response.send({'error':'theres been an error'});
        } else {
          response.setHeader('Access-Control-Allow-Origin', '*');
          response.send(result);
        }
      });
    }
  });
};


var populateDb = function() {
  var movies = [
    {
        id:1,
        title:'mock movie data?',
        answers: [{'mock data 1': true}, {'mock data 2': false}]
    }];

    db.collection('movies', function(err, collection) {
        collection.insert(movies, {safe:true}, function(err, result) {
          if(err) {
            console.log(err)
          } else {
            console.log('successfully added mock movie')
          }
        });
    });

};
