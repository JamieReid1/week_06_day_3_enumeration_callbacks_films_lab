const Cinema = function (films) {
  this.films = films;


Cinema.prototype.filmTitles = function () {
  return this.films.map(film => film.title);
};

Cinema.prototype.filmByTitle = function (title) {
  return this.films.find(film => film.title === title)
};


};

module.exports = Cinema;
