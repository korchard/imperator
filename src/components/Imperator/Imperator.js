import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Table from './Table';
import './Imperator.css';

const Imperator = () => {
  const dispatch = useDispatch();
  const imperator = useSelector((redux) => redux.imperator);
  const [search, setSearch] = useState('');
  const [pageCount, setPageCount] = React.useState(0);

  useEffect(() => {
    dispatch({ type: 'FETCH_IMPERATOR' });
  }, []);

  const searchCo = () => {
    dispatch({ type: 'FETCH_COMPANY_SEARCH', payload: search });
    console.log('search is', search);
    setSearch('');
  };

  const clearSearch = () => {
    dispatch({ type: 'FETCH_IMPERATOR' });
  };

  return (
    <div className='flexbox2'>
      <div>
        <div className='headerArea'>
          <h1>Imperator</h1>
        </div>
        <div className='imperator-card'>
        <div className='search-imperator'>
          <input
            className='search-input'
            placeholder='Search Company Name'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            className='btnI'
            type='submit'
            name='submit'
            value='Clear'
            onClick={clearSearch}
          >
            Clear
          </button>
          <button
            className='btnI'
            type='submit'
            name='submit'
            value='Find'
            onClick={searchCo}
          >
            Find
          </button>
        </div>
        <div className='tableGrid'>
          <Table data={imperator} pageCount={pageCount} />
        </div>
      </div>
      </div>
    </div>
  );
};

export default Imperator;
