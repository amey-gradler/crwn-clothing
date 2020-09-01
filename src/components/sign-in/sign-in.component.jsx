import React, { Component } from 'react'

import '../sign-in/sign-in.styles.scss'
import FormInput from '../form-input/form-input.components'
import CustomButton from '../custom-button/custom-button.component'

import {signInWithGoogle} from '../../firebase/firebase.utils'

class SignIn extends React.Component {

    constructor(props){
        super(props);

        this.state ={
            email : '' ,
            password : ''
        }
    }

    handleSubmit = (event)=>{
        event.preventDefault();

        this.setState({email:'' , password:''})

    }

    handelChange = (event)=>{
        const {value,name}=event.target
        this.setState({  [name]:value  })
    }

    render() {
        return(
            <div className='sign-in'>
                <h2>Already have an Account?</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput type='email' name='email' value={this.state.email} required handleChange={this.handelChange} label="email"/>
                  
                    <FormInput type='password' name='password' value={this.state.password} label="password" required handleChange={this.handelChange}/>
                    
                    <div className='buttons'>

                    <CustomButton type='submit'>Sign In</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn