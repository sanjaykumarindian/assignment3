// script.js
document.addEventListener('DOMContentLoaded', function() {
  const movieContainer = document.getElementById('movie-container');
  const genreSelect = document.getElementById('genre-select');
  const videosFolder = 'videos/'; // Folder path where the movie trailers are stored

  // Movie data with title, genre, and video file name
  const moviesData = [
    {
      title: 'Movie 1',
      genre: 'Action',
      video: 'movie1.mp4'
    },
    {
      title: 'Movie 2',
      genre: 'Drama',
      video: 'movie2.mp4'
    },
    {
      title: 'Movie 3',
      genre: 'Comedy',
      video: 'movie3.mp4'
    }
    // Add more movie data as needed
  ];

  // Fetch movies based on the selected genre and display them
  function filterMoviesByGenre() {
    const selectedGenre = genreSelect.value;

    // Filter movies based on genre
    const filteredMovies = selectedGenre
      ? moviesData.filter(movie => movie.genre.toLowerCase() === selectedGenre.toLowerCase())
      : moviesData;

    // Clear movie container
    movieContainer.innerHTML = '';

    // Loop through the filtered movie data and create movie cards
    filteredMovies.forEach(movie => {
      const card = createMovieCard(movie);
      movieContainer.appendChild(card);
    });
  }

  // Create a movie card based on the movie data
  function createMovieCard(movie) {
    const card = document.createElement('div');
    card.className = 'movie-card';

    const title = document.createElement('h2');
    title.textContent = movie.title;

    const genre = document.createElement('p');
    genre.textContent = `Genre: ${movie.genre}`;

    const video = document.createElement('video');
    video.src = videosFolder + movie.video;
    video.controls = true;

    card.appendChild(title);
    card.appendChild(genre);
    card.appendChild(video);

    return card;
  }

  // Fetch movies initially and when genre selection changes
  genreSelect.addEventListener('change', function() {
    filterMoviesByGenre();
  });

  // Fetch all movies initially
  filterMoviesByGenre();
});
