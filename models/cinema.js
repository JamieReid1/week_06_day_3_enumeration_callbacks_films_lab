const Cinema = function (films) {
  this.films = films;


Cinema.prototype.filmTitles = function () {
  return this.films.map(film => film.title);
};

Cinema.prototype.filmByTitle = function (title) {
  return this.films.find(film => film.title === title)
};

Cinema.prototype.filmByGenre = function (genre) {
  return this.films.filter(film => film.genre === genre);
};


};

module.exports = Cinema;
