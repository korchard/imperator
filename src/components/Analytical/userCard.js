import React, { useState } from 'react'
import {useDispatch} from 'react-redux';
import './Analytical.css'

const UserCard = (props) => {
    const dispatch = useDispatch()
    const [editMode, setEditMode] = useState(false) 
    const { firstname, lastname, company, email } = props.item
    const [newEmail, setNewEmail] = useState('')

    const editUserEmail = (initEmail, newEmail) => {
        dispatch({ type: 'EDIT_USER_EMAIL', payload: {initEmail: initEmail, newEmail: newEmail, search: props.search}})
        setEditMode(!editMode)
    }


    return (
        <>
            <div>
                {company} 
            </div>    
            <div>
                {firstname} {lastname}
            </div>
            {editMode ? 
            <>
                <input 
                    type='text'
                    onChange={(e) => setNewEmail(e.target.value)} 
                    className='editInput'
                    />
                <button className='updateEditBtn' onClick={() => editUserEmail(email, newEmail)}>Edit Email</button>
                <button onClick={() => setEditMode(!editMode)}>Cancel</button>
            </>
            :
            <>
                {email}
                <button className='updateEditBtn' onClick={() => setEditMode(!editMode)}>Update</button>
            </>
            }
        </>
    )
}

export default UserCard;
