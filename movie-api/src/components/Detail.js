import { useEffect, useState } from 'react';

function Detail({ movieCd }) {
  const [detail, setDetail] = useState([]);

  const getDetailsMovies = async () => {
    const moviedetail = await (
      await fetch(
        `https://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=f5eef3421c602c6cb7ea224104795888&movieCd=${movieCd}`
      )
    ).json();
    const Detail = moviedetail.movieInfoResult.movieInfo;
    setDetail(Detail);
    console.log(Detail);
  };
  useEffect(() => {
    getDetailsMovies();
  }, []);
  return (
    <>
      <p>{detail.movieNmEn}</p>
      <ul>
        {detail.genres.map(g => (
          <p>{g[0]}</p>
        ))}
      </ul>
      <p>{detail.genres}</p>
      <p>---</p>
    </>
  );
}

export default Detail;
