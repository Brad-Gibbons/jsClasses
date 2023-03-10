class Media {
    constructor(title) {
      this._title = title
      this._isCheckedOut = false
      this._ratings = []
    }
    get getTitle() {
      return this._title
    }
    get isCheckedOut() {
      return this._isCheckedOut
    }
    get getRatings() {
      return this._ratings
    }
    set checkOut(media) {
      this._isCheckedOut = media
    }
    toggleCheckOutStatus() {
      this._isCheckedOut = !this._isCheckedOut
    }
    getAverageRating(media) {
     let ratingsTotal = this._ratings.reduce((currentSum, rating) => currentSum + rating);
     console.log(ratingsTotal)
     let avg = ratingsTotal / this._ratings.length
  
     return avg
    } 
  
    addRatings(rating) {
      this._ratings.push(rating)
    }
  }
  
  class Book extends Media {
    constructor(author, title, pages ) {
      super(title)
      this._author = author
      this._pages = pages
    }
    get getAuthor() {
      return this._author
    }
    get getPages() {
      return this._pages
    }
  }
  
  const lotr = new Book('tolkien', 'LOTR', 300);
  lotr.addRatings(10)
  lotr.addRatings(8)
  lotr.addRatings(9)
  console.log(lotr.getAverageRating());
  
  lotr.toggleCheckOutStatus();
  console.log(lotr.isCheckedOut);
  
  
  
  class Movie extends Media {
    constructor(director, title, runTime) {
      super(title)
      this._director = director
      this._runTime = runTime
    }
    get getDirector() {
      return this._director
    }
    get getRunTime() {
      return this._runTime
    }
  }
  
  const speed = new Movie('Jan De Bont', 'Speed', 116)
  console.log(speed)
  
  speed.toggleCheckOutStatus();
  
  console.log(speed.isCheckedOut);
  
  speed.addRatings(5)
  speed.addRatings(1)
  speed.addRatings(1)
  
  console.log(speed.getAverageRating())
  
// 
// Add more properties to each class (movieCast, songTitles, etc.)
// Create a CD class that extends Media.
// In .addRating(), make sure input is between 1 and 5.
// Create a method called shuffle for the CD class. The method returns a randomly sorted array of all the songs in the songs property.
// Create class called Catalog that holds all of the Media items in our library.
// // 