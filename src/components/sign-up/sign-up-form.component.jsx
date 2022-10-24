import { useState, useContext } from "react"
import './sign-up-form.style.scss'
import Button from "../button/button.component"
import FormInput from "../form-input/form-input.component"
import {
    createAuthUserWithEmailAndPassword,
    createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils"
const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { displayName, email, password, confirmPassword } = formFields

    const resetFormFields=()=>{
        setFormFields(defaultFormFields)
    }
    const handleSubmit = async (event) => {
        event.preventDefault()

        if (password !== confirmPassword) {
            alert(`Please enter correct password`)
            return
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(
                email,
                password
            )
            await createUserDocumentFromAuth(user, { displayName })
            resetFormFields()
        } catch (error) {
            if (error.code === "auth/email-already-in-use") {
                alert("Cannot create user, email already in use")
            } else {
                console.log("user creation encounter an error", error)
            }
        }
    }

    console.log(formFields)

    const handleChange = (event) => {
        const { name, value } = event.target

        setFormFields({ ...formFields, [name]: value })
    }
    return (
        <div className="sign-up-container">
            <h1>Don't have an accaunt? </h1>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label='Display Name'
                    required
                    type="text"
                    name="displayName"
                    onChange={handleChange}
                    value={displayName}
                />

                <FormInput
                label='Email'
                    required
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={email}
                />

                <FormInput
                label='Password'
                    required
                    type="password"
                    name="password"
                    onChange={handleChange}
                    value={password}
                />

                <FormInput
                label='Confirm Password'
                    required
                    type="password"
                    name="confirmPassword"
                    onChange={handleChange}
                    value={confirmPassword}
                />
                <Button type="submit">Sign Up</Button>
            </form>
        </div>
    )
}

export default SignUpForm
