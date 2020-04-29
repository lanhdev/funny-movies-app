const dev = {
  API_PATH: "http://localhost:3000",
};

const prod = {
  API_PATH: "https://funny-movies-api.herokuapp.com",
};

const config = process.env.NODE_ENV === "production" ? prod : dev;

export default {
  ...config,
  YOUTUBE_EMBED_URL: "https://www.youtube.com/embed/",
  YOUTUBE_API_URL: "https://www.googleapis.com/youtube/v3/videos",
  YOUTUBE_API_KEY: "AIzaSyBS5QAF7S5mw3Ba4x--AfW3T40CjWRK5jQ",
};
