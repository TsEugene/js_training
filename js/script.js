let numberOfFilms = +prompt("How many films?", "");
console.log(numberOfFilms);

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt("Last film", ""),
      b = prompt("Rating", ""),
      c = prompt("Last film", ""),
      d = prompt("Rating", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);