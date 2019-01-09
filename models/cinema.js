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

Cinema.prototype.findByYear = function (year) {
  const foundFilms = this.films.filter(film => film.year === year);
  if (foundFilms.length === 0) {
    return 'There are no films from this year.'
  } else {
    return foundFilms;
  };  
};


};

module.exports = Cinema;
