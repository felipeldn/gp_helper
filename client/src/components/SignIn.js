import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../redux/actions' 

import API from '../API'

import './SignIn.css'

import useFormInput from '../hooks/useFormInput'

const SignIn = props => {

    const formFields = {
        username: '',
        password: '',
    }

    const [formInput, handleFormChange, resetForm] = useFormInput(formFields)

    const handleFormSubmit = (event) => {
        event.preventDefault()
        // /////////// Need to do this next
        API.signIn({clinician: formInput})
            .then(data => {
                if (data.error) {
                    throw Error(data.error)
                } else {
                    props.log_in(data.user)
                    localStorage.setItem('token', data.jwt)
                }
            })
            .catch(error => alert(error))
        resetForm()
    }

    return (
        <form className='signin-form' onSubmit={handleFormSubmit} >
            <div className='signin-form-container' >
                <div className='signin-form-inner' >
                    <h3>Sign In</h3>
                    <label>Username</label>
                    <input type="text" name='username' id='username' value={formInput.username} onChange={handleFormChange} required />

                    <label>Password</label>
                    <input type="password" name="password" id="password" value={formInput.password} onChange={handleFormChange} required />

                    <input type="submit" value="Sign Up"/>
                </div>
            </div>
        </form>
    )
}

export default connect(null, actions)(SignIn)