import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import instance from '../../api/axios';

const DetailPage = () => {
  let { movieId } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await instance.get(`/movie/${movieId}`);
      setMovie(response.data);
      console.log(response);
    };

    fetchData();
  }, [movieId]);

  if (!movie) return;

  return (
    <section>
      <img
        className='modal-poster-img'
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        alt='img'
      />
    </section>
  );
};

export default DetailPage;
