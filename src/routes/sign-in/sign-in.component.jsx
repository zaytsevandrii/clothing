import {
    createUserDocumentFromAuth,
    auth,
} from "../../utils/firebase/firebase.utils"
import { getRedirectResult } from "firebase/auth"
import { useEffect } from "react"
import SignUpForm from "../../components/sign-up/sign-up-form.component"
import SignInForm from "../../components/sign-in form/sign-in-form.component"
import './authentification.styles.scss'

const SignIn = () => {
    useEffect(() => {
        async function fetchData() {
            const response = await getRedirectResult(auth)
            if (response) {
                const userDocRef = await createUserDocumentFromAuth(response.user)
            }
        }
        fetchData()
    }, [])

   

    return (
        <div className="authentification-container">
            <SignInForm />
            <SignUpForm/>
        </div>
    )
}

export default SignIn
