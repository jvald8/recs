var express = require('express'),
app = express(),
bodyParser = require('body-parser'),
endpoints = require('./endpoints.js');

app.use(express.static('public'));
app.use(bodyParser.json());

app.post('/movieratings', endpoints.addMovieRating);
app.get('/movieratingids', endpoints.getRatedMovieIds);
app.get('/ratedmovies', endpoints.getRatedMovies);
/*app.put('/questions/:id', questions.updateQuestion);
app.delete('/questions/:id', questions.deleteQuestion);

app.get('/surveys', questions.getAllSurveys);
app.post('/surveys', questions.addSurvey);*/

app.listen(process.env.PORT || 3001, function() {
  console.log('server started on 3001')
})
