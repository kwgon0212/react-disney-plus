import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import instance from '../../api/axios';
import './SearchPage.css';
import useDebounce from '../../hooks/useDebounce';

const SearchPage = () => {
  const [searchResult, setSearchResult] = useState([]);

  const useQuery = () => new URLSearchParams(useLocation().search);
  const navigate = useNavigate();

  let query = useQuery();
  const searchTerm = query.get('q');
  const debounceSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    const fetchSearchMovie = async (searchTerm) => {
      try {
        const response = await instance.get(
          `/search/multi?include_adult=false&query=${searchTerm}`
        );
        setSearchResult(response.data.results);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };

    if (debounceSearchTerm) {
      fetchSearchMovie(debounceSearchTerm);
    }
  }, [debounceSearchTerm]);

  if (searchResult.length > 0) {
    return (
      <section className='search-container'>
        {searchResult.map((movie) => {
          if (movie.backdrop_path !== null && movie.media_type !== 'person') {
            const movieImageUrl = `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`;
            return (
              <div className='movie' key={movie.id}>
                <div
                  className='movie-column-poster'
                  onClick={() => navigate(`/${movie.id}`)}
                >
                  <img
                    src={movieImageUrl}
                    alt='movie'
                    className='movie-poster'
                  />
                </div>
              </div>
            );
          }
        })}
      </section>
    );
  } else {
    return (
      <section className='no-results'>
        <div>
          <p>찾고자하는 검색어 "{searchTerm}"에 맞는 영화가 없습니다.</p>
        </div>
      </section>
    );
  }
};

export default SearchPage;
