import { useEffect, useState, useRef } from 'react';
import Detail from './Detail';

function Daily() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [date, setDate] = useState([]);
  const [inputDate, setInputDate] = useState([]);

  const dateRef = useRef();

  // 비동기로 영화 api 불러오기
  const getDailyMovies = async () => {
    const daymovie = await (
      await fetch(
        `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20210220`
      )
    ).json();

    const Title = daymovie.boxOfficeResult.dailyBoxOfficeList;
    console.log(Title);
    setMovies(Title);
    setLoading(false);
  };

  // 페이지 들어오면 자동으로 한 번 실행
  useEffect(() => {
    getDailyMovies();
  }, dateOnSubmit);

  // input date 날짜 클릭 시, 해당 날짜 받아오기
  function dateOnClick(event) {
    // console.log(event.target.value);
    console.log(dateRef.current.value);
    setDate(event.target.value);
  }
  // input date 날짜 입력 후 엔터 시, 해당 날짜 받아오기
  function dateOnSubmit(event) {
    console.log(event.target.value);
    setInputDate(event.target.value);
  }
  // const today = new Date() -> input type max 오늘날짜 넣을 수 있게 하기
  return (
    <>
      <h2>일별 박스오피스</h2>
      <input
        type='date'
        onChange={dateOnClick}
        max='2022-12-31'
        ref={dateRef}
      />
      <input type='text' maxLength='8' onChange={dateOnSubmit} />
      <p>{date}</p>
      <p>{inputDate}</p>
      {loading ? (
        <p>loading...</p>
      ) : (
        <div>
          {movies.map(movie => (
            <div key={movie.rnum}>
              <p>{movie.movieNm}</p>
              <Detail movieCd={movie.movieCd} />
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default Daily;
