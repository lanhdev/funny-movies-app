const dev = {
  API_PATH: "http://localhost:3000",
};

const prod = {
  API_PATH: "",
};

const config = process.env.REACT_APP_STAGE === "production" ? prod : dev;

export default {
  ...config,
  BASE_EMBED_URL: "https://www.youtube.com/embed/",
};
