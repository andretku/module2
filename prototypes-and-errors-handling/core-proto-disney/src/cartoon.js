/**
 * Мультфильм.
 * @param {string} title - Name of the cartoon
 * @param {number} year - When it released (1990)
 * @param {boolean} forChildren - true/false
 * @param {string} beginning - Several words from the beginning of the cartoon
 */
function Cartoon(title, year, forChildren = true, beginning = 'Long, long ago...') {
  this.title = title;
  this.year = year;
  this.forChildren = forChildren;
  this.beginning = beginning;
}
Cartoon.prototype.getDescription = function () {   };
Cartoon.prototype.play = function () {   };

/**
 * Мульт студии Walt Disney.
 */
function DisneyCartoon(title, year, forChildren, beginning) {
  Cartoon.call(this, title, year, forChildren, beginning)
  this.studio = 'Walt Disney';
}
DisneyCartoon.prototype = new Cartoon();
DisneyCartoon.prototype.constructor = DisneyCartoon;


/**
 * Мульт студии DreamWorks.
 */
function DreamWorksCartoon(title, year, forChildren, beginning) {
  Cartoon.call(this, title, year, forChildren, beginning)
  this.studio = 'DreamWorks';
}
DreamWorksCartoon.prototype = new Cartoon();
DreamWorksCartoon.prototype.constructor = DreamWorksCartoon;



const cartDisney = new DisneyCartoon('Tom', 1989, true, 'Once upon a time...')
const cartDream = new DreamWorksCartoon('Mougli', 1995, true)
console.log(cartDisney)
console.log(cartDream)



module.exports = { Cartoon, DisneyCartoon, DreamWorksCartoon };
