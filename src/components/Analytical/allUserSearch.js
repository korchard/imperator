import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'

const AllUserSearch = () => {
  const dispatch = useDispatch();
  const userSearch = useSelector((store) => store.aureliusUserSearch)  
  const [search, setSearch] = useState();  

  const searchAllUsers = () => {
    dispatch({ type: 'FETCH_AURELIUS_USER', payload: search })
    setSearch('')
}

console.log('Search Results', userSearch);
    return (
        <div>
            <input 
                className="search-input" 
                placeholder="Search Aurelius By User Email" 
                value={search}
                onChange={(e) => setSearch(e.target.value)} 

            />
            <button onClick={searchAllUsers}>Search Aurelius</button>
            <div className='allCardContainer'>
                {
                    userSearch.map(item => {
                        return (
                            <div>
                                <div className='singleCardContainer'>
                                {item.firstname} {item.lastname}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default AllUserSearch