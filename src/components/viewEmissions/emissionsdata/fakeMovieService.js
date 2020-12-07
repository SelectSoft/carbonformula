

const movies = [
  {
    _id: "1",
    title: "1. Electricity Usage",
    checkbox: true,
    value: "Tones CO2",
  },
  {
    _id: "2",
    title: "2. Fuel Usage",
    checkbox: false,
    value: "Tones CO2"
  },
  {
    _id: "3",
    title: "3. Bio-energy usage",
    checkbox: false,
    value: "Tones CO2"
  },
  {
    _id: "4",
    title: "4. Refrigerant usage",
    checkbox: false,
    value: "Tones CO2"
  },
  {
    _id: "5",
    title: "5. Heat and Steam",
    checkbox: false,
    value: "Tones CO2"
  },
  {
    _id: "6",
    title: "6. Material use",
    checkbox: false,
    value: "Tones CO2"
  },
  {
    _id: "7",
    title: "7. Water Supply",
    checkbox: false,
    value: "Tones CO2"
  },
  {
    _id: "8",
    title: "8. Water Treatment",
    checkbox: false,
    value: "Tones CO2"
  },
  {
    _id: "9",
    title: "9. Water Disposal",
    checkbox: false,
    value: "Tones CO2"
  }
];

export function getMovies() {
  return movies;
}

export function getMovie(id) {
  return movies.find(m => m._id === id);
}

export function saveMovie(movie) {
  let movieInDb = movies.find(m => m._id === movie._id) || {};
  movieInDb.name = movie.name;
  movieInDb.value = movie.value;

  if (!movieInDb._id) {
    movieInDb._id = Date.now();
    movies.push(movieInDb);
  }

  return movieInDb;
}

export function deleteMovie(id) {
  let movieInDb = movies.find(m => m._id === id);
  movies.splice(movies.indexOf(movieInDb), 1);
  return movieInDb;
}
