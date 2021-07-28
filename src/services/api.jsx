import axios from "axios";

const config = {
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "text/plain",
  },
};

export default axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  https: config,
});

export function api_options() {
  return {
    params:{
      api_key:process.env.REACT_APP_KEY ,
      language:process.env.REACT_APP_LANG
  }
  };
}
