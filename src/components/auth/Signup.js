import { useRef, useState } from "react";
import {Link} from 'react-router-dom';
import { signup, useAuth } from "./firebase";

export default function App() {
  const [ loading, setLoading ] = useState(false);
  const currentUser = useAuth();
  const [error, setError] = useState("")
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  async function handleSignup(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }


    try {
      setError("")
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      if (passwordRef.current.value === passwordConfirmRef.current.value) {
        return setError("Congratulations, your account has been successfully created!")
      }
    } catch {
      setError("You have already signed up with this account")
    }
    setLoading(false)
  }

  return (
    <div>
      
      <div>Sign up</div>
      {error}
      <form>
        Email:<input ref={emailRef} placeholder="Email" />
        Password:<input ref={passwordRef} type="password" placeholder="Password" />
        Confirm password:<input ref={passwordConfirmRef} type="password" placeholder="Confirm password" />
      </form>

      <button disabled={ loading || currentUser } onClick={handleSignup}>CREATE FREE ACCOUNT</button>

      <div>Already have an account? <Link to="/login">Login</Link></div>

    </div>
  );
}