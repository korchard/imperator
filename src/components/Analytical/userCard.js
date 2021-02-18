import { useState } from 'react'
import { useDispatch } from 'react-redux';
import './Analytical.css'
import Swal from 'sweetalert2';

// the cards render after searching for users on the analytical page
const UserCard = (props) => {
    const dispatch = useDispatch()
    const [editMode, setEditMode] = useState(false) 
    const { firstname, lastname, company, email } = props.item
    const [newEmail, setNewEmail] = useState('')


    const editUserEmail = (initEmail, newEmail, firstname, lastname) => {
        Swal.fire({
            title: 'Wait!',
            text: `Are you sure you want to change the email from ${initEmail} to ${newEmail} for ${firstname} ${lastname}?`,
            icon: 'warning',
            heightAuto: false,
            showCancelButton: true,
            confirmButtonText: 'Yes',
            cancelButtonText: 'Cancel'
        }).then((result) => {
            if (result.value) {
                Swal.fire(
                    'Success!',
                    'Email Updated',
                    'success',
                    false
                ) // end Swal IF
                dispatch({ type: 'EDIT_USER_EMAIL', payload: {initEmail: initEmail, newEmail: newEmail, search: props.search}})
                setEditMode(!editMode)
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire(
                    'Cancelled',
                    'Email not updated',
                    'error',
                    false
                )
            } //end else if
        }) // end Swal .then
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
                <button className='updateEditBtn' onClick={() => editUserEmail(email, newEmail, firstname, lastname)}>Edit Email</button>
                <button className='updateEditBtn' onClick={() => setEditMode(!editMode)}>Cancel</button>
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
