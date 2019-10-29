import React from 'react'
import CustomButton from '../custom-button/custom-button.component'
import FormInput from '../form-input/form-input.component'
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'
import './sign-up.styles.scss'
class SignUp extends React.Component {
    constructor(){
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
        }
    }
    handleOnChange = (e) => {
        const {value, name} = e.target
        this.setState({
            ...this.state, 
            [name]: value
        })
    }
    handleSubmit = async e => {
        e.preventDefault()
        const {displayName, email , password , confirmPassword} = this.state

        if(password !== confirmPassword){
            alert('passwords don"t match')
            return;
        }
        try{
            const { user } = await auth.createUserWithEmailAndPassword(email, password)

            createUserProfileDocument(user, {displayName})

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: '',
            })
        }
        catch (err){
            console.error(err)
        }
    }
    render(){
        const {displayName, email , password , confirmPassword} = this.state
        return (
            <div className="sign-up">
                <h2 className="title">I do not have an account</h2>
                <span>Sign up with your email and password</span>

                <form className="sign-up-form" onSubmit={(e) => this.handleSubmit(e) }>
                    <FormInput
                        type="text"
                        name="displayName"
                        value={displayName}
                        onChange={(e) => this.handleOnChange(e)}
                        label="Dispaly Name"
                        required
                    ></FormInput>
                    <FormInput
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => this.handleOnChange(e)}
                        label="Email"
                        required
                    ></FormInput>
                    <FormInput
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => this.handleOnChange(e)}
                        label="Password"
                        required
                    ></FormInput>
                    <FormInput
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => this.handleOnChange(e)}
                        label="Confirm Password"
                        required
                    ></FormInput>
                    <CustomButton type="submit">Sign Up</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp