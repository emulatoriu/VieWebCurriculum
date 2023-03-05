const fs = require('fs').promises;

const FILE_PATH = './movies.json';

async function getMovies() {
  const data = await fs.readFile(FILE_PATH);
  const movies = JSON.parse(data);
  return movies;
}

async function writeMovies(movies) {
  const data = JSON.stringify(movies);
  await fs.writeFile(FILE_PATH, data);
}

async function addMovie(movie) {
  const movies = await getMovies();
  movies.push(movie);
  await writeMovies(movies);
}

async function deleteMovie(id) {
  const movies = await getMovies();

  const index = movies.findIndex((movie) => movie.id === id);
  if (index === -1) {
    throw new Error('Movie not found');
  }

  movies.splice(index, 1);
  await writeMovies(movies);
}

module.exports = {
  getMovies,
  addMovie,
  deleteMovie,
};
