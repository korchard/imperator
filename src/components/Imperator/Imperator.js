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

  const PER_PAGE = 10;
  const offset = currentPage * PER_PAGE;
  const currentPageData = imperator
    .slice(offset, offset + PER_PAGE)
    .map(({ imperator }) => <img src={imperator} />);
  const pageCount = Math.ceil(imperator.length / PER_PAGE);


  useEffect(() => {
    dispatch({ type: 'FETCH_IMPERATOR' })
    fetchData();
  }, [])

  const configurations = (imperator) => {
    if (imperator.jira && imperator.zapier) {
      return <td>jira, zapier</td>
    } else if (imperator.jira && !imperator.zapier) {
      return <td>jira</td>
    } else if (imperator.zapier && !imperator.jira) {
      return <td>zapier</td>
    }
  }

  const searchCo = () => {
    dispatch({ type: 'FETCH_COMPANY_SEARCH', payload: search });
    console.log('search', search);
    setSearch('');
  }

  function fetchData(imperator) {
    setData(imperator);
  };


  function handlePageClick({ selected: selectedPage }) {
    console.log('CLICKED')
    setCurrentPage(selectedPage);
  }

  return (
    <div className="imperator">
      <h1>Imperator</h1>
      <div className="search-imperator">
        <input className="search-input" placeholder="Search" value={search}
          onChange={(e) => setSearch(e.target.value)} />
        <button className='btnI' type='submit'
          name='submit' value='Find'
          onClick={searchCo}>
          Find
          </button>
      </div>
     <div>
       <Table data={imperator}/> 
     </div>
      </div>
  );
}

export default Imperator;