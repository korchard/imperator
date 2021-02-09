import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useHistory, Link } from 'react-router-dom';
import Moment from 'react-moment';
// import Pagination from './Pagination';
import Table from './Table';

import './Imperator.css';

const Imperator = () => {

  const dispatch = useDispatch();
  const imperator = useSelector((redux) => redux.imperator.imperator);
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const [data, setData] = useState([]);
  const [loading, setLoading] = React.useState(false)
  const [pageCount, setPageCount] = React.useState(0)
  const fetchIdRef = React.useRef(0)


  const fetchData = React.useCallback(({ pageSize, pageIndex }) => {
    // This will get called when the table needs new data
    // You could fetch your data from literally anywhere,
    // even a server. But for this example, we'll just fake it.

    // Give this fetch an ID
    const fetchId = ++fetchIdRef.current

    // Set the loading state
    setLoading(true)

    // We'll even set a delay to simulate a server here
    setTimeout(() => {
      // Only update the data if this is the latest fetch
      if (fetchId === fetchIdRef.current) {
        const startRow = pageSize * pageIndex
        const endRow = startRow + pageSize
        setData(imperator.slice(startRow, endRow))

        // Your server could send back total page count.
        // For now we'll just fake it, too
        setPageCount(Math.ceil(imperator.length / pageSize) > 0 ? Math.ceil(imperator.length / pageSize) : 1)

        setLoading(false)
      }
    }, 1000)
  }, [])

  useEffect(() => {
    dispatch({ type: 'FETCH_IMPERATOR' })
    // fetchData();

  }, [])

  // const configurations = (imperator) => {
  //   if (imperator.jira && imperator.zapier) {
  //     return <td>jira, zapier</td>
  //   } else if (imperator.jira && !imperator.zapier) {
  //     return <td>jira</td>
  //   } else if (imperator.zapier && !imperator.jira) {
  //     return <td>zapier</td>
  //   }
  // }

  const searchCo = () => {
    dispatch({ type: 'FETCH_COMPANY_SEARCH', payload: search });
    console.log('search is', search)
    setSearch('');
  }

  const clearSearch = () => {
    dispatch({ type: 'FETCH_IMPERATOR' });
  }

  return (
    <div className="imperator">
      <h1>Imperator</h1>
      <div className="search-imperator">
        <input className="search-input"
          placeholder="Search Company Name"
          value={search}
          onChange={(e) => setSearch(e.target.value)} />
        <button className='btnI' type='submit'
          name='submit' value='Clear'
          onClick={clearSearch}>
          Clear
        </button>
        <button className='btnI' type='submit'
          name='submit' value='Find'
          onClick={searchCo}>
          Find
        </button>

      </div>
      <h3>Company Info</h3>
      <Table data={imperator} fetchData={fetchData} loading={loading} pageCount={pageCount} />

    </div>
  );
}

export default Imperator;