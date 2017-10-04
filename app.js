var movie = require("./movie");
var threeFavoriteMovies = ["Fight Club", "Pulp Fiction", "Django Unchained"];
threeFavoriteMovies.forEach(function(film){
			movie(film);
});
