/**
 * Человек.
 * @param {string} name
 */
function Person(name, watchedMovies) {
  this.name = name;
  this.watchedMovies = watchedMovies;
  this.play = function(movie) {
    if(!this.watchedMovies.includes(movie)) {
      console.log('You added "' + movie + '" to your collection of ' + this.watchedMovies.push(movie) + ' movies')
    } else {
      console.log('You have watched this movie!')
    }
  }
}

Person.prototype.watchMovie = function (movie) {
  return this.play(movie)
};

const tom = new Person('Tom', ['Comodo', 'Makebo', 'Bundi', 'Klakozi'])
tom.watchMovie('Bukurundi')
console.log('The movies which Tom has watched: \n', {...tom.watchedMovies})



module.exports = { Person };
