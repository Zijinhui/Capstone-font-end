import { useRef, useState } from "react";
import {Link} from 'react-router-dom';
import { signup, useAuth } from "./firebase";
import {Form, Button} from 'react-bootstrap'

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
    <div className="signUp-form">
      <h1>Sign Up</h1>
      {error}
      <Form>
        <Form.Group className="mb-3" controlId="fromGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" ref={emailRef}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" ref={passwordRef} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Confirm Password" ref={passwordConfirmRef}/>
          </Form.Group>
      </Form>
     
      {/*<form>
        Email:<input ref={emailRef} placeholder="Email" />
        Password:<input ref={passwordRef} type="password" placeholder="Password" />
        Confirm password:<input ref={passwordConfirmRef} type="password" placeholder="Confirm password" />
      </form>*/}

      <Button variant="primary" type="submit" disabled={ loading || currentUser } onClick={handleSignup}>CREATE FREE ACCOUNT</Button>

      <div>Already have an account? <Link to="/login">Login</Link></div>

    </div>
  );
}