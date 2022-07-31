import { useEffect, useState } from 'react';

function Week() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getWeeklyMovies = async () => {
    const json = await (
      await fetch(
        `	http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20220731`
      )
    ).json();
    setMovies(json.boxOfficeResult.weeklyBoxOfficeList);
    setLoading(false);
    console.log(json.boxOfficeResult.weeklyBoxOfficeList);
  };

  // 페이지 들어오면 자동으로 한 번 실행
  useEffect(() => {
    getWeeklyMovies();
  }, []);

  return (
    <>
      <h2>주간/주말 박스오피스</h2>
      <input type='date' max='2022-12-31' />
      {loading ? (
        <p>loading...</p>
      ) : (
        <div>
          {movies.map(movie => (
            <div key={movie.rnum}>
              <p>{movie.movieNm}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default Week;
