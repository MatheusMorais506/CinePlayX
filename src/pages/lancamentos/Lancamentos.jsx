import { useEffect, useState } from "react";
import api, { api_options } from "../../services/api";
import CardLatest from "../../components/cardSerie/CardLatest"
import Menu from '../../components/menu/Menu';

const Trending = () => {
  const [content, setContent] = useState([]);

  const fetchTrending = async () => {
    const { data } = await api.get(
      `/trending/all/day`,api_options());

    console.log(data);

    setContent(data.results);
  };

  useEffect(() => {
    fetchTrending();

  }, []);

  return (
          <div>
          <Menu />
          <div className="content">
              {content.map( (trending) => <CardLatest key={trending.id} serie={trending} />)}
          </div>
          </div>
  );
};

export default Trending;