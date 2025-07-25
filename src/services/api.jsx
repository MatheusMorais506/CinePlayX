import axios from "axios";

export default axios.create({
  baseURL: "https://api.themoviedb.org/3/"
});

export function api_options() {
  return {
    params:{
      // api_key:process.env.REACT_APP_KEY ,
      // language:process.env.REACT_APP_LANG
        api_key:'33e0e563cce9786eea14d6fc198c9afe',
        language:'pt-BR'
  }
  };
}
