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

var populateDb = function() {
  var questions = [
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
