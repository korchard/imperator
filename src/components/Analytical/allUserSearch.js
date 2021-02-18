import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserCard from './userCard';
import './Analytical.css';

// search bar for all users within Aurelius 
const AllUserSearch = () => {
    const dispatch = useDispatch();
    const userSearch = useSelector((store) => store.aureliusUserSearch);
    const [search, setSearch] = useState('');  

    const searchAllUsers = () => {
        dispatch({ type: 'FETCH_AURELIUS_USER', payload: search });
    };

    const clearAllUsers = () => {
        dispatch({ type: 'CLEAR_USER_SEARCH' });
        setSearch('');
    };

    return (
        <>
            <div>
                <input 
                    className="input" 
                    placeholder="Search Users By Email" 
                    onChange={(e) => setSearch(e.target.value)} 
                    value={search}
                />
                <button className='btnI' onClick={clearAllUsers}>
                    Clear
                </button>
                <button className='btnI' onClick={searchAllUsers}>
                    Find
                </button>
            </div>
            <div className='allCardContainer'>
                {userSearch.map((item, i) => {
                    return (
                        <div className='singleCardContainer' key={i}>
                            {/* these are the individual cards that render after a search */}
                            <UserCard item={item} search={search} />
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default AllUserSearch;
